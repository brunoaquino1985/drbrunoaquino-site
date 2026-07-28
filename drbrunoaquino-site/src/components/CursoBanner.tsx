import Link from "next/link";
import {
  VENDAS_ABERTAS,
  PRE_INSCRICAO,
  DATA_INICIO_CURTA,
  PRECO,
  PARCELAS,
} from "@/lib/curso";

/**
 * Faixa na home apontando para o curso.
 *
 * A home fala com pacientes e familiares; o curso fala com a enfermagem.
 * Por isso o bloco começa deixando claro para quem é — quem não for da área
 * segue a leitura sem se sentir perdido.
 */
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
                "linear-gradient(100deg, rgba(6,25,32,0.97) 0%, rgba(6,25,32,0.93) 42%, rgba(6,25,32,0.72) 62%, rgba(6,25,32,0.35) 100%)",
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
              13 aulas em vídeo, das bases às emergências oncológicas, com apostilas
              ilustradas, casos clínicos, 65 questões comentadas e certificado de 20 horas.
            </p>

            {VENDAS_ABERTAS && PRE_INSCRICAO && (
              <div className="mt-6 inline-block rounded-xl border border-[#C9A24B]/40 bg-black/30 px-5 py-4">
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
