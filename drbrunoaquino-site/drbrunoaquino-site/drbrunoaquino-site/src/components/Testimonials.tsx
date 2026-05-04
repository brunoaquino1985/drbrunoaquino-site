import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <section className="section-pad bg-sand">
      <div className="container-content">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">
            Quem já usou conta
          </h2>
          <p className="text-ink-light max-w-narrow mx-auto">
            Depoimentos reais de pacientes e familiares que tiveram os manuais
            como apoio durante o tratamento.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl border border-sand-dark p-6 flex flex-col"
            >
              <div className="text-amber mb-3 text-base">★★★★★</div>
              <p className="text-ink leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-sand-dark">
                <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-display font-semibold">
                  {t.initial}
                </div>
                <div>
                  <div className="font-medium text-navy text-sm">{t.name}</div>
                  {t.context && (
                    <div className="text-xs text-ink-light">{t.context}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
