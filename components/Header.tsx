"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const menuItems: { label: string; href: string; expandable?: boolean }[] = [
  { label: "Portföyler", href: "/portfoy", expandable: true },
  { label: "Uzmanlıklarım", href: "/#uzmanliklarim", expandable: true },
  { label: "Hakkımda", href: "/#hakkimda" },
  { label: "Yorumlar", href: "/#yorumlar" },
  { label: "Medya", href: "/#medya", expandable: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-navy-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8 md:py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-navy shadow-soft">
              <Image
                src="/logo-coldwell-banker.png"
                alt="Coldwell Banker Söz Bir Logo"
                fill
                sizes="56px"
                className="object-contain p-1.5"
                priority
              />
            </div>
            <span className="font-serif text-xl font-bold text-navy">
              <span className="font-black">Akgün</span> Omuzubozlu
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy transition hover:text-gold-dark"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#iletisim"
              className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-navy-800"
            >
              İletişime Geç
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Menüyü aç"
            onClick={() => setIsOpen(true)}
            className="rounded-md p-2 text-navy transition hover:bg-navy-50 md:hidden"
          >
            <Menu size={26} strokeWidth={2.25} />
          </button>
        </div>
      </header>

      {/* Mobil Slide-in Menü */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-navy-950/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white px-6 pb-8 pt-6 shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Menüyü kapat"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1.5 text-navy hover:bg-navy-50"
            >
              <X size={26} />
            </button>
          </div>

          <div className="mt-2 flex items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-navy-950 shadow-soft">
              <Image
                src="/logo-coldwell-banker.png"
                alt="Coldwell Banker Söz Bir Logo"
                fill
                sizes="64px"
                className="object-contain p-2"
              />
            </div>
          </div>

          <h2 className="mt-4 font-serif text-2xl font-bold text-navy">
            Akgün <span className="font-black">Omuzubozlu</span>
          </h2>
          <p className="mt-1 text-sm text-navy/60">Gayrimenkul Danışmanı</p>

          <nav className="mt-8 flex flex-1 flex-col gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-navy-100 py-4 text-lg font-medium text-navy"
              >
                {item.label}
                {item.expandable && <ChevronDown size={18} className="text-navy/40" />}
              </Link>
            ))}
          </nav>

          <Link
            href="/#iletisim"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-navy py-4 text-base font-semibold text-white shadow-soft"
          >
            İletişime Geç
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
