"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const STORAGE_KEY = "cerez-onay";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "pending" | "hidden">(
    "hidden"
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setConsent(stored === "accepted" ? "accepted" : "pending");
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  };

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics />}

      {consent === "pending" && (
        <div className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-xl rounded-2xl border border-navy-100 bg-white p-5 shadow-2xl md:bottom-6">
          <p className="text-sm text-navy/80">
            Deneyiminizi iyileştirmek ve site performansını ölçmek için
            çerezler kullanıyoruz.{" "}
            <Link
              href="/hukuki/cerez"
              className="font-semibold text-navy underline"
            >
              Çerez Politikası
            </Link>
            &apos;nı inceleyebilirsiniz.
          </p>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={accept}
              className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Kabul Et
            </button>
          </div>
        </div>
      )}
    </>
  );
}
