import { ebooks, kit } from "@/content/ebooks";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return [...ebooks.map((e) => ({ slug: e.slug })), { slug: "kit-completo" }];
}

export function generateMetadata({ params }: Props): Metadata {
  if (params.slug === "kit-completo") {
    return {
      title: kit.title,
      description: kit.subtitle,
    };
  }
  const ebook = ebooks.find((e) => e.slug === params.slug);
  return {
    title: ebook ? ebook.shortTitle : "Ebook",
    description: ebook?.subtitle,
  };
}

export default function EbookDetailPage({ params }: Props) {
  if (params.slug === "kit-completo") {
    return <KitDetail />;
  }
  const ebook = ebooks.find((e) => e.slug === params.slug);
  if (!ebook) notFound();

  const discount = ebook.oldPrice
    ? Math.round((1 - ebook.price / ebook.oldPrice) * 100)
    : 0;

  return (
    <article>
      <section className="section-pad" style={{ background: ebook.bgColor }}>
        <div className="container-content grid md:grid-cols-2 gap-10 items-center">
          <div
            className="aspect-[3/4] rounded-2xl flex items-center justify-center text-white p-8 shadow-2xl"
            style={{ background: ebook.accentColor }}
          >
            <div className="text-center">
              <div className="text-7xl font-display font-bold opacity-30 mb-2">
                {ebook.number}
              </div>
              <div className="font-display font-semibold text-2xl">
                {ebook.shortTitle}
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block bg-white/80 text-ink text-xs font-medium px-3 py-1 rounded-full mb-3">
              Ebook · PDF · Leitura em qualquer dispositivo
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">
              {ebook.title}
            </h1>
            <p className="text-lg text-ink mb-6 leading-relaxed">
              {ebook.subtitle}
            </p>

            <div className="bg-white rounded-xl p-6 border border-sand-dark shadow-sm">
              <div className="flex items-baseline gap-3 mb-2">
                {ebook.oldPrice && (
                  <span className="text-base text-ink-light line-through">
                    R$ {ebook.oldPrice}
                  </span>
                )}
                <span className="text-4xl font-display font-bold text-brand">
                  R$ {ebook.price}
                </span>
                {discount > 0 && (
                  <span className="bg-amber text-navy text-xs font-bold px-2 py-1 rounded">
                    {discount}% OFF
                  </span>
                )}
              </div>
              <div className="text-sm text-ink-light mb-4">
                à vista no Pix · ou em até 6x sem juros
              </div>
              <a
                href={
                  process.env[ebook.hotmartLinkEnv as keyof NodeJS.ProcessEnv] as string ||
                  "#"
                }
                target="_blank"
                rel="noopener"
                className="btn-primary w-full"
              >
                Comprar agora — R$ {ebook.price}
              </a>
              <div className="text-xs text-ink-light text-center mt-3">
                🔒 7 dias de garantia · Acesso imediato após pagamento
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content max-w-narrow">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-4">
            Sobre este manual
          </h2>
          <p className="text-ink leading-relaxed mb-8 text-lg">
            {ebook.description}
          </p>
          {ebook.detailedSections.map((sec) => (
            <div key={sec.title} className="mb-8">
              <h3 className="text-xl font-display font-semibold text-navy mb-3">
                {sec.title}
              </h3>
              <ul className="space-y-2">
                {sec.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-teal flex-shrink-0 mt-1">✓</span>
                    <span className="text-ink leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-sand rounded-xl p-6 mt-10">
            <p className="text-ink mb-3">
              <strong>Quer todos os manuais juntos?</strong> O Kit Completo tem
              os 4 ebooks por R$ 119 (economia de 30%).
            </p>
            <Link href="/ebooks/kit-completo" className="btn-primary">
              Ver kit completo
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function KitDetail() {
  const discount = kit.oldPrice
    ? Math.round((1 - kit.price / kit.oldPrice) * 100)
    : 0;
  return (
    <article>
      <section className="section-pad bg-gradient-to-br from-navy to-brand text-white">
        <div className="container-content max-w-narrow text-center">
          <span className="inline-block bg-amber text-navy text-xs font-bold px-3 py-1 rounded-full mb-4">
            ⭐ MAIS VENDIDO · {discount}% OFF
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {kit.title}
          </h1>
          <p className="text-lg text-white/85 leading-relaxed mb-8">
            {kit.subtitle}
          </p>

          <div className="bg-white text-ink rounded-xl p-8 shadow-2xl text-left">
            <div className="flex items-baseline gap-3 mb-2">
              {kit.oldPrice && (
                <span className="text-lg text-ink-light line-through">
                  R$ {kit.oldPrice}
                </span>
              )}
              <span className="text-5xl font-display font-bold text-brand">
                R$ {kit.price}
              </span>
            </div>
            <div className="text-sm text-ink-light mb-5">
              à vista no Pix · ou em até 6x sem juros
            </div>

            <h2 className="font-display font-semibold text-navy text-lg mb-3">
              O que está incluso
            </h2>
            <ul className="space-y-2 mb-6">
              {kit.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-teal">✓</span>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={
                process.env[kit.hotmartLinkEnv as keyof NodeJS.ProcessEnv] as string ||
                "#"
              }
              target="_blank"
              rel="noopener"
              className="btn-primary w-full"
            >
              Quero o kit — R$ {kit.price}
            </a>
            <div className="text-xs text-ink-light text-center mt-3">
              🔒 7 dias de garantia · Acesso imediato após pagamento
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content max-w-narrow">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-4">
            Por que o kit completo?
          </h2>
          <p className="text-ink leading-relaxed mb-6 text-lg">
            {kit.description}
          </p>

          <h3 className="text-xl font-display font-semibold text-navy mb-3">
            Benefícios
          </h3>
          <ul className="space-y-2 mb-8">
            {kit.benefits.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                <span className="text-ink leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
