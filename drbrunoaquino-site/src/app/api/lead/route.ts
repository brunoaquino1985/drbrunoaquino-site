import { NextResponse } from "next/server";
import { emailEbookCurso, emailCapituloGratis } from "@/lib/emails";

/**
 * POST /api/lead
 * Body: { name: string, email: string, source?: string }
 *
 * Faz duas coisas, nesta ordem:
 *   1. cria/atualiza o contato no Brevo e adiciona à lista correspondente;
 *   2. dispara o e-mail com o material na hora, pela API transacional do Brevo.
 *
 * O envio é feito aqui e não por uma automação do painel: assim o e-mail sai no
 * mesmo instante do cadastro e qualquer falha aparece nos logs da Vercel.
 *
 * `source` separa a origem do lead:
 *   - "site-capitulo-gratis" (padrão) → lista BREVO_LIST_ID · capítulo do ebook
 *   - "curso-aula-gratis"             → lista BREVO_LIST_ID_CURSO · e-book do curso
 *
 * Variáveis de ambiente:
 *   BREVO_API_KEY        (obrigatória para cadastrar e enviar)
 *   BREVO_LIST_ID        lista dos leads do ebook
 *   BREVO_LIST_ID_CURSO  lista dos leads do curso (cai em BREVO_LIST_ID se ausente)
 *   BREVO_SENDER_EMAIL   remetente verificado no Brevo
 *   BREVO_SENDER_NAME    nome exibido do remetente
 *   BREVO_REPLY_TO       (opcional) endereço de resposta
 */

const BREVO = "https://api.brevo.com/v3";

async function registrarContato(
  apiKey: string,
  email: string,
  name: string,
  leadSource: string,
  listId: number
) {
  const res = await fetch(`${BREVO}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "api-key": apiKey },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: name, LEAD_SOURCE: leadSource },
      listIds: listId ? [listId] : undefined,
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 204) {
    const detail = await res.text();
    throw new Error(`contato ${res.status}: ${detail}`);
  }
}

async function enviarEmail(
  apiKey: string,
  email: string,
  name: string,
  leadSource: string
) {
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  if (!senderEmail) {
    console.warn(
      "BREVO_SENDER_EMAIL não configurado — contato salvo, e-mail não enviado."
    );
    return { enviado: false, motivo: "sem remetente" };
  }

  const tpl =
    leadSource === "curso-aula-gratis"
      ? emailEbookCurso(name)
      : emailCapituloGratis(name);

  const replyTo = process.env.BREVO_REPLY_TO;

  const res = await fetch(`${BREVO}/smtp/email`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "api-key": apiKey },
    body: JSON.stringify({
      sender: {
        email: senderEmail,
        name: process.env.BREVO_SENDER_NAME || "Dr. Bruno Aquino",
      },
      to: [{ email, name }],
      ...(replyTo ? { replyTo: { email: replyTo } } : {}),
      subject: tpl.subject,
      htmlContent: tpl.html,
      textContent: tpl.text,
      tags: [leadSource],
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`envio ${res.status}: ${detail}`);
  }

  return { enviado: true };
}

export async function POST(request: Request) {
  try {
    const { name, email, source } = await request.json();
    const leadSource =
      typeof source === "string" && source.trim()
        ? source.trim()
        : "site-capitulo-gratis";

    if (!email || !name) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(
      (leadSource === "curso-aula-gratis"
        ? process.env.BREVO_LIST_ID_CURSO || process.env.BREVO_LIST_ID
        : process.env.BREVO_LIST_ID) || "0"
    );

    if (!apiKey) {
      console.warn("BREVO_API_KEY não configurado — lead apenas em log:", {
        name,
        email,
        leadSource,
      });
      return NextResponse.json({ ok: true, warning: "Brevo não configurado" });
    }

    // 1) contato na lista — se falhar, é erro de verdade
    await registrarContato(apiKey, email, name, leadSource, listId);

    // 2) e-mail com o material — falha aqui NÃO derruba o cadastro, porque a
    //    pessoa já consegue baixar o material pelo botão na própria página.
    let envio: { enviado: boolean; motivo?: string } = { enviado: false };
    try {
      envio = await enviarEmail(apiKey, email, name, leadSource);
    } catch (err) {
      console.error("Brevo — falha ao enviar e-mail:", err);
      envio = { enviado: false, motivo: "falha no envio" };
    }

    return NextResponse.json({ ok: true, emailEnviado: envio.enviado });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Erro ao registrar. Tente novamente." },
      { status: 500 }
    );
  }
}
