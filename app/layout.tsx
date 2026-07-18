import type { Metadata } from "next";
import { Playfair_Display, Inter, Alex_Brush } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import WhatsAppWidget from "@/components/WhatsAppWidget";

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

const signature = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akgün Omuzubozlu | Coldwell Banker Gayrimenkul Danışmanı",
  description:
    "Coldwell Banker Söz Bir çatısı altında İstanbul Ümraniye ve Çekmeköy bölgelerinde satılık ve kiralık gayrimenkul danışmanlığı. Güven, şeffaflık ve profesyonel hizmet.",
  keywords: [
    "gayrimenkul danışmanı",
    "coldwell banker",
    "Ümraniye emlak",
    "Çekmeköy emlak",
    "satılık daire",
    "kiralık daire",
    "Akgün Omuzubozlu",
  ],
  authors: [{ name: "Akgün Omuzubozlu" }],
  openGraph: {
    title: "Akgün Omuzubozlu | Coldwell Banker Gayrimenkul Danışmanı",
    description:
      "İstanbul'da güvenilir ve profesyonel gayrimenkul danışmanlığı hizmeti.",
    locale: "tr_TR",
    type: "website",
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
        <Header />
        <main className="pb-safe-nav">{children}</main>
        <Footer />
        <BottomNav />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
