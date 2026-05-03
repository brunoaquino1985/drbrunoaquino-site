export default function TrustBar() {
  const items = [
    { title: "CRM-MG", subtitle: "55.560 · RQE 56.208" },
    { title: "SBOC", subtitle: "Membro titular" },
    { title: "ASCO · ESMO", subtitle: "Membro internacional" },
    { title: "Hotmart", subtitle: "Pagamento 100% seguro" },
  ];
  return (
    <div className="bg-white border-y border-sand-dark">
      <div className="container-content py-5 grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <div className="font-display font-semibold text-brand text-sm md:text-base">
              {item.title}
            </div>
            <div className="text-xs text-ink-light mt-0.5">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
