"use client";

import Link from "next/link";
import { BookUser, Home, Phone } from "lucide-react";

const PHONE_NUMBER = "+905453547807";

export default function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex items-end justify-center px-4 pb-4 md:hidden"
      aria-label="Alt navigasyon"
    >
      <div className="flex flex-1 items-center justify-between rounded-full border border-navy-100 bg-white/95 px-6 py-3 shadow-soft backdrop-blur">
        <Link
          href="/portfoy"
          aria-label="Portföyüme Git"
          className="flex flex-col items-center gap-1 text-navy transition hover:text-gold-dark"
        >
          <BookUser size={22} strokeWidth={2} />
        </Link>

        <Link
          href="/"
          aria-label="Anasayfa"
          className="flex flex-col items-center gap-1 text-navy transition hover:text-gold-dark"
        >
          <Home size={22} strokeWidth={2} />
        </Link>

        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Hemen Ara"
          className="flex flex-col items-center gap-1 text-navy transition hover:text-gold-dark"
        >
          <Phone size={22} strokeWidth={2} />
        </a>
      </div>
    </nav>
  );
}
