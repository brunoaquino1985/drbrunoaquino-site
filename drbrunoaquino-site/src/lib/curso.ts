/**
 * ============================================================
 *  PAINEL DE CONTROLE DO CURSO
 *  Tudo que muda com frequência está aqui. Editou este arquivo,
 *  fez commit → a Vercel republica o site sozinha.
 * ============================================================
 */

/**
 * Link de checkout da Hotmart.
 * Enquanto estiver "#", os botões de matrícula viram "aviso-me" e apontam
 * para a página da aula gratuita, em vez de levar a lugar nenhum.
 */
export const HOTMART_URL: string = "#";

/**
 * ID do vídeo da aula gratuita no YouTube.
 * É só o trecho depois de "v=" — em https://www.youtube.com/watch?v=AbC123xyz
 * o ID é "AbC123xyz". Deixe "" enquanto o vídeo não estiver publicado.
 *
 * Para a visualização contar no YouTube, o vídeo precisa estar PÚBLICO
 * (ou não listado) e com "Permitir incorporação" ligado.
 */
export const AULA_GRATIS_YOUTUBE_ID: string = "";

/** Página da aula gratuita dentro do próprio site. */
export const AULA_GRATIS_URL = "/curso/aula-gratis";

/**
 * true  → inscrições abertas, botões levam ao checkout.
 * false → mostra "inscrições em breve" e direciona para a lista de espera.
 */
export const INSCRICOES_ABERTAS: boolean = true;

/** Checkout realmente configurado? */
export const CHECKOUT_ATIVO = HOTMART_URL !== "#" && HOTMART_URL.length > 1;

/** Para onde o botão de matrícula deve apontar agora. */
export const MATRICULA_HREF = CHECKOUT_ATIVO ? HOTMART_URL : AULA_GRATIS_URL;

/** Texto do botão de matrícula conforme o estado das inscrições. */
export const MATRICULA_LABEL =
  CHECKOUT_ATIVO && INSCRICOES_ABERTAS
    ? "Quero me matricular"
    : "Quero ser avisado(a)";
