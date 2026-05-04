import LeadCapture from "@/components/LeadCapture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capítulo grátis · Manual de Quimioterapia",
  description:
    "Receba gratuitamente um capítulo do Manual de Quimioterapia: como funciona o tratamento, cuidados pós-aplicação, graus de náuseas e checklist da consulta. Por oncologista clínico.",
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
            Capítulo grátis · Manual de Quimioterapia
          </h1>
          <p className="text-lg text-ink-light leading-relaxed">
            Se você ou alguém da sua família vai começar quimioterapia, esse
            capítulo é pra você. 5 páginas em PDF, em linguagem clara, com o que
            normalmente não cabe na consulta inicial.
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
                Como funciona a quimioterapia (vias, ciclos e os 4 objetivos
                do tratamento)
              </li>
              <li className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                Cuidados após cada sessão e monitoramento de sintomas
              </li>
              <li className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                Quando procurar ajuda médica imediata
              </li>
              <li className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                Graus de náuseas e vômitos · medicamentos usados no controle
              </li>
              <li className="flex gap-3">
                <span className="text-teal mt-1">✓</span>
                Checklist completo do que levar à próxima consulta
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
