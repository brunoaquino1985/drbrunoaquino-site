import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import VideoApresentacao from "@/components/VideoApresentacao";
import KitHighlight from "@/components/KitHighlight";
import EbookGrid from "@/components/EbookGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadCapture from "@/components/LeadCapture";

export default function HomePage() {
  // o curso entra no próprio Hero, dividindo espaço com os ebooks —
  // o restante da home segue como estava
  return (
    <>
      <Hero />
      <TrustBar />
      <VideoApresentacao />
      <KitHighlight />
      <EbookGrid />
      <Testimonials />
      <LeadCapture variant="fullbleed" />
      <FAQ />
    </>
  );
}
