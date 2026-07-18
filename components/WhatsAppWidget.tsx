"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.7 }}
            style={{ transformOrigin: "bottom right" }}
            className="mb-4 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl"
          >
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
              {quickReplies.map(({ icon: Icon, label }, index) => (
                <motion.a
                  key={label}
                  href={waLink(label)}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-between gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800"
                >
                  <span className="flex items-center gap-2">
                    <Icon size={16} />
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "WhatsApp menüsünü kapat" : "WhatsApp ile iletişime geç"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={`ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ${
          open ? "" : "animate-pulse-soft"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <X size={26} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <MessageCircle size={26} fill="white" strokeWidth={0} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
