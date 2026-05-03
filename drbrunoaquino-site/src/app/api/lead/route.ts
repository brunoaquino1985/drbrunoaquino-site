import { NextResponse } from "next/server";

/**
 * POST /api/lead
 * Body: { name: string, email: string }
 *
 * Cria/atualiza contato no Brevo (https://developers.brevo.com/) e adiciona
 * à lista configurada via BREVO_LIST_ID. O fluxo de e-mail (envio do
 * capítulo grátis em PDF) é configurado dentro do Brevo via "Automation":
 * gatilho "Contato adicionado à lista X" → ação "Enviar e-mail com anexo".
 */
export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID || "0");

    if (!apiKey) {
      console.warn(
        "BREVO_API_KEY não configurado — lead recebido em modo log apenas:",
        { name, email }
      );
      // Em ambiente sem chave, ainda devolvemos sucesso pra não travar UX,
      // mas o usuário não vai receber o e-mail. Configure as envs no Vercel.
      return NextResponse.json({
        ok: true,
        warning: "Brevo não configurado",
      });
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
          LEAD_SOURCE: "site-capitulo-gratis",
        },
        listIds: listId ? [listId] : undefined,
        updateEnabled: true,
      }),
    });

    if (!res.ok && res.status !== 204) {
      const text = await res.text();
      console.error("Brevo error:", res.status, text);
      return NextResponse.json(
        { error: "Falha ao registrar lead", detail: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Erro inesperado" },
      { status: 500 }
    );
  }
}
