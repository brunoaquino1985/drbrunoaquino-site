/**
 * ============================================================
 *  PAINEL DE CONTROLE DO CURSO
 *  Tudo que muda com frequência está aqui. Editou este arquivo,
 *  fez commit → a Vercel republica o site sozinha.
 * ============================================================
 */

/**
 * Link DIRETO do checkout da Hotmart.
 *
 * O link antigo (go.hotmart.com/Q106913820E?dp=1) redirecionava para a vitrine do
 * marketplace, e não para o pagamento: quem clicava em "garantir minha pré-inscrição"
 * caía numa página de loja, com menu, categorias e botão de login, e ainda precisava
 * procurar onde comprar. Um passo a mais bem no ponto mais caro do funil.
 */
export const HOTMART_URL: string = "https://pay.hotmart.com/Q106913820E";

/**
 * ID do vídeo da aula gratuita no YouTube.
 * É só o trecho depois de "v=" ou o final da URL curta youtu.be/___
 *
 * Para a visualização contar no YouTube, o vídeo precisa estar PÚBLICO
 * (ou não listado) e com "Permitir incorporação" ligado.
 */
export const AULA_GRATIS_YOUTUBE_ID: string = "WR-MhsFCLlg";

/** Página da aula gratuita dentro do próprio site. */
export const AULA_GRATIS_URL = "/curso/aula-gratis";

/** E-book entregue depois que a pessoa deixa o e-mail. */
export const EBOOK_URL = "/curso/5-verdades-quimioterapia.pdf";

/**
 * true  → inscrições abertas, botões levam ao checkout.
 * false → mostra "inscrições em breve" e direciona para a lista de espera.
 */
export const INSCRICOES_ABERTAS: boolean = true;

/**
 * Fase de pré-inscrição: as vendas já estão abertas, mas as aulas só
 * começam na data abaixo. Quando o curso começar, mude para false.
 */
export const PRE_INSCRICAO: boolean = true;

/** Data em que a primeira aula é liberada. */
export const DATA_INICIO = "15 de agosto de 2026";
export const DATA_INICIO_CURTA = "15/08/2026";

/** Preço promocional da pré-inscrição. */
export const PRECO = "R$ 129,90";
export const PARCELAS = "em até 12x";

/** Checkout realmente configurado? */
export const CHECKOUT_ATIVO = HOTMART_URL !== "#" && HOTMART_URL.length > 1;

/** Para onde o botão de matrícula deve apontar agora. */
export const MATRICULA_HREF = CHECKOUT_ATIVO ? HOTMART_URL : AULA_GRATIS_URL;

/** Vendas efetivamente no ar. */
export const VENDAS_ABERTAS = CHECKOUT_ATIVO && INSCRICOES_ABERTAS;

/** Texto do botão de matrícula conforme a fase. */
export const MATRICULA_LABEL = !VENDAS_ABERTAS
  ? "Quero ser avisado(a)"
  : PRE_INSCRICAO
    ? "Garantir minha pré-inscrição"
    : "Quero me matricular";

/** Linha de apoio que aparece embaixo dos botões de matrícula. */
export const MATRICULA_NOTA = !VENDAS_ABERTAS
  ? "Inscrições em breve · assista à aula gratuita e deixe seu contato"
  : PRE_INSCRICAO
    ? `Pré-inscrição aberta · ${PRECO} ${PARCELAS} · as aulas começam em ${DATA_INICIO_CURTA}`
    : `Inscrições abertas · ${PRECO} ${PARCELAS} · acesso imediato`;
