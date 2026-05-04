import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import KitHighlight from "@/components/KitHighlight";
import EbookGrid from "@/components/EbookGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadCapture from "@/components/LeadCapture";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <KitHighlight />
      <EbookGrid />
      <Testimonials />
      <LeadCapture variant="fullbleed" />
      <FAQ />
    </>
  );
}
