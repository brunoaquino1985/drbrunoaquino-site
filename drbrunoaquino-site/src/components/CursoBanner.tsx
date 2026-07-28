import Link from "next/link";
import {
  VENDAS_ABERTAS,
  PRE_INSCRICAO,
  DATA_INICIO_CURTA,
  PRECO,
  PARCELAS,
} from "@/lib/curso";

/**
 * Faixa do curso na home, depois dos ebooks.
 *
 * O hero já apresenta o curso em uma linha; aqui o assunto é o conteúdo —
 * o que a pessoa realmente leva. Por isso o texto não repete o do topo:
 * mostra o nome do produto, o que vem dentro e as aulas críticas.
 *
 * A identidade é a do curso (teal + dourado) porque o público é outro:
 * o bloco abre dizendo para quem é, para o paciente não se perder na leitura.
 */

const ENTREGAS = [
  { n: "13", t: "aulas em vídeo" },
  { n: "20h", t: "com certificado" },
  { n: "65", t: "questões comentadas" },
  { n: "13", t: "apostilas ilustradas" },
];

const CRITICAS = [
  "Administração segura de quimioterapia",
  "Extravasamento e manejo por classe de droga",
  "Neutropenia febril: o fluxo de urgência",
  "Reações infusionais, da leve à anafilaxia",
];

export default function CursoBanner() {
  return (
    <section className="bg-[#071f27] py-16 text-white sm:py-20">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="/curso/band.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "70% 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(6,25,32,0.97) 0%, rgba(6,25,32,0.94) 48%, rgba(6,25,32,0.78) 68%, rgba(6,25,32,0.42) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 70% at 0% 100%, rgba(201,162,75,0.20), transparent 62%)",
            }}
          />

          <div className="relative px-6 py-10 sm:px-10 sm:py-14">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A24B]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E7CE93]">
                Para profissionais de enfermagem
              </span>
            </div>

            {/* o globals.css força cor navy em todo h*, por isso o text-white explícito */}
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight !text-white sm:text-4xl">
              Capacitação em Oncologia para Enfermagem
            </h2>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Da fisiopatologia do câncer às emergências oncológicas, na sequência
              em que o cuidado acontece — com casos clínicos reais e o passo a passo
              de cada conduta.
            </p>

            {/* o que vem dentro */}
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/12 pt-6 sm:grid-cols-4">
              {ENTREGAS.map((e) => (
                <div key={e.t}>
                  <div className="font-display text-2xl font-semibold text-[#E7CE93]">
                    {e.n}
                  </div>
                  <div className="mt-0.5 text-[13px] leading-snug text-white/60">
                    {e.t}
                  </div>
                </div>
              ))}
            </div>

            {/* aulas críticas */}
            <div className="mt-8 max-w-2xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                Entre as aulas
              </div>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {CRITICAS.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-[14px] leading-snug text-white/80"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A24B]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {VENDAS_ABERTAS && PRE_INSCRICAO && (
              <div className="mt-8 inline-block rounded-xl border border-[#C9A24B]/40 bg-black/30 px-5 py-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E7CE93]">
                  Pré-inscrição
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-semibold text-white">
                    {PRECO}
                  </span>
                  <span className="text-sm text-white/65">{PARCELAS}</span>
                </div>
              </div>
            )}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/curso"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A24B] px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0a2029] transition hover:brightness-110"
                style={{ boxShadow: "0 12px 40px -12px rgba(201,162,75,0.6)" }}
              >
                Conhecer o curso →
              </Link>
              <Link
                href="/curso/aula-gratis"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white/90 transition hover:border-[#C9A24B] hover:text-white"
              >
                Assistir à aula gratuita
              </Link>
            </div>

            {VENDAS_ABERTAS && PRE_INSCRICAO && (
              <p className="mt-5 text-sm text-white/55">
                As aulas começam em {DATA_INICIO_CURTA}, uma por semana.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
