import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, ExternalLink, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ShareButton from "@/components/ShareButton";
import Reveal from "@/components/Reveal";
import propertiesData from "@/data/properties.json";
import type { Property } from "@/lib/types";
import type { Metadata } from "next";

const properties = propertiesData as unknown as Property[];

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);
  if (!property) return { title: "İlan Bulunamadı" };
  return {
    title: `${property.title} | Akgün Omuzubozlu`,
    description: `${property.title} — ${property.price}. ${property.location}`,
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-8">
      <Link
        href="/portfoy"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy/70 transition hover:text-navy"
      >
        <ArrowLeft size={16} />
        Tüm Portföylere Dön
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Reveal>
            <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-soft sm:h-96">
              <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
              <span className="absolute left-4 top-4 rounded-full bg-navy px-4 py-1.5 text-xs font-semibold text-white shadow-soft">
                {property.type}
              </span>
              <ShareButton title={property.title} price={property.price} id={property.id} />
            </div>

            <h1 className="mt-6 font-serif text-2xl font-bold leading-snug text-navy md:text-3xl">
              {property.title}
            </h1>

            <div className="mt-2 flex items-center gap-1.5 text-sm text-navy/60">
              <MapPin size={15} />
              {property.location}
            </div>

            <p className="mt-4 font-serif text-3xl font-bold text-navy md:text-4xl">
              {property.price}
            </p>

            <a
              href={property.sahibindenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition duration-200 hover:-translate-y-0.5 hover:border-navy hover:bg-navy-50"
            >
              sahibinden.com&apos;da Görüntüle
              <ExternalLink size={15} />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 border-t border-navy-100 pt-8">
              <h2 className="font-serif text-xl font-bold text-navy">
                Teknik Özellikler
              </h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-navy-100">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-navy-100 bg-navy-50/40">
                      <td className="px-5 py-3.5 font-semibold text-navy/70">
                        Alan
                      </td>
                      <td className="px-5 py-3.5 text-navy">{property.area}</td>
                    </tr>
                    {Object.entries(property.features).map(
                      ([key, value], index) => (
                        <tr
                          key={key}
                          className={`border-b border-navy-100 last:border-b-0 ${
                            index % 2 === 0 ? "bg-white" : "bg-navy-50/40"
                          }`}
                        >
                          <td className="px-5 py-3.5 font-semibold text-navy/70">
                            {key}
                          </td>
                          <td className="px-5 py-3.5 text-navy">{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-1">
          <Reveal delay={0.15}>
            <div className="lg:sticky lg:top-24">
              <a
                href={`https://wa.me/905453547807?text=${encodeURIComponent(
                  `Merhaba, "${property.title}" ilanı hakkında bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                <MessageCircle size={17} fill="white" strokeWidth={0} />
                WhatsApp&apos;tan Hızlı Bilgi Al
              </a>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
