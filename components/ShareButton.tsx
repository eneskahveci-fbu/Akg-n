"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  price: string;
  id: string;
}

export default function ShareButton({ title, price, id }: ShareButtonProps) {
  const handleShare = async () => {
    const shareData = {
      title,
      text: `${title} — ${price}`,
      url: typeof window !== "undefined" ? window.location.origin + "/portfoy/" + id : "",
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
    <button
      type="button"
      onClick={handleShare}
      aria-label="İlanı paylaş"
      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-soft transition hover:scale-105 hover:bg-white"
    >
      <Share2 size={17} />
    </button>
  );
}
