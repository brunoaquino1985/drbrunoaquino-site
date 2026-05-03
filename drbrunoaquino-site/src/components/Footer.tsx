import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-12">
      <div className="container-content py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display font-semibold text-lg mb-2">
            Dr. Bruno Aquino
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Oncologista clínico
            <br />
            CRM-MG 55.560 · RQE 56.208
            <br />
            Membro SBOC, ASCO e ESMO
          </p>
        </div>

        <div>
          <div className="font-display font-semibold text-lg mb-2">
            Atendimento
          </div>
          <ul className="space-y-1.5 text-sm text-white/70">
            <li>
              <a href="https://instagram.com/drbrunoaquino" className="hover:text-amber transition-colors" target="_blank" rel="noopener">
                Instagram @drbrunoaquino
              </a>
            </li>
            <li>
              <a href="https://facebook.com/drbrunoaquino" className="hover:text-amber transition-colors" target="_blank" rel="noopener">
                Facebook
              </a>
            </li>
            <li>
              <Link href="/capitulo-gratis" className="hover:text-amber transition-colors">
                Capítulo grátis
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-display font-semibold text-lg mb-2">
            Pagamento seguro
          </div>
          <ul className="space-y-1.5 text-sm text-white/70">
            <li>Hotmart · Pix · Cartão · Boleto</li>
            <li>7 dias de garantia incondicional</li>
            <li>Acesso imediato após pagamento</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Dr. Bruno Aquino de Souza · Todos os direitos reservados</div>
          <div>Conteúdo educativo · Não substitui consulta médica</div>
        </div>
      </div>
    </footer>
  );
}
