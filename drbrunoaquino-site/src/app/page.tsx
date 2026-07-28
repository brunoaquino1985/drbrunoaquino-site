import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import VideoApresentacao from "@/components/VideoApresentacao";
import KitHighlight from "@/components/KitHighlight";
import EbookGrid from "@/components/EbookGrid";
import CursoBanner from "@/components/CursoBanner";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadCapture from "@/components/LeadCapture";

export default function HomePage() {
  // o curso aparece duas vezes de propósito: uma linha no Hero, para quem
  // chega e precisa saber que existe, e a faixa depois dos ebooks, onde o
  // assunto é o conteúdo. O restante da home segue como estava.
  return (
    <>
      <Hero />
      <TrustBar />
      <VideoApresentacao />
      <KitHighlight />
      <EbookGrid />
      <CursoBanner />
      <Testimonials />
      <LeadCapture variant="fullbleed" />
      <FAQ />
    </>
  );
}
