import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem sou · Dr. Bruno Aquino, oncologista clínico",
  description:
    "Médico oncologista clínico graduado pela UNIFENAS, membro titular da SBOC, ASCO e ESMO. CRM-MG 55.560 · RQE 56.208.",
};

export default function QuemSouPage() {
  return (
    <article>
      <section className="bg-sand section-pad">
        <div className="container-content max-w-narrow">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-3">
            Sobre o Dr. Bruno Aquino
          </h1>
          <p className="text-ink-light text-lg">
            Oncologista clínico · CRM-MG 55.560 · RQE 56.208
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content max-w-narrow space-y-5 text-ink leading-relaxed text-lg">
          <p>
            Sou médico oncologista clínico, graduado em Medicina pela
            Universidade José do Rosário Velano (UNIFENAS) em 2011, com título
            de especialista em Oncologia Clínica pela Sociedade Brasileira de
            Oncologia Clínica.
          </p>
          <p>
            Ao longo da minha trajetória, construí minha atuação com foco não
            apenas na excelência técnica, mas também no cuidado humano e
            próximo ao paciente.
          </p>
          <p>
            Sou membro titular da Sociedade Brasileira de Oncologia Clínica
            (SBOC), membro da Sociedade Americana de Oncologia Clínica (ASCO),
            da Sociedade Europeia de Oncologia Clínica (ESMO) e do Grupo
            Brasileiro de Oncologia Torácica (GBOT), mantendo constante
            atualização científica alinhada às melhores práticas internacionais.
          </p>
          <p>
            Atualmente, atuo como Responsável Técnico da Oncologia Clínica do
            Hospital Bom Pastor e sou presidente da Comissão de Registro
            Hospitalar de Câncer da FHOMUV.
          </p>
          <p className="text-navy font-medium border-l-4 border-brand pl-4 py-2 bg-sand">
            Minha missão é oferecer informação clara, segura e acessível,
            ajudando pacientes e familiares a enfrentarem o tratamento
            oncológico com mais conhecimento, tranquilidade e confiança.
          </p>
        </div>
      </section>

      <section className="section-pad bg-sand">
        <div className="container-content text-center max-w-narrow">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-3">
            Pronto(a) para começar?
          </h2>
          <p className="text-ink-light mb-6">
            Comece pelo capítulo 1 do Manual de Quimioterapia, gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/capitulo-gratis" className="btn-primary">
              Receber capítulo grátis
            </Link>
            <Link href="/ebooks" className="btn-secondary">
              Ver todos os ebooks
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
