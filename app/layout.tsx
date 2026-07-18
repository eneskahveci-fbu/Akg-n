import type { Metadata } from "next";
import { Playfair_Display, Inter, Beau_Rivage } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { WhatsAppWidgetProvider } from "@/components/WhatsAppWidgetContext";
import StructuredData from "@/components/StructuredData";
import CookieConsent from "@/components/CookieConsent";
import { SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const signature = Beau_Rivage({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Akgün Omuzubozlu | Coldwell Banker Gayrimenkul Danışmanı",
    template: "%s | Akgün Omuzubozlu",
  },
  description:
    "Coldwell Banker Söz Bir çatısı altında İstanbul Ümraniye, Ataşehir ve Çekmeköy bölgelerinde satılık ve kiralık gayrimenkul danışmanlığı. Güven, şeffaflık ve profesyonel hizmet.",
  keywords: [
    "gayrimenkul danışmanı",
    "coldwell banker",
    "Ümraniye emlak",
    "Ataşehir emlak",
    "Çekmeköy emlak",
    "satılık daire",
    "kiralık daire",
    "Akgün Omuzubozlu",
  ],
  authors: [{ name: "Akgün Omuzubozlu" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Akgün Omuzubozlu | Coldwell Banker Gayrimenkul Danışmanı",
    description:
      "İstanbul'da güvenilir ve profesyonel gayrimenkul danışmanlığı hizmeti.",
    url: SITE_URL,
    siteName: "Akgün Omuzubozlu",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akgün Omuzubozlu | Coldwell Banker Gayrimenkul Danışmanı",
    description:
      "İstanbul'da güvenilir ve profesyonel gayrimenkul danışmanlığı hizmeti.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable} ${signature.variable}`}>
      <body className="min-h-screen bg-offwhite font-sans antialiased">
        <StructuredData />
        <WhatsAppWidgetProvider>
          <Header />
          <main className="pb-safe-nav">{children}</main>
          <Footer />
          <BottomNav />
          <WhatsAppWidget />
        </WhatsAppWidgetProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
