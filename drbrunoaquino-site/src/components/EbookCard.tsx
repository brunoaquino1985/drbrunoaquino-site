import Link from "next/link";
import type { Ebook } from "@/content/ebooks";

export default function EbookCard({ ebook }: { ebook: Ebook }) {
  return (
    <Link
      href={`/ebooks/${ebook.slug}`}
      className="group bg-white rounded-xl border border-sand-dark hover:border-brand hover:shadow-xl transition-all overflow-hidden flex flex-col"
    >
      <div
        className="aspect-[3/4] relative overflow-hidden"
        style={{ background: ebook.accentColor }}
      >
        <img
          src={ebook.cover}
          alt={ebook.shortTitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display font-semibold text-base text-navy mb-2 leading-snug">
          {ebook.shortTitle}
        </h3>
        <p className="text-sm text-ink-light mb-4 flex-1 leading-relaxed">
          {ebook.subtitle}
        </p>
        <div className="flex items-end justify-between">
          <div>
            {ebook.oldPrice && (
              <div className="text-xs text-ink-lighter line-through">
                R$ {ebook.oldPrice}
              </div>
            )}
            <div className="text-xl font-display font-bold text-brand">
              R$ {ebook.price}
            </div>
            <div className="text-[11px] text-ink-light">à vista no Pix</div>
          </div>
          <span className="text-sm font-medium text-brand group-hover:underline">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  );
}
