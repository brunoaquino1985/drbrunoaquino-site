import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigado · Capítulo grátis a caminho",
  description: "Confira seu e-mail para receber o capítulo grátis.",
};

export default function ObrigadoPage() {
  return (
    <article className="section-pad">
      <div className="container-content max-w-narrow text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">
          Pronto! Em alguns minutos chega no seu e-mail
        </h1>
        <p className="text-ink-light text-lg leading-relaxed mb-8">
          Confere também a caixa de spam ou promoções. Se não chegar em 10 min,
          me chama no Instagram que te ajudo.
        </p>

        <div className="bg-sand rounded-xl p-6 text-left mb-8">
          <h2 className="text-xl font-display font-semibold text-navy mb-3">
            Enquanto isso, dá uma olhada
          </h2>
          <p className="text-ink mb-4">
            Os 4 manuais juntos no Kit Completo saem por R$ 119 (economia de
            30%) — é o que mais ajuda quem está começando o tratamento.
          </p>
          <Link href="/ebooks/kit-completo" className="btn-primary">
            Ver kit completo
          </Link>
        </div>

        <Link href="/" className="text-brand hover:underline">
          ← Voltar para a home
        </Link>
      </div>
    </article>
  );
}
