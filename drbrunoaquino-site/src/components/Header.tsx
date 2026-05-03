import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sand-dark">
      <div className="container-content flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-display font-semibold text-sm group-hover:bg-navy transition-colors">
            BA
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-navy text-base">
              Dr. Bruno Aquino
            </div>
            <div className="text-[11px] text-ink-light hidden sm:block">
              Oncologista clínico · CRM-MG 55.560
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-ink hover:text-brand transition-colors">
            Início
          </Link>
          <Link href="/ebooks" className="text-ink hover:text-brand transition-colors">
            Ebooks
          </Link>
          <Link href="/quem-sou" className="text-ink hover:text-brand transition-colors">
            Quem sou
          </Link>
          <Link href="/capitulo-gratis" className="text-ink hover:text-brand transition-colors">
            Capítulo grátis
          </Link>
        </nav>

        <Link href="/ebooks" className="btn-primary !py-2 !px-4 !text-sm">
          Comprar
        </Link>
      </div>
    </header>
  );
}
