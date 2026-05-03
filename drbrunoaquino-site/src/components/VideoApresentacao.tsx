export default function VideoApresentacao() {
  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        <div className="text-center mb-8 max-w-narrow mx-auto">
          <span className="inline-block bg-brand-50 text-brand-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
            🎥 Conheça o Dr. Bruno
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">
            Por que estes manuais existem
          </h2>
          <p className="text-ink-light leading-relaxed">
            Em menos de 1 minuto, eu te conto a história e a missão por trás dos
            ebooks — e como eles podem te ajudar nesta jornada.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-navy">
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full h-auto block"
            poster="/images/hero-bruno.jpg"
          >
            <source src="/video/apresentacao.mp4" type="video/mp4" />
            Seu navegador não suporta o player de vídeo. Você pode baixar o
            vídeo{" "}
            <a href="/video/apresentacao.mp4" className="text-amber underline">
              clicando aqui
            </a>
            .
          </video>
        </div>
      </div>
    </section>
  );
}
