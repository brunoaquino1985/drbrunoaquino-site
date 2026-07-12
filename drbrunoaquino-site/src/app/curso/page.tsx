// src/app/curso/page.tsx
// Página de apresentação do curso — Capacitação em Oncologia para Enfermagem
// Estilo: clínico-realista + futurista/3D · paleta teal (#0C3A47) + dourado (#C9A24B)
// Next.js (App Router) + Tailwind CSS. Imagens em /public/curso/.
//
// >>> HOTMART: por enquanto o botão só existe. Quando abrir as vendas, cole o link
//     de checkout na constante HOTMART_URL abaixo. <<<

import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

const HOTMART_URL = "#"; // TODO: colar aqui o link de checkout da Hotmart quando as aulas subirem
const AULA_GRATIS_URL = "#"; // TODO: link da aula gratuita / captura de e-mail (opcional)

const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Capacitação em Oncologia para Enfermagem | Dr. Bruno Aquino",
  description:
    "Formação completa em oncologia para enfermagem: das bases às emergências, com apostilas, casos clínicos, banco de questões e certificado. Cuidado seguro à beira do leito.",
};

const aulas = [
  { n: 1, t: "Introdução à Oncologia e Quimioterapia" },
  { n: 2, t: "Classes de Quimioterápicos" },
  { n: 3, t: "Vias de Administração" },
  { n: 4, t: "Protocolos de Quimioterapia" },
  { n: 5, t: "Administração Segura de Quimioterapia" },
  { n: 6, t: "Extravasamento de Quimioterapia" },
  { n: 7, t: "Flebite e Cuidados com o Acesso Venoso" },
  { n: 8, t: "Efeitos Colaterais Sistêmicos" },
  { n: 9, t: "Neutropenia Febril" },
  { n: 10, t: "Reações Infusionais" },
  { n: 11, t: "Educação do Paciente" },
  { n: 12, t: "Segurança do Paciente em Oncologia" },
  { n: 13, t: "Casos Clínicos Integrados" },
];

const incluso = [
  ["13 aulas em vídeo", "das bases às emergências oncológicas"],
  ["Apostilas ilustradas", "material de estudo para cada aula"],
  ["Casos clínicos integrados", "para treinar a decisão na prática"],
  ["Banco de questões", "65 questões com gabarito comentado"],
  ["Conteúdo confiável", "baseado em NCCN, ASCO, ESMO, ONS, SBOC e INCA"],
  ["Certificado de conclusão", "comprove sua capacitação"],
];

const faq = [
  ["Para quem é este curso?", "Para enfermeiros(as) e técnicos(as) de enfermagem que atuam ou desejam atuar em oncologia, e para estudantes que querem se preparar com segurança para o cuidado ao paciente oncológico."],
  ["Preciso de experiência prévia em oncologia?", "Não. O curso começa pelas bases e evolui até as emergências, então serve tanto para quem está começando quanto para quem quer se aprofundar e atualizar."],
  ["Como recebo o conteúdo?", "O curso é 100% online, com acesso às aulas, apostilas, casos clínicos e banco de questões. Você estuda no seu ritmo."],
  ["O curso dá certificado?", "Sim, você recebe um certificado de conclusão ao finalizar o curso."],
  ["Quando as inscrições abrem?", "Em breve. Deixe seu contato na aula gratuita para ser avisado(a) em primeira mão quando as vagas abrirem."],
];

