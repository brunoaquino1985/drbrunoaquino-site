import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://drbrunoaquino.med.br"),
  title: {
    default: "Dr. Bruno Aquino · Oncologista clínico · Manuais para pacientes",
    template: "%s · Dr. Bruno Aquino",
  },
  description:
    "Manuais escritos por oncologista clínico (CRM-MG 55.560) para pacientes e familiares atravessarem o tratamento oncológico com mais segurança, baseados em evidência médica.",
  openGraph: {
    title:
      "Atravesse o tratamento oncológico com mais segurança e tranquilidade",
    description:
      "Manuais de oncologia para pacientes e familiares. Linguagem clara, evidência médica, sem alarmismo.",
    locale: "pt_BR",
    type: "website",
    siteName: "Dr. Bruno Aquino",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Atravesse o tratamento oncológico com mais segurança e tranquilidade",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="pt-BR">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        {pixelId && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`,
              }}
            />
          </>
        )}
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
