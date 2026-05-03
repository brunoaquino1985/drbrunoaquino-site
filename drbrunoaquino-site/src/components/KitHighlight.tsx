import Link from "next/link";
import { kit } from "@/content/ebooks";

export default function KitHighlight() {
  const discount = kit.oldPrice
    ? Math.round((1 - kit.price / kit.oldPrice) * 100)
    : 0;
  return (
    <section className="section-pad bg-sand">
      <div className="container-content">
        <div className="bg-gradient-to-br from-navy to-brand rounded-2xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber text-navy text-xs font-bold px-4 py-1.5 rounded-bl-lg">
            MAIS VENDIDO · {discount}% OFF
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center mt-4">
            <div className="md:col-span-2">
              <h2 className="!text-white text-3xl md:text-4xl font-display font-bold mb-3">
                ⭐ {kit.title}
              </h2>
              <p className="text-white/85 mb-5 leading-relaxed">
                {kit.subtitle}
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {kit.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-amber">✓</span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-right">
              {kit.oldPrice && (
                <div className="text-sm line-through text-white/60">
                  De R$ {kit.oldPrice}
                </div>
              )}
              <div className="text-5xl font-display font-bold mb-1 !text-white">
                R$ {kit.price}
              </div>
              <div className="text-xs text-white/70 mb-5">
                à vista no Pix · ou em até 6x sem juros
              </div>
              <Link
                href="/ebooks/kit-completo"
                className="inline-block bg-white text-brand font-display font-semibold px-6 py-3 rounded-lg hover:bg-amber hover:text-navy transition-colors w-full md:w-auto"
              >
                Quero o kit completo →
              </Link>
              <div className="text-[11px] text-white/60 mt-3">
                🔒 7 dias de garantia · Acesso imediato
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