export default function CursoPage() {
  return (
    <main className={`${sans.className} bg-[#071f27] text-white antialiased`}>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <img
          src="/curso/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "100% center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(6,25,32,0.90) 0%, rgba(6,25,32,0.68) 38%, rgba(6,25,32,0.26) 60%, rgba(6,25,32,0.0) 88%)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 100% 0%, rgba(201,162,75,0.18), transparent 55%)" }} />

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 py-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A24B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E7CE93]">
              Capacitação profissional · Curso online
            </span>
          </div>

          <h1 className={`${display.className} max-w-[560px] text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl`}>
            Capacitação em
            <br />
            Oncologia
            <br />
            <span className="italic text-[#E7CE93]">para Enfermagem</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
            A formação que transforma o cuidado em oncologia — do reconhecimento à conduta segura à beira do leito.
            Das bases às emergências, com método, casos reais e evidência.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={HOTMART_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24B] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#0a2029] transition hover:brightness-110"
              style={{ boxShadow: "0 12px 40px -12px rgba(201,162,75,0.65)" }}
            >
              Quero me matricular
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href={AULA_GRATIS_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-[#C9A24B] hover:text-white"
            >
              Assistir à aula gratuita
            </a>
          </div>

          <p className="mt-10 text-sm text-white/60">
            <span className="font-semibold text-white/85">Dr. Bruno Aquino de Souza</span> · Oncologista Clínico ·
            CRM-MG 55560 · RQE 56208
          </p>
        </div>
      </section>

      {/* ===================== FAIXA DE AUTORIDADE ===================== */}
      <section className="border-y border-white/10 bg-[#0a2831]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
          {[
            ["13", "aulas completas"],
            ["65", "questões com gabarito"],
            ["100%", "online, no seu ritmo"],
            ["5+", "diretrizes de referência"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className={`${display.className} text-4xl font-semibold text-[#E7CE93]`}>{num}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-white/60">{label}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-8 text-center text-xs uppercase tracking-[0.2em] text-white/45">
          Conteúdo baseado em NCCN · ASCO · ESMO · ONS · SBOC · INCA
        </div>
      </section>

      {/* ===================== PARA QUEM É ===================== */}
      <section className="bg-[#f6f4ee] py-24 text-[#0a2029]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7a2e]">Por que este curso</p>
          <h2 className={`${display.className} mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl`}>
            Administrar quimioterapia não é como dar qualquer medicamento.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[#0a2029]/70">
            Janela terapêutica estreita, drogas vesicantes, risco ocupacional e emergências que exigem ação em minutos.
            A enfermagem é a última barreira de segurança — e isso se faz com conhecimento.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Reconhecer cedo", "Identifique sinais de alerta antes que o problema aconteça — da reação infusional à neutropenia febril."],
              ["Agir com segurança", "Domine as condutas, a dupla checagem e o manejo de cada situação, passo a passo."],
              ["Cuidar com confiança", "Saiba o papel da enfermagem e comunique-se com a equipe com autoridade e método."],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-2xl border border-[#0a2029]/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(10,32,41,0.4)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2831] text-lg font-bold text-[#E7CE93]">
                  {i + 1}
                </div>
                <h3 className={`${display.className} text-xl font-semibold`}>{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#0a2029]/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== AS 13 AULAS ===================== */}
      <section className="bg-[#071f27] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E7CE93]">Conteúdo do curso</p>
              <h2 className={`${display.className} mt-3 text-3xl font-semibold text-white sm:text-4xl`}>13 aulas, do básico às emergências</h2>
            </div>
            <p className="max-w-sm text-sm text-white/60">
              Uma trilha completa e progressiva — cada aula com material de estudo, casos e questões.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aulas.map((a) => (
              <article
                key={a.n}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a2831] transition hover:border-[#C9A24B]/60"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={`/curso/aula${String(a.n).padStart(2, "0")}.jpg`}
                    alt={`Aula ${a.n} — ${a.t}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071f27]/70 to-transparent" />
                </div>
                <div className="flex items-start gap-3 p-5">
                  <span className={`${display.className} text-2xl font-semibold text-[#C9A24B]`}>
                    {String(a.n).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-[15px] font-semibold leading-snug text-white/90">{a.t}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BANNER MÉTODO ===================== */}
      <section className="relative overflow-hidden py-28">
        <img src="/curso/band.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,25,32,0.94) 0%, rgba(6,25,32,0.75) 45%, rgba(6,25,32,0.25) 100%)" }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className={`${display.className} max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl`}>
            “Cuidar de quem enfrenta o câncer começa com conhecimento.”
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            Um método que combina casos clínicos reais, raciocínio passo a passo e as melhores evidências — para você
            transformar teoria em cuidado seguro no plantão.
          </p>
        </div>
      </section>

      {/* ===================== O QUE ESTÁ INCLUSO ===================== */}
      <section className="bg-[#f6f4ee] py-24 text-[#0a2029]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7a2e]">Tudo o que você recebe</p>
          <h2 className={`${display.className} mt-3 text-3xl font-semibold sm:text-4xl`}>O que está incluso</h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {incluso.map(([t, d]) => (
              <div key={t} className="flex items-start gap-4 rounded-2xl border border-[#0a2029]/10 bg-white p-6">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0a2831] text-[#E7CE93]">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t}</h3>
                  <p className="text-[15px] text-[#0a2029]/70">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== AULA GRATUITA ===================== */}
      <section className="bg-[#071f27] py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img src="/curso/gratis.jpg" alt="" className="aspect-[16/9] w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E7CE93]">Comece sem pagar nada</p>
            <h2 className={`${display.className} mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl`}>
              Assista à aula gratuita
            </h2>
            <p className="mt-4 text-lg text-white/80">
              “O que ninguém te contou sobre administrar quimioterapia”: 5 verdades que mudam a forma como você cuida —
              e um guia rápido de segurança para baixar.
            </p>
            <a
              href={AULA_GRATIS_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#C9A24B] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#E7CE93] transition hover:bg-[#C9A24B] hover:text-[#0a2029]"
            >
              Quero a aula gratuita →
            </a>
          </div>
        </div>
      </section>

      {/* ===================== PROFESSOR ===================== */}
      <section className="bg-[#0a2831] py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img src="/curso/prof.jpg" alt="Dr. Bruno Aquino de Souza" className="aspect-[16/9] w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E7CE93]">Quem ensina</p>
            <h2 className={`${display.className} mt-3 text-3xl font-semibold text-white sm:text-4xl`}>Dr. Bruno Aquino de Souza</h2>
            <p className="mt-2 text-sm uppercase tracking-wide text-white/50">Oncologista Clínico · CRM-MG 55560 · RQE 56208</p>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Une a prática da oncologia clínica ao ensino, com uma missão: dar à enfermagem o preparo para cuidar do
              paciente oncológico com segurança. Um conteúdo construído com rigor científico e linguagem acessível —
              do reconhecimento dos riscos à conduta correta em cada situação.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="bg-[#f6f4ee] py-24 text-[#0a2029]">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className={`${display.className} text-center text-3xl font-semibold sm:text-4xl`}>Perguntas frequentes</h2>
          <div className="mt-10 divide-y divide-[#0a2029]/10 border-y border-[#0a2029]/10">
            {faq.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  {q}
                  <span className="text-[#9a7a2e] transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-[#0a2029]/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="relative overflow-hidden bg-[#071f27] py-28">
        <div className="absolute inset-0" style={{ background: "radial-gradient(80% 60% at 50% 0%, rgba(201,162,75,0.16), transparent 60%)" }} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className={`${display.className} text-3xl font-semibold leading-tight text-white sm:text-5xl`}>
            Dê o próximo passo na sua carreira
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Aprenda a cuidar com segurança, do básico às emergências. Garanta sua vaga na Capacitação em Oncologia
            para Enfermagem.
          </p>
          <a
            href={HOTMART_URL}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24B] px-10 py-5 text-base font-bold uppercase tracking-wide text-[#0a2029] transition hover:brightness-110"
            style={{ boxShadow: "0 14px 46px -12px rgba(201,162,75,0.65)" }}
          >
            Quero me matricular →
          </a>
          <p className="mt-6 text-sm text-white/50">Inscrições em breve · deixe seu contato na aula gratuita</p>
        </div>
      </section>

      {/* ===================== RODAPÉ ===================== */}
      <footer className="border-t border-white/10 bg-[#061921] py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
          <p className={`${display.className} text-lg text-white`}>Capacitação em Oncologia para Enfermagem</p>
          <p className="text-sm text-white/60">Dr. Bruno Aquino de Souza · Oncologista Clínico · CRM-MG 55560 · RQE 56208</p>
          <p className="mt-2 text-xs text-white/40">
            © {new Date().getFullYear()} · Todos os direitos reservados · Curso livre de educação profissional (LDB 9.394/96 · Decreto 5.154/04)
          </p>
        </div>
      </footer>
    </main>
  );
}
