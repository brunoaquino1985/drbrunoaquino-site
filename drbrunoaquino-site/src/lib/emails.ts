/**
 * E-mails transacionais enviados pelo site via API do Brevo.
 *
 * Diferente de uma automação montada no painel, o envio acontece no mesmo
 * instante do cadastro e o erro aparece nos logs — dá para depurar.
 */

const SITE = "https://drbrunoaquino.med.br";

export type EmailTemplate = {
  subject: string;
  html: string;
  text: string;
};

const wrapper = (conteudo: string, preheader: string) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dr. Bruno Aquino</title>
</head>
<body style="margin:0;padding:0;background:#f2efe7;font-family:Helvetica,Arial,sans-serif;">
  <span style="display:none;font-size:1px;color:#f2efe7;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${preheader}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2efe7;padding:28px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(10,32,41,0.08);">

        <tr><td style="background:#0C3A47;padding:26px 32px;">
          <div style="color:#E7CE93;font-size:11px;font-weight:bold;letter-spacing:2.5px;text-transform:uppercase;">
            Capacitação em Oncologia para Enfermagem
          </div>
          <div style="color:#ffffff;font-size:15px;margin-top:6px;">
            Dr. Bruno Aquino de Souza · Oncologista Clínico
          </div>
        </td></tr>

        <tr><td style="height:4px;background:#C9A24B;"></td></tr>

        <tr><td style="padding:34px 32px 30px;color:#0a2029;font-size:16px;line-height:1.6;">
          ${conteudo}
        </td></tr>

        <tr><td style="padding:22px 32px 30px;border-top:1px solid #eceadf;color:#7b8a90;font-size:12px;line-height:1.6;">
          <strong style="color:#0a2029;">Dr. Bruno Aquino de Souza</strong><br>
          Oncologista Clínico · CRM-MG 55560 · RQE 56208<br>
          <a href="${SITE}" style="color:#9a7a2e;text-decoration:none;">drbrunoaquino.med.br</a>
          <p style="margin:16px 0 0;color:#9aa7ac;">
            Você recebeu este e-mail porque pediu o material no site. Conteúdo educativo
            para profissionais de saúde — não substitui protocolo institucional.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

const botao = (href: string, texto: string) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:26px 0;">
     <tr><td style="background:#C9A24B;border-radius:999px;">
       <a href="${href}" style="display:inline-block;padding:15px 34px;color:#0a2029;font-size:15px;font-weight:bold;text-decoration:none;">
         ${texto}
       </a>
     </td></tr>
   </table>`;

/** E-mail do e-book da aula gratuita do curso. */
export function emailEbookCurso(nome: string): EmailTemplate {
  const primeiro = nome.trim().split(/\s+/)[0] || "";
  const linkEbook = `${SITE}/curso/5-verdades-quimioterapia.pdf`;
  const linkCurso = `${SITE}/curso`;

  const conteudo = `
    <p style="margin:0 0 18px;">Olá, ${primeiro}!</p>

    <p style="margin:0 0 18px;">
      Aqui está o seu e-book <strong>“O que ninguém te contou sobre administrar
      quimioterapia”</strong> — as 5 verdades da aula, mais as 3 atitudes que já elevam
      a sua segurança no próximo plantão.
    </p>

    ${botao(linkEbook, "Baixar o e-book em PDF")}

    <p style="margin:0 0 18px;">
      Guarde o arquivo no celular: ele foi feito para ser consultado antes da infusão,
      não para ser lido uma vez só.
    </p>

    <p style="margin:0 0 8px;">
      Se ainda não assistiu à aula completa, ela está aqui:<br>
      <a href="${SITE}/curso/aula-gratis" style="color:#9a7a2e;">
        drbrunoaquino.med.br/curso/aula-gratis
      </a>
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
           style="margin-top:28px;background:#f7f5ee;border-radius:10px;">
      <tr><td style="padding:20px 22px;">
        <div style="font-size:11px;font-weight:bold;letter-spacing:1.8px;text-transform:uppercase;color:#9a7a2e;">
          Pré-inscrição aberta
        </div>
        <p style="margin:10px 0 0;font-size:15px;line-height:1.55;color:#0a2029;">
          As 5 verdades são a porta de entrada. O curso completo tem
          <strong>13 aulas</strong>, das bases às emergências oncológicas, com apostilas,
          casos clínicos, 65 questões comentadas e certificado de 20 horas.
          As aulas começam em <strong>15 de agosto</strong>.
        </p>
        <p style="margin:12px 0 0;font-size:15px;color:#0a2029;">
          <a href="${linkCurso}" style="color:#9a7a2e;font-weight:bold;">
            Conhecer o curso completo →
          </a>
        </p>
      </td></tr>
    </table>
  `;

  return {
    subject: "Seu e-book: 5 verdades sobre administrar quimioterapia",
    html: wrapper(conteudo, "As 5 verdades da aula, em PDF, para levar no plantão."),
    text: [
      `Olá, ${primeiro}!`,
      "",
      'Aqui está o seu e-book "O que ninguém te contou sobre administrar quimioterapia".',
      "",
      `Baixar o PDF: ${linkEbook}`,
      "",
      `Aula completa: ${SITE}/curso/aula-gratis`,
      `Curso completo (pré-inscrição, aulas começam em 15 de agosto): ${linkCurso}`,
      "",
      "Dr. Bruno Aquino de Souza · Oncologista Clínico · CRM-MG 55560 · RQE 56208",
    ].join("\n"),
  };
}

/** E-mail do capítulo grátis do ebook de quimioterapia (público de pacientes). */
export function emailCapituloGratis(nome: string): EmailTemplate {
  const primeiro = nome.trim().split(/\s+/)[0] || "";
  const link = `${SITE}/capitulo-gratis.pdf`;

  const conteudo = `
    <p style="margin:0 0 18px;">Olá, ${primeiro}!</p>
    <p style="margin:0 0 18px;">
      Aqui está o capítulo gratuito do <strong>Manual de Quimioterapia</strong>: como
      funciona o tratamento, cuidados após cada sessão, graus de náuseas e vômitos e um
      checklist para a próxima consulta.
    </p>
    ${botao(link, "Baixar o capítulo em PDF")}
    <p style="margin:0;">
      Qualquer dúvida, é só responder este e-mail.
    </p>
  `;

  return {
    subject: "Seu capítulo grátis do Manual de Quimioterapia",
    html: wrapper(conteudo, "O capítulo em PDF, escrito por oncologista clínico."),
    text: [
      `Olá, ${primeiro}!`,
      "",
      "Aqui está o capítulo gratuito do Manual de Quimioterapia.",
      "",
      `Baixar o PDF: ${link}`,
      "",
      "Dr. Bruno Aquino de Souza · Oncologista Clínico · CRM-MG 55560 · RQE 56208",
    ].join("\n"),
  };
}
