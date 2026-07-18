import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Home as HomeIcon,
  Key,
  ClipboardCheck,
  Building2,
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";
import propertiesData from "@/data/properties.json";
import type { Property } from "@/lib/types";

const properties = propertiesData as unknown as Property[];

const expertise = [
  {
    icon: HomeIcon,
    title: "Satılık Gayrimenkul",
    description:
      "Konut ve ticari mülklerde doğru fiyatlandırma ile hızlı ve güvenli satış süreci.",
  },
  {
    icon: Key,
    title: "Kiralık Gayrimenkul",
    description:
      "Güvenilir kiracı bulma ve sözleşme sürecinin uçtan uca profesyonel yönetimi.",
  },
  {
    icon: ClipboardCheck,
    title: "Ekspertiz",
    description:
      "Piyasa verilerine dayalı, gerçekçi ve güncel gayrimenkul değerleme raporları.",
  },
  {
    icon: Building2,
    title: "Kentsel Dönüşüm",
    description:
      "Kentsel dönüşüm süreçlerinde danışmanlık ve yatırımcı-hak sahibi yönlendirmesi.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO / PROFİL */}
      <section className="mx-auto max-w-6xl px-6 pt-10 text-center md:px-8 md:pt-16">
        <Reveal y={12}>
          <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-[6px] border-navy-100 shadow-soft md:h-56 md:w-56">
            <Image
              src="/danisman-fotografi.jpg"
              alt="Akgün Omuzubozlu - Coldwell Banker Gayrimenkul Danışmanı"
              fill
              sizes="224px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Ticari Gayrimenkul Danışmanı
          </p>
          <h1 className="mt-2 font-serif text-3xl font-black text-navy md:text-5xl">
            Akgün Omuzubozlu
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-5 flex justify-center gap-3">
            {[
              { icon: Instagram, href: "https://instagram.com/cb.akgun", label: "Instagram" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold-dark"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mx-auto mt-8 flex max-w-xl flex-col items-start justify-between gap-4 rounded-full border border-navy-100 bg-white p-2 pl-6 shadow-soft sm:flex-row sm:items-center">
            <p className="font-serif text-lg font-bold text-navy">
              Nasıl Yardımcı Olabilirim?
            </p>
            <Link
              href="/#iletisim"
              className="flex w-full items-center justify-center gap-1.5 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-navy-800 hover:shadow-gold sm:w-auto"
            >
              İletişim
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* İLETİŞİM BİLGİLERİ ŞERİDİ */}
      <section className="mx-auto mt-14 max-w-6xl px-6 md:px-8" id="iletisim-bilgi">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:grid-cols-3">
            <a href="tel:+905453547807" className="flex items-center gap-3 transition hover:opacity-70">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-navy/50">Telefon</p>
                <p className="text-sm font-semibold text-navy">+90 545 354 78 07</p>
              </div>
            </a>
            <a href="mailto:akgun.omuzubozlu@cb.com.tr" className="flex items-center gap-3 transition hover:opacity-70">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-navy/50">E-posta</p>
                <p className="text-sm font-semibold text-navy">akgun.omuzubozlu@cb.com.tr</p>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-navy/50">Bölge</p>
                <p className="text-sm font-semibold text-navy">İstanbul / Çekmeköy</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HAKKIMDA */}
      <section id="hakkimda" className="mx-auto mt-20 max-w-4xl scroll-mt-24 px-6 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Hakkımda
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl">
            Merhaba, ben Akgün Omuzubozlu.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-navy/80">
            <p>
              Fenerbahçe Üniversitesi Beslenme ve Diyetetik Bölümü mezunuyum.
              Aileden gelen inşaat sektörü birikimini, yaklaşık 3-4 yıldır
              sürdürdüğüm gayrimenkul danışmanlığı tecrübemle birleştirerek,
              bugün Coldwell Banker çatısı altında profesyonel hizmet
              sunuyorum.
            </p>
            <p>
              Benim için her gayrimenkulün bir hikâyesi ve doğru yönetildiğinde
              ortaya çıkacak gerçek bir değeri vardır. Bu nedenle mülkünü
              satmak ya da kiraya vermek isteyen müşterilerime, yalnızca ilan
              sürecinde değil; doğru fiyatlandırmadan etkili pazarlamaya, doğru
              alıcı veya kiracıyı bulmaktan satış ve kiralama sürecinin
              tamamlanmasına kadar her aşamada titizlikle destek oluyorum.
            </p>
            <p>
              Çalışma anlayışımın temelinde güven, şeffaflık ve güçlü iletişim
              yer alıyor. Her mülkü kendi değeriyle ele alıyor, piyasa
              verilerini yakından takip ederek en doğru stratejiyi oluşturuyor
              ve süreci müşterilerim adına en verimli şekilde yönetmeyi
              hedefliyorum.
            </p>
            <p>
              Benim için başarı, yalnızca bir satış ya da kiralama işlemini
              tamamlamak değil; müşterilerimin mülklerini en doğru şekilde
              değerlendirerek onların güvenini kazanmak ve uzun yıllar sürecek
              iş ilişkileri kurabilmektir.
            </p>
            <p>
              Eğer siz de gayrimenkulünüzü profesyonel bir bakış açısıyla,
              doğru strateji ve etkili pazarlama ile değerlendirmek
              istiyorsanız, bu süreçte size memnuniyetle eşlik etmekten
              mutluluk duyarım.
            </p>
          </div>
        </Reveal>
      </section>

      {/* UZMANLIKLARIM */}
      <section id="uzmanliklarim" className="mx-auto mt-20 max-w-6xl scroll-mt-24 px-6 md:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Uzmanlıklarım
          </p>
          <h2 className="mt-2 text-center font-serif text-2xl font-bold text-navy md:text-3xl">
            Hizmet Alanlarım
          </h2>
        </Reveal>

        <StaggerGrid className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-serif text-base font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* ÖNE ÇIKAN PORTFÖYLER */}
      <section className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
                Portföy
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl">
                Öne Çıkan Portföyler
              </h2>
            </div>
          </div>
        </Reveal>

        <StaggerGrid className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0, 6).map((property) => (
            <StaggerItem key={property.id}>
              <PropertyCard property={property} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <p className="text-sm text-navy/60">Tüm portföylerimi görmek için</p>
            <Link
              href="/portfoy"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-gold"
            >
              Tümünü Görüntüle
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* MÜŞTERİ YORUMLARI */}
      <Testimonials />

      {/* MEDYA */}
      <section id="medya" className="mx-auto mt-20 max-w-6xl scroll-mt-24 px-6 md:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Medya
          </p>
          <h2 className="mt-2 text-center font-serif text-2xl font-bold text-navy md:text-3xl">
            Sosyal Medyada Takip Edin
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-navy/60">
            Güncel portföyler ve piyasa değerlendirmeleri için sosyal medya
            hesaplarımı takip edebilirsiniz.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {[
              { icon: Instagram, href: "https://instagram.com/cb.akgun", label: "Instagram" },
              { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold-dark"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* İLETİŞİM FORMU */}
      <section id="iletisim" className="mx-auto mt-20 max-w-2xl scroll-mt-24 px-6 pb-16 md:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
            İletişim
          </p>
          <h2 className="mt-2 text-center font-serif text-2xl font-bold text-navy md:text-3xl">
            Benimle İletişime Geçin
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-navy/60">
            Daha fazla bilgi almak ya da hizmetlerim ile ilgili ulaşmak
            isterseniz, hemen bana ulaşabilirsiniz.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
