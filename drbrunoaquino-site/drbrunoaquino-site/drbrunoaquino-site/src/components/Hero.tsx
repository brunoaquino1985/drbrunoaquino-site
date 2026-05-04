import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-sand via-white to-brand-50 section-pad">
      <div className="container-content grid gap-10 md:grid-cols-2 items-center">
        <div className="animate-fade-in">
          <span className="inline-block bg-brand-50 text-brand-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
            ✓ Material baseado em evidência médica
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy leading-tight mb-4">
            Atravesse o tratamento oncológico com mais segurança e tranquilidade.
          </h1>
          <p className="text-lg text-ink-light mb-8 leading-relaxed">
            Manuais escritos por um oncologista clínico para pacientes e
            familiares — linguagem clara, baseada em evidência, sem alarmismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/ebooks" className="btn-primary">
              Ver os ebooks
            </Link>
            <Link href="/capitulo-gratis" className="btn-secondary">
              Receber capítulo grátis
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[3/4] bg-brand rounded-2xl overflow-hidden shadow-xl relative">
            {/* Placeholder se a foto não estiver carregada */}
            <img
              src="/images/hero-bruno.jpg"
              alt="Dr. Bruno Aquino, oncologista clínico"
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                const fallback = t.parentElement?.querySelector("[data-fallback]") as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              data-fallback
              className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-brand to-navy text-white text-center p-8 flex-col"
            >
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <div className="font-display font-semibold text-lg">
                Dr. Bruno Aquino
              </div>
              <div className="text-sm text-white/80 mt-1">
                Substitua por sua foto em
                <br />
                <code className="text-amber">/public/images/hero-bruno.jpg</code>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-sand-dark">
            <div className="text-xs text-ink-light">12 anos</div>
            <div className="text-sm font-semibold text-navy">de oncologia clínica</div>
          </div>
        </div>
      </div>
    </section>
  );
}
