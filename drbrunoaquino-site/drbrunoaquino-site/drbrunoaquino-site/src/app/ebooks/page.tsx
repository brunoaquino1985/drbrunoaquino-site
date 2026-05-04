import EbookGrid from "@/components/EbookGrid";
import KitHighlight from "@/components/KitHighlight";
import TrustBar from "@/components/TrustBar";
import LeadCapture from "@/components/LeadCapture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebooks · Manuais de oncologia para pacientes e familiares",
  description:
    "4 manuais escritos por oncologista clínico — quimioterapia, náuseas, chás e direitos legais — para você atravessar o tratamento com mais segurança.",
};

export default function EbooksPage() {
  return (
    <>
      <section className="bg-sand section-pad">
        <div className="container-content text-center max-w-narrow">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
            Ebooks
          </h1>
          <p className="text-lg text-ink-light leading-relaxed">
            Manuais práticos para pacientes e familiares atravessarem o
            tratamento oncológico com mais segurança, conforto e dignidade.
            Linguagem clara, baseada em evidência, sem alarmismo.
          </p>
        </div>
      </section>
      <TrustBar />
      <KitHighlight />
      <EbookGrid />
      <LeadCapture />
    </>
  );
}
