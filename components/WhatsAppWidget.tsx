"use client";

import Image from "next/image";
import { MessageCircle, X, Key, Building2 } from "lucide-react";
import { useWhatsAppWidget } from "@/components/WhatsAppWidgetContext";

const WHATSAPP_NUMBER = "905453547807";

const quickReplies = [
  {
    icon: Key,
    label: "Gayrimenkul almak/satmak istiyorum.",
  },
  {
    icon: Building2,
    label: "Gayrimenkul kiralamak istiyorum.",
  },
];

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppWidget() {
  const { open, setOpen } = useWhatsAppWidget();

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-8 md:right-8">
      {open && (
        <div className="mb-4 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl">
          <div className="flex items-start gap-3 p-4">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-navy-100">
              <Image
                src="/danisman-fotografi.jpg"
                alt="Akgün Omuzubozlu"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-sm font-bold text-navy">
                Akgün Omuzubozlu
              </p>
              <p className="text-xs text-navy/50">Gayrimenkul Danışmanı</p>
              <p className="mt-2 text-sm text-navy/80">
                Merhaba! 👋 Size nasıl yardımcı olabilirim?
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 px-4 pb-4">
            {quickReplies.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href={waLink(label)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-medium text-white transition hover:bg-navy-800"
              >
                <span className="flex items-center gap-2">
                  <Icon size={16} />
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "WhatsApp menüsünü kapat" : "WhatsApp ile iletişime geç"}
        className={`ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 ${
          open ? "" : "animate-pulse-soft"
        }`}
      >
        {open ? (
          <X size={26} />
        ) : (
          <MessageCircle size={26} fill="white" strokeWidth={0} />
        )}
      </button>
    </div>
  );
}
