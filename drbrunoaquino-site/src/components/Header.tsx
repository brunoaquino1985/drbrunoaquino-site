"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/ebooks", label: "Ebooks" },
  { href: "/curso", label: "Curso" },
  { href: "/quem-sou", label: "Quem sou" },
  { href: "/capitulo-gratis", label: "Capítulo grátis" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();

  // fecha o menu ao trocar de página
  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  // trava o scroll do fundo enquanto o menu está aberto
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-dark bg-white/95 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-semibold text-white transition-colors group-hover:bg-navy">
            BA
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold text-navy">
              Dr. Bruno Aquino
            </div>
            <div className="hidden text-[11px] text-ink-light sm:block">
              Oncologista clínico · CRM-MG 55.560
            </div>
          </div>
        </Link>

        {/* ---------- navegação em telas médias e maiores ---------- */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/ebooks" className="btn-primary !px-4 !py-2 !text-sm">
            Comprar
          </Link>

          {/* ---------- botão do menu no celular ---------- */}
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-navy transition-colors hover:bg-sand md:hidden"
          >
            {aberto ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ---------- painel do menu no celular ---------- */}
      {aberto && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-navy/40 md:hidden"
            onClick={() => setAberto(false)}
            aria-hidden="true"
          />
          <nav
            id="menu-mobile"
            className="absolute inset-x-0 top-16 z-50 border-b border-sand-dark bg-white shadow-lg md:hidden"
          >
            <ul className="container-content divide-y divide-sand-dark py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center justify-between py-4 text-base font-medium text-navy transition-colors hover:text-brand"
                  >
                    {l.label}
                    <span aria-hidden="true" className="text-ink-light">›</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* destaque do curso, que é o produto com inscrições abertas */}
            <div className="container-content pb-5">
              <Link
                href="/curso"
                className="block rounded-xl bg-[#0C3A47] px-5 py-4 text-white transition hover:brightness-110"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E7CE93]">
                  Pré-inscrição aberta
                </div>
                <div className="mt-1 font-display text-lg font-semibold">
                  Capacitação em Oncologia para Enfermagem
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Para enfermeiros e técnicos · começa em 15/08 →
                </div>
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
