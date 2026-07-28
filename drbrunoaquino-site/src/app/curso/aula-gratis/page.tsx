// src/app/curso/aula-gratis/page.tsx
// Aula gratuita do curso — vídeo liberado (conta views no YouTube) +
// captura de e-mail para o material de apoio.
//
// Constantes (ID do vídeo, link da Hotmart) ficam em src/lib/curso.ts

import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Manrope } from "next/font/google";
import YouTubeLite from "@/components/YouTubeLite";
import AulaGratisForm from "@/components/AulaGratisForm";
import {
  AULA_GRATIS_YOUTUBE_ID,
  MATRICULA_HREF,
  MATRICULA_LABEL,
  CHECKOUT_ATIVO,
  INSCRICOES_ABERTAS,
} from "@/lib/curso";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const TITULO_AULA = "O que ninguém te contou sobre administrar quimioterapia";

export const metadata: Metadata = {
  title: "Aula gratuita | Capacitação em Oncologia para Enfermagem",
  description:
    "Assista grátis: 5 verdades sobre a administração de quimioterapia que mudam a forma como a enfermagem cuida do paciente oncológico. Com material de apoio para baixar.",
  alternates: { canonical: "/curso/aula-gratis" },
  openGraph: {
    title: "Aula gratuita · Capacitação em Oncologia para Enfermagem",
    description:
      "5 verdades sobre administrar quimioterapia com segurança. Aula gratuita com o oncologista Dr. Bruno Aquino.",
    type: "video.other",
  },
};

const aprendizados = [
  ["O erro mais comum na checagem pré-infusão", "e o passo simples que evita a maioria dos incidentes."],
  ["Como reconhecer um extravasamento cedo", "antes de virar lesão — o que olhar e o que fazer nos primeiros minutos."],
  ["O sinal de reação infusional que passa batido", "e por que parar a infusão não é a única conduta."],
  ["Neutropenia febril não espera", "a janela de tempo que muda o desfecho do paciente."],
  ["O que dizer ao paciente antes de cada ciclo", "a orientação que reduz idas desnecessárias ao pronto-socorro."],
];

export default function AulaGratisPage() {
  return (
    <div className={`${sans.className} bg-[#071f27] text-white antialiased`}>
      {/* ===================== TOPO + PLAYER ===================== */}
      <section className="relative overflow-hidden pb-20 pt-14">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(90% 60% at 50% 0%, rgba(201,162,75,0.16), transparent 62%)" }}
        />

        <div className="relative mx-auto max-w-4xl px-6">
          <Link
            href="/curso"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#E7CE93]"
          >
            ← Voltar para o curso
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A24B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E7CE93]">
              Aula gratuita · sem cadastro
            </span>
          </div>

          <h1
            className={`${display.className} mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl`}
          >
            {TITULO_AULA}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            5 verdades sobre a administração de quimioterapia que mudam a forma como você cuida — do reconhecimento do
            risco à conduta correta à beira do leito.
          </p>

          <div className="mt-10">
            <YouTubeLite
              id={AULA_GRATIS_YOUTUBE_ID}
              title={TITULO_AULA}
              poster={AULA_GRATIS_YOUTUBE_ID ? undefined : "/curso/gratis.jpg"}
            />
          </div>

          <p className="mt-5 text-sm text-white/55">
            Com <span className="font-semibold text-white/85">Dr. Bruno Aquino de Souza</span> · Oncologista Clínico ·
            CRM-MG 55560 · RQE 56208
          </p>
        </div>
      </section>

      {/* separador dourado */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />

      {/* ===================== O QUE VOCÊ VAI VER ===================== */}
      <section className="bg-[#f6f4ee] py-24 text-[#0a2029]">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7a2e]">Nesta aula</p>
          <h2 className={`${display.className} mt-3 text-3xl font-semibold sm:text-4xl`}>
            O que você vai levar em 30 minutos
          </h2>

          <ul className="mt-10 space-y-6">
            {aprendizados.map(([t, d], i) => (
              <li key={t} className="flex gap-5">
                <span
                  className={`${display.className} flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0C3A47] text-lg font-semibold text-[#E7CE93]`}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-lg font-semibold leading-snug">{t}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#0a2029]/70">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== MATERIAL DE APOIO ===================== */}
      <section className="relative overflow-hidden py-24">
        <img src="/curso/band.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,25,32,0.94) 0%, rgba(6,25,32,0.88) 50%, rgba(6,25,32,0.96) 100%)",
          }}
        />

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <span className="inline-block rounded-full bg-[#C9A24B] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#0a2029]">
            Material gratuito
          </span>
          <h2 className={`${display.className} mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl`}>
            Baixe o guia rápido de segurança
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            O resumo da aula em PDF: checklist pré-infusão, sinais de alerta de extravasamento e reação infusional, e a
            conduta imediata em cada um. Feito para caber no bolso do jaleco.
          </p>

          <div className="mt-9 text-left">
            <AulaGratisForm />
          </div>

          <p className="mt-6 text-sm text-white/55">
            Você também recebe em primeira mão as novidades e as próximas turmas do curso.
          </p>
        </div>
      </section>

      {/* ===================== CTA MATRÍCULA ===================== */}
      <section className="relative overflow-hidden bg-[#071f27] py-24">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(80% 60% at 50% 0%, rgba(201,162,75,0.16), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E7CE93]">Curso completo</p>
          <h2 className={`${display.className} mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl`}>
            Gostou da aula? São mais 13 pela frente.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Das bases às emergências oncológicas, com apostilas ilustradas, casos clínicos integrados, 65 questões
            comentadas e certificado de conclusão.
          </p>

          <a
            href={MATRICULA_HREF}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24B] px-10 py-5 text-base font-bold uppercase tracking-wide text-[#0a2029] transition hover:brightness-110"
            style={{ boxShadow: "0 14px 46px -12px rgba(201,162,75,0.65)" }}
          >
            {MATRICULA_LABEL} →
          </a>

          {!(CHECKOUT_ATIVO && INSCRICOES_ABERTAS) && (
            <p className="mt-6 text-sm text-white/50">
              Inscrições em breve · deixe seu contato acima para ser avisado(a)
            </p>
          )}
        </div>
      </section>

      {/* Rodapé: usamos o global do site (src/components/Footer.tsx) */}
    </div>
  );
}
