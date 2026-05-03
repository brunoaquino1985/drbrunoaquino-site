export type Ebook = {
  slug: string;
  number: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  cover: string;
  accentColor: string;
  bgColor: string;
  hotmartLinkEnv: string;
  highlights: string[];
  description: string;
  detailedSections: { title: string; items: string[] }[];
};

export const ebooks: Ebook[] = [
  {
    slug: "manual-quimioterapia",
    number: 1,
    title: "Manual Premium de Orientações para Pacientes em Tratamento Oncológico",
    shortTitle: "Manual de Quimioterapia",
    subtitle:
      "O guia que oferece segurança, preparo e tranquilidade durante o tratamento contra o câncer.",
    price: 47,
    oldPrice: 67,
    cover: "/images/quimioterapia.jpg",
    accentColor: "#1D4E89",
    bgColor: "#EAF2FA",
    hotmartLinkEnv: "NEXT_PUBLIC_HOTMART_QUIMIO",
    highlights: [
      "Como funciona o tratamento oncológico",
      "Cuidados antes, durante e depois das sessões",
      "Manejo dos principais efeitos colaterais",
      "Sinais de alerta que exigem atenção médica imediata",
    ],
    description:
      "Receber o diagnóstico de câncer marca o início de uma jornada que envolve muito mais do que o tratamento médico. Este manual reúne tudo o que eu mais explico em consultório, organizado em uma linguagem clara, baseada em evidência e sem alarmismo, para você atravessar a quimioterapia com mais preparo, organização e dignidade.",
    detailedSections: [
      {
        title: "O que tem dentro",
        items: [
          "Explicação clara sobre como funciona o tratamento oncológico",
          "Orientações práticas para se preparar para as sessões",
          "Cuidados essenciais antes, durante e após o tratamento",
          "Manejo dos principais efeitos colaterais",
          "Estratégias para alimentação e hidratação adequadas",
          "Sinais de alerta que exigem atenção médica imediata",
          "Dicas para reduzir ansiedade e melhorar o bem-estar",
          "Organização da rotina, exames e medicações",
        ],
      },
    ],
  },
  {
    slug: "nauseas-vomitos",
    number: 2,
    title: "Manual de Náuseas e Vômitos no Tratamento Oncológico",
    shortTitle: "Náuseas e Vômitos",
    subtitle:
      "Como prevenir, controlar e atravessar essa fase com mais conforto e qualidade de vida.",
    price: 37,
    oldPrice: 47,
    cover: "/images/nauseas.jpg",
    accentColor: "#6D28D9",
    bgColor: "#F5F0FE",
    hotmartLinkEnv: "NEXT_PUBLIC_HOTMART_NAUSEAS",
    highlights: [
      "Por que náuseas e vômitos acontecem",
      "Quais quimioterápicos têm maior risco",
      "Medicamentos usados na prevenção e controle",
      "Alimentos que ajudam (e os que pioram)",
    ],
    description:
      "Náuseas e vômitos estão entre os efeitos colaterais mais temidos do tratamento oncológico. A boa notícia: eles podem — e devem — ser prevenidos e controlados. Este guia prático e acolhedor explica o porquê, os medicamentos certos, e estratégias do dia a dia.",
    detailedSections: [
      {
        title: "O que tem dentro",
        items: [
          "Por que náuseas e vômitos acontecem",
          "Quais quimioterápicos têm maior risco",
          "Como reconhecer a gravidade dos sintomas",
          "Quais medicamentos são utilizados na prevenção e controle",
          "Quando procurar atendimento médico",
          "Alimentos que ajudam e alimentos que pioram",
          "Técnicas complementares para aliviar os sintomas",
        ],
      },
    ],
  },
  {
    slug: "uso-de-chas",
    number: 3,
    title: "Manual Uso de Chás Durante o Tratamento Oncológico",
    shortTitle: "Uso de Chás",
    subtitle:
      "Quais ervas são seguras, quais exigem cuidado e quais podem atrapalhar a quimioterapia.",
    price: 37,
    oldPrice: 47,
    cover: "/images/chas.jpg",
    accentColor: "#166534",
    bgColor: "#ECFDF5",
    hotmartLinkEnv: "NEXT_PUBLIC_HOTMART_CHAS",
    highlights: [
      "Quais chás são seguros (em uso ocasional)",
      "Quais exigem cautela e liberação médica",
      "Quais devem ser evitados durante o tratamento",
      "Como ervas interferem no metabolismo de quimioterápicos",
    ],
    description:
      "Muitos pacientes usam chás para aliviar sintomas como náusea, ansiedade ou insônia. O que poucos sabem é que algumas ervas podem reduzir a eficácia da quimioterapia, imunoterapia ou hormonioterapia. Este manual é um guia de segurança baseado em evidência médica.",
    detailedSections: [
      {
        title: "O que tem dentro",
        items: [
          "Quais chás são geralmente seguros (uso ocasional e moderado)",
          "Quais exigem cautela e liberação médica",
          "Quais devem ser evitados durante o tratamento",
          "Como ervas interferem no metabolismo dos quimioterápicos (CYP450, fígado e coagulação)",
          "Os riscos do uso indiscriminado de antioxidantes",
          "Quando o gengibre ajuda — e quando atrapalha",
          "Por que o chá verde pode interferir na quimioterapia",
          "Os riscos da erva-de-são-joão",
        ],
      },
    ],
  },
  {
    slug: "direitos-beneficios",
    number: 4,
    title: "Manual de Direitos e Benefícios do Paciente Oncológico",
    shortTitle: "Direitos e Benefícios",
    subtitle:
      "Tudo que paciente e familiares precisam saber sobre direitos legais, isenções e benefícios.",
    price: 47,
    oldPrice: 67,
    cover: "/images/direitos.jpg",
    accentColor: "#0E7490",
    bgColor: "#ECFEFF",
    hotmartLinkEnv: "NEXT_PUBLIC_HOTMART_DIREITOS",
    highlights: [
      "Isenção de Imposto de Renda",
      "Saque do FGTS e PIS",
      "Auxílio-doença e aposentadoria por invalidez",
      "Direitos no SUS e nos planos de saúde",
    ],
    description:
      "Receber o diagnóstico de câncer traz dúvidas sobre direitos, benefícios e apoio legal. Este manual reúne, de forma clara e prática, tudo o que paciente e família precisam saber para garantir proteção, dignidade e acesso ao tratamento sem perder dinheiro.",
    detailedSections: [
      {
        title: "O que tem dentro",
        items: [
          "Quem é considerado paciente oncológico para fins legais",
          "Quais documentos são necessários para solicitar benefícios",
          "Direitos no SUS e nos planos de saúde",
          "Benefícios previdenciários como auxílio-doença e aposentadoria por invalidez",
          "Isenção de imposto de renda e possibilidade de saque do FGTS",
          "Direitos trabalhistas e prioridades legais",
          "Benefícios relacionados à mobilidade e transporte",
          "Direitos dos familiares e cuidadores",
          "Checklist prático para facilitar solicitações",
        ],
      },
    ],
  },
];

export const kit = {
  slug: "kit-completo",
  title: "Kit Completo do Paciente Oncológico",
  subtitle: "Os 4 manuais juntos · economia de 30%",
  price: 119,
  oldPrice: 168,
  hotmartLinkEnv: "NEXT_PUBLIC_HOTMART_KIT",
  description:
    "Receber o diagnóstico de câncer gera medo, insegurança e muitas dúvidas. Este kit reúne os 4 manuais que mais ajudam pacientes e familiares na jornada — quimioterapia, náuseas, chás e direitos legais — em um pacote único com economia de 30%.",
  includes: [
    "Manual de Quimioterapia",
    "Manual de Náuseas e Vômitos",
    "Manual Uso de Chás",
    "Manual de Direitos e Benefícios",
  ],
  benefits: [
    "Acesso imediato após a confirmação do pagamento",
    "Linguagem clara, baseada em evidência médica",
    "Material desenvolvido por oncologista clínico (CRM-MG 55.560)",
    "7 dias de garantia incondicional",
  ],
};

export function getHotmartLink(envKey: string): string {
  if (typeof window === "undefined") return "#";
  return (
    (process.env as unknown as Record<string, string>)[envKey] ||
    "https://drbrunoaquino.med.br/ebooks"
  );
}
