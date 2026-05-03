import { ebooks } from "@/content/ebooks";
import EbookCard from "./EbookCard";

export default function EbookGrid() {
  return (
    <section className="section-pad">
      <div className="container-content">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">
            Ebooks individuais
          </h2>
          <p className="text-ink-light max-w-narrow mx-auto">
            Cada manual cobre um tema específico. Compre só o que precisa — ou
            economize 30% levando o kit completo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ebooks.map((ebook) => (
            <EbookCard key={ebook.slug} ebook={ebook} />
          ))}
        </div>
      </div>
    </section>
  );
}
