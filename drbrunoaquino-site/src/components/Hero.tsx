"use client";
import Link from "next/link";
import {
  VENDAS_ABERTAS,
  PRE_INSCRICAO,
  DATA_INICIO_CURTA,
  PRECO,
} from "@/lib/curso";

/**
 * Hero da home com os dois públicos lado a lado na mesma coluna:
 * pacientes e familiares (ebooks) e enfermagem (curso).
 *
 * Os dois blocos são irmãos — mesmo tamanho de título, mesmo estilo de
 * subtítulo, mesmos botões, mesma linha de apoio. Nenhum dentro de caixa.
 * O que os separa é apenas um filete e o selo de público no topo de cada um.
 */
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-sand via-white to-brand-50 section-pad">
      <div className="container-content grid items-center gap-10 md:grid-cols-2 lg:gap-14">
        <div className="animate-fade-in">
          {/* ============ ebooks · pacientes e familiares ============ */}
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
              ✓ Para pacientes e familiares
            </span>
            <h1 className="mb-3 font-display text-3xl font-bold leading-[1.18] text-navy md:text-[38px]">
              Atravesse o tratamento oncológico com mais segurança e tranquilidade.
            </h1>
            <p className="mb-5 text-base leading-relaxed text-ink-light md:text-[17px]">
              Manuais escritos por um oncologista clínico — linguagem clara,
              baseada em evidência, sem alarmismo.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/ebooks" className="btn-primary">
                Ver os ebooks
              </Link>
              <Link href="/capitulo-gratis" className="btn-secondary">
                Receber capítulo grátis
              </Link>
            </div>
            <p className="mt-4 text-[13px] text-ink-light">
              4 manuais · a partir de R$ 37 · acesso imediato
            </p>
          </div>

          <div className="my-8 border-t border-sand-dark" />

          {/* ============ curso · enfermagem ============ */}
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
              ✓ Para enfermeiros e técnicos
            </span>
            <h2 className="mb-3 font-display text-3xl font-bold leading-[1.18] text-navy md:text-[38px]">
              Cuide do paciente oncológico com mais segurança e confiança.
            </h2>
            <p className="mb-5 text-base leading-relaxed text-ink-light md:text-[17px]">
              Curso criado por um oncologista clínico — das bases às emergências,
              com método, casos reais e evidência.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/curso" className="btn-primary">
                Conhecer o curso
              </Link>
              <Link href="/curso/aula-gratis" className="btn-secondary">
                Assistir à aula gratuita
              </Link>
            </div>
            <p className="mt-4 text-[13px] text-ink-light">
              13 aulas · 20 horas com certificado
              {VENDAS_ABERTAS && PRE_INSCRICAO && (
                <> · começa em {DATA_INICIO_CURTA.slice(0, 5)} · {PRECO}</>
              )}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand shadow-xl">
            {/* Placeholder se a foto não estiver carregada */}
            <img
              src="/images/hero-bruno.jpg"
              alt="Dr. Bruno Aquino, oncologista clínico"
              className="h-full w-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                const fallback = t.parentElement?.querySelector("[data-fallback]") as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              data-fallback
              className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-brand to-navy p-8 text-center text-white"
            >
              <div className="mb-4 text-6xl">👨‍⚕️</div>
              <div className="font-display text-lg font-semibold">Dr. Bruno Aquino</div>
              <div className="mt-1 text-sm text-white/80">
                Substitua por sua foto em
                <br />
                <code className="text-amber">/public/images/hero-bruno.jpg</code>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-sand-dark bg-white p-3 shadow-lg md:block">
            <div className="text-xs text-ink-light">12 anos</div>
            <div className="text-sm font-semibold text-navy">de oncologia clínica</div>
          </div>
        </div>
      </div>
    </section>
  );
}
