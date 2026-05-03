export type Testimonial = {
  name: string;
  initial: string;
  text: string;
  context?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marina S.",
    initial: "M",
    text:
      "Os ebooks foram nossa bússola durante o tratamento da minha mãe. Sentimos que tínhamos um oncologista por perto.",
    context: "Filha de paciente",
  },
  {
    name: "Paulo R.",
    initial: "P",
    text:
      "Linguagem clara, conteúdo de oncologista de verdade. Encontrei respostas que eu não tinha conseguido no consultório.",
    context: "Paciente em tratamento",
  },
  {
    name: "Cláudia M.",
    initial: "C",
    text:
      "O Manual de Direitos sozinho já valeu o investimento. Consegui a isenção de IR seguindo o passo a passo.",
    context: "Esposa de paciente",
  },
];
