import { SITE_URL, SOCIAL_LINKS } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Akgün Omuzubozlu",
  image: `${SITE_URL}/danisman-fotografi.jpg`,
  url: SITE_URL,
  telephone: "+905453547807",
  email: "akgun.omuzubozlu@cb.com.tr",
  worksFor: {
    "@type": "Organization",
    name: "Coldwell Banker Söz Bir",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Çekmeköy",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: [
    "Ümraniye, İstanbul",
    "Ataşehir, İstanbul",
    "Çekmeköy, İstanbul",
  ],
  sameAs: SOCIAL_LINKS,
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
