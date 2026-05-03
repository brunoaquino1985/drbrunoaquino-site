import LeadCapture from "@/components/LeadCapture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capítulo 1 grátis · Manual de Quimioterapia",
  description:
    "Receba gratuitamente o capítulo 1 do Manual de Quimioterapia: checklist da 1ª sessão, sinais de alerta e dicas práticas escritas por oncologista clínico.",
};

export default function CapituloGratisPage() {
  return (
    <article>
      <section className="bg-sand section-pad">
        <div className="container-content max-w-narrow text-center">
          <span className="inline-block bg-amber text-navy text-xs font-bold px-3 py-1 rounded-full mb-4">
            🎁 100% gratuito
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
            Capítulo 1 grátis · Manual de Quimioterapia
          </h1>
          <p className="text-lg text-ink-light leading-relaxed">
            Se você ou alguém da sua família vai começar quimioterapia, esse
            capítulo é pra você. 8 páginas com tudo que normalmente não cabe na
            consulta inicial.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-4">
              O que tem dentro
            </h2>
            <ul className="space-y-3 text-ink leading-relaxed">
              <li className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                Checklist do que levar à 1ª sessão
              </li>
              <li className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                Como se preparar fisicamente e emocionalmente
              </li>
              <li className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                O que esperar do antes, durante e depois
              </li>
              <li className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                Sinais de alerta para procurar atendimento
              </li>
              <li className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                Mitos e verdades sobre a quimioterapia
              </li>
            </ul>
            <div className="mt-8 p-4 bg-sand rounded-lg text-sm text-ink leading-relaxed">
              <strong>Importante:</strong> esse material complementa a sua
              consulta médica — não substitui. Sempre siga as orientações do
              seu oncologista.
            </div>
          </div>

          <LeadCapture />
        </div>
      </section>
    </article>
  );
}
