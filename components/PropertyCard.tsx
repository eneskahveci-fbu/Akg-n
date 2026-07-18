"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Share2, Info, ArrowRight } from "lucide-react";
import type { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const handleShare = async () => {
    const shareData = {
      title: property.title,
      text: `${property.title} — ${property.price}`,
      url: typeof window !== "undefined" ? window.location.origin + "/portfoy/" + property.id : "",
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // kullanıcı paylaşımı iptal etti, sessizce geç
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition hover:shadow-lg">
      <div className="relative h-56 w-full">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white shadow-soft">
          {property.type}
        </span>

        <button
          type="button"
          onClick={handleShare}
          aria-label="İlanı paylaş"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-soft transition hover:bg-white"
        >
          <Share2 size={16} />
        </button>

        <a
          href={`https://wa.me/905453547807?text=${encodeURIComponent(
            `Merhaba, "${property.title}" ilanı hakkında bilgi almak istiyorum.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-navy shadow-soft transition hover:bg-navy hover:text-white"
        >
          <MessageCircle size={14} className="text-[#25D366]" fill="#25D366" strokeWidth={0} />
          Hızlı İletişim
        </a>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 font-serif text-base font-bold leading-snug text-navy">
          {property.title}
        </h3>
        <p className="mt-1 text-sm text-navy/60">{property.location}</p>
        <p className="mt-2 font-serif text-2xl font-bold text-navy">
          {property.price}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <Link
            href={`/portfoy/${property.id}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-navy/20 py-2.5 text-sm font-semibold text-navy transition hover:border-navy hover:bg-navy-50"
          >
            <Info size={15} />
            Detaylı Bilgi
          </Link>
          <a
            href={property.sahibindenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-navy py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            İlana Git
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
