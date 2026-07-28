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
  MATRICULA_NOTA,
  PRE_INSCRICAO,
  VENDAS_ABERTAS,
  DATA_INICIO,
  DATA_INICIO_CURTA,
  PRECO,
  PARCELAS,
} from "@/lib/curso";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const TITULO_AULA = "O que ninguém te contou sobre administrar quimioterapia";

export const metadata: Metadata = {
  title: "Aula gratuita | Capacitação em Oncologia para Enfermagem",
    description:
    "Assista grátis: 5 verdades sobre administrar quimioterapia que todo profissional de enfermagem precisa conhecer — e por que aprender só na prática é perigoso. Com e-book em PDF para baixar.",
  alternates: { canonical: "/curso/aula-gratis" },
  openGraph: {
    title: "Aula gratuita · Capacitação em Oncologia para Enfermagem",
    description:
      "5 verdades sobre administrar quimioterapia com segurança. Aula gratuita com o oncologista Dr. Bruno Aquino de Souza.",
    type: "video.other",
  },
};

const aprendizados = [
  [
    "A margem de erro é mínima",
    "O quimioterápico tem janela terapêutica estreita: a distância entre a dose que trata e a que causa dano é pequena. Dose, via e tempo de infusão não têm folga.",
  ],
  [
    "Existe droga que pode queimar o tecido",
    "As vesicantes. Se saem da veia e caem no tecido, a lesão pode chegar à necrose — e a conduta errada nos primeiros minutos piora tudo.",
  ],
  [
    "O risco também é seu",
    "Quimioterápico é agente perigoso. Há exposição ocupacional no preparo, na administração e até no manuseio das excretas do paciente.",
  ],
  [
    "Às vezes, uma febre é uma emergência",
    "Quando a quimioterapia derruba as defesas, um estado febril pode ser o único sinal de uma infecção grave. O que parece banal, não é.",
  ],
  [
    "A enfermagem é a última barreira",
    "Antes de o medicamento chegar ao paciente, é você quem confere, questiona e administra — a última chance de interceptar um erro.",
  ],
];

export default function AulaGratisPage() {
  return (
    <div className={`${sans.className} bg-[#071f27] text-white antialiased`}>
      {/* ===================== FAIXA DE PRÉ-INSCRIÇÃO ===================== */}
      {VENDAS_ABERTAS && PRE_INSCRICAO && (
        <a
          href={MATRICULA_HREF}
          className="block bg-[#C9A24B] px-6 py-3 text-center text-sm font-semibold text-[#0a2029] transition hover:brightness-105"
        >
          <span className="font-extrabold uppercase tracking-wide">Pré-inscrição aberta</span> · curso começa em{" "}
          {DATA_INICIO_CURTA} · {PRECO} {PARCELAS} →
        </a>
      )}

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
            5 verdades que todo profissional de enfermagem precisa conhecer — e por que aprender só “na prática” é
            perigoso.
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
            As 5 verdades, em cerca de 15 minutos
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#0a2029]/70">
            Administrar quimioterapia não é como dar qualquer outro remédio. O gesto até parece o mesmo — puncionar e
            infundir. O que muda é o tamanho do risco: para o paciente e para você.
          </p>

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
            E-book gratuito
          </span>
          <h2 className={`${display.className} mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl`}>
            Leve as 5 verdades no bolso
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            O e-book em PDF com as 5 verdades da aula, mais as 3 atitudes que já elevam a sua segurança no próximo
            plantão. Deixe seu e-mail e baixe na hora.
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

          {VENDAS_ABERTAS && PRE_INSCRICAO && (
            <div className="mx-auto mt-9 max-w-md rounded-2xl border border-[#C9A24B]/40 bg-white/[0.06] px-7 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7CE93]">
                Pré-inscrição · preço promocional
              </p>
              <p className={`${display.className} mt-3 text-4xl font-semibold text-white`}>{PRECO}</p>
              <p className="mt-1 text-sm text-white/65">{PARCELAS}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                As aulas começam em <span className="font-semibold text-white">{DATA_INICIO}</span>, com uma nova aula
                a cada semana.
              </p>
            </div>
          )}

          <a
            href={MATRICULA_HREF}
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24B] px-10 py-5 text-base font-bold uppercase tracking-wide text-[#0a2029] transition hover:brightness-110"
            style={{ boxShadow: "0 14px 46px -12px rgba(201,162,75,0.65)" }}
          >
            {MATRICULA_LABEL} →
          </a>

          <p className="mt-6 text-sm text-white/50">{MATRICULA_NOTA}</p>
        </div>
      </section>

      {/* Rodapé: usamos o global do site (src/components/Footer.tsx) */}
    </div>
  );
}
