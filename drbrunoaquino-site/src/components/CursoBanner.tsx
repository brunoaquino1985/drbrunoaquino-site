import Link from "next/link";
import {
  VENDAS_ABERTAS,
  PRE_INSCRICAO,
  DATA_INICIO_CURTA,
  PRECO,
} from "@/lib/curso";

/**
 * Seção do curso na home, depois dos ebooks.
 *
 * Mesma estrutura e mesma paleta do hero — o site inteiro fala a mesma
 * língua visual. O que muda é o assunto: aqui o título é o nome do curso
 * e a linha de números mostra o que vem dentro, sem repetir a frase que
 * já aparece lá em cima.
 */
export default function CursoBanner() {
  return (
    <section className="bg-gradient-to-br from-white via-sand to-brand-50 section-pad">
      <div className="container-content grid items-center gap-10 md:grid-cols-2 lg:gap-14">
        <div>
          <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
            ✓ Baseado em NCCN, ASCO, ESMO e INCA
          </span>

          <h2 className="mb-3 font-display text-3xl font-bold leading-[1.18] text-navy md:text-[38px]">
            Capacitação em Oncologia para Enfermagem
          </h2>

          <p className="mb-5 text-base leading-relaxed text-ink-light md:text-[17px]">
            Da fisiopatologia do câncer às emergências oncológicas, na sequência
            em que o cuidado acontece — com casos clínicos reais e o passo a
            passo de cada conduta.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/curso" className="btn-primary">
              Conhecer o curso
            </Link>
            <Link href="/curso/aula-gratis" className="btn-secondary">
              Assistir à aula gratuita
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4 border-t border-sand-dark pt-5">
            <div>
              <div className="font-display text-[17px] font-bold text-navy">
                13 aulas
              </div>
              <div className="text-[13px] text-ink-light">em vídeo</div>
            </div>
            <div>
              <div className="font-display text-[17px] font-bold text-navy">
                20 horas
              </div>
              <div className="text-[13px] text-ink-light">com certificado</div>
            </div>
            {VENDAS_ABERTAS && PRE_INSCRICAO && (
              <>
                <div>
                  <div className="font-display text-[17px] font-bold text-navy">
                    {DATA_INICIO_CURTA.slice(0, 5)}
                  </div>
                  <div className="text-[13px] text-ink-light">
                    início das aulas
                  </div>
                </div>
                <div>
                  <div className="font-display text-[17px] font-bold text-navy">
                    {PRECO}
                  </div>
                  <div className="text-[13px] text-ink-light">pré-inscrição</div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand shadow-xl md:aspect-[9/10]">
            <img
              src="/curso/hero.jpg"
              alt="Enfermeira em cuidado oncológico"
              className="h-full w-full object-cover"
              style={{ objectPosition: "72% 30%" }}
            />
          </div>
          {VENDAS_ABERTAS && PRE_INSCRICAO && (
            <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-sand-dark bg-white p-3 shadow-lg md:block">
              <div className="text-xs text-ink-light">Turma inaugural</div>
              <div className="text-sm font-semibold text-navy">
                pré-inscrição aberta
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
