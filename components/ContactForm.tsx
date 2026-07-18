"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "905453547807";

interface FormState {
  name: string;
  subject: string;
  phone: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  subject: "",
  phone: "",
  email: "",
  message: "",
};

const subjectOptions = ["Satılık", "Kiralık", "Ekspertiz", "Kentsel Dönüşüm"];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const parts = [
    digits.slice(0, 3),
    digits.slice(3, 6),
    digits.slice(6, 8),
    digits.slice(8, 10),
  ].filter(Boolean);
  return parts.join(" ");
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid =
    form.name.trim().length > 1 &&
    form.subject !== "" &&
    form.phone.replace(/\D/g, "").length === 10 &&
    form.message.trim().length > 5 &&
    kvkkAccepted;

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) return;

    const lines = [
      `Merhaba, ben ${form.name}.`,
      `Konu: ${form.subject}`,
      `Telefon: +90 ${form.phone}`,
      form.email.trim() && `E-posta: ${form.email}`,
      `Mesaj: ${form.message}`,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );

    setIsSubmitted(true);
    setForm(initialState);
    setKvkkAccepted(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 18, mass: 0.6 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-navy-100 bg-white p-10 text-center shadow-soft"
      >
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
        >
          <CheckCircle2 size={48} className="text-gold" />
        </motion.div>
        <h3 className="mt-4 font-serif text-xl font-bold text-navy">
          Mesajınız Alındı
        </h3>
        <p className="mt-2 max-w-sm text-sm text-navy/60">
          Mesajınız WhatsApp&apos;a yönlendirildi. İlginiz için teşekkür
          ederim, en kısa sürede sizinle iletişime geçeceğim.
        </p>
        <motion.button
          type="button"
          onClick={() => setIsSubmitted(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="mt-6 rounded-full border border-navy/20 px-5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy-50"
        >
          Yeni Mesaj Gönder
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft md:p-7"
    >
      <div>
        <label htmlFor="name" className="sr-only">
          Adınız
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Adınız *"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full rounded-full border border-navy-100 px-5 py-3.5 text-sm text-navy placeholder:text-navy/40"
        />
      </div>

      <div>
        <label htmlFor="subject" className="sr-only">
          Konu
        </label>
        <select
          id="subject"
          required
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className="w-full rounded-full border border-navy-100 bg-white px-5 py-3.5 text-sm text-navy/80 appearance-none"
        >
          <option value="" disabled>
            Konu *
          </option>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-navy-100 px-5 py-3.5">
        <span className="flex items-center gap-1.5 text-sm text-navy">
          <span aria-hidden className="text-base leading-none">
            🇹🇷
          </span>
          +90
        </span>
        <span className="h-5 w-px bg-navy-100" />
        <input
          id="phone"
          type="tel"
          required
          placeholder="5XX XXX XX XX"
          value={form.phone}
          onChange={(e) => handleChange("phone", formatPhone(e.target.value))}
          className="w-full text-sm text-navy placeholder:text-navy/40"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email Adresiniz
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email Adresiniz (opsiyonel)"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full rounded-full border border-navy-100 px-5 py-3.5 text-sm text-navy placeholder:text-navy/40"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Mesajınız
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Mesajınız *"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full resize-none rounded-2xl border border-navy-100 px-5 py-4 text-sm text-navy placeholder:text-navy/40"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 px-1">
        <input
          type="checkbox"
          checked={kvkkAccepted}
          onChange={(e) => setKvkkAccepted(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-navy-100 text-navy accent-navy"
        />
        <span className="text-sm text-navy/80">
          <Link href="/hukuki/kvkk" className="font-semibold text-navy underline">
            KVKK ve Aydınlatma Metni
          </Link>
          &apos;ni kabul ediyorum.
        </span>
      </label>

      <button
        type="submit"
        disabled={!isFormValid}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-navy py-4 text-base font-semibold text-white shadow-soft transition disabled:cursor-not-allowed disabled:bg-navy/40 disabled:shadow-none enabled:hover:bg-navy-800"
      >
        Gönder
        <Send size={17} />
      </button>
    </form>
  );
}
