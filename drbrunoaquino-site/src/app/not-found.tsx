import Link from "next/link";

export default function NotFound() {
  return (
    <article className="section-pad">
      <div className="container-content max-w-narrow text-center">
        <div className="text-6xl mb-4">🤔</div>
        <h1 className="text-3xl font-display font-bold text-navy mb-3">
          Página não encontrada
        </h1>
        <p className="text-ink-light mb-8">
          O endereço que você acessou não existe ou foi movido.
        </p>
        <Link href="/" className="btn-primary">
          Voltar para a home
        </Link>
      </div>
    </article>
  );
}
