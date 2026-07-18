import Link from "next/link";
import { Instagram, Linkedin, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/cb.akgun", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const legalLinks = [
  { label: "KVKK Aydınlatma Metni", href: "/hukuki/kvkk" },
  { label: "Gizlilik Sözleşmesi", href: "/hukuki/gizlilik" },
  { label: "Çerez Politikası", href: "/hukuki/cerez" },
  { label: "Kullanım Şartları", href: "/hukuki/sartlar" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-navy-950 pb-safe-nav pt-14 text-white/80 md:pb-10">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl font-bold text-white">
              Akgün Omuzubozlu
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Coldwell Banker Söz Bir — Gayrimenkul Danışmanı
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold hover:text-gold"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">
              İletişim
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <a href="tel:+905453547807">+90 545 354 78 07</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a href="mailto:akgun.omuzubozlu@cb.com.tr">
                  akgun.omuzubozlu@cb.com.tr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>İstanbul / Çekmeköy</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gold">
              Yasal
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>
            © {year} Akgün Omuzubozlu — Coldwell Banker Söz Bir. Tüm hakları
            saklıdır. Bu sitede yer alan ilan bilgileri ve fiyatlar
            bilgilendirme amaçlıdır.
          </p>
          <p className="mt-2">
            Site tasarım &amp; geliştirme:{" "}
            <span className="font-semibold text-white/60">UmaiSoft</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
