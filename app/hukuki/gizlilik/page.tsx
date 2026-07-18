import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Sözleşmesi | Akgün Omuzubozlu",
};

export default function GizlilikPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
        Yasal Bilgilendirme
      </p>
      <h1 className="mt-2 font-serif text-3xl font-bold text-navy">
        Gizlilik Sözleşmesi
      </h1>
      <p className="mt-3 text-sm text-navy/50">Son güncelleme: 18 Temmuz 2026</p>

      <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-navy/80">
        <p>
          İşbu Gizlilik Sözleşmesi, Gayrimenkul Danışmanı Akgün Omuzubozlu'ya
          ait resmi internet sitesini ("Site") ziyaret eden ve/veya Site
          üzerinden sunulan hizmetlerden faydalanan kullanıcıların ("Kullanıcı")
          verilerinin güvenliğinin sağlanması amacıyla uygulanan ilke ve
          kuralları düzenlemektedir. Siteyi kullanmaya devam etmeniz, işbu
          Gizlilik Sözleşmesi'nde yer alan koşulları kabul ettiğiniz
          anlamına gelmektedir.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          1. Veri Güvenliği Taahhüdü
        </h2>
        <p>
          Site üzerinden iletişim formu, telefon veya WhatsApp yoluyla
          tarafımıza iletilen tüm bilgiler, yalnızca gayrimenkul
          danışmanlığı hizmetinin ifası kapsamında kullanılmakta olup,
          endüstri standardına uygun teknik ve idari tedbirlerle
          korunmaktadır. Kullanıcı verilerine yetkisiz erişimin engellenmesi
          için gerekli güvenlik önlemleri alınmıştır.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          2. Bilgilerin Kullanım Alanı
        </h2>
        <p>
          Toplanan bilgiler; talep edilen gayrimenkul portföyleri hakkında
          bilgi verilmesi, ekspertiz ve kentsel dönüşüm danışmanlığı
          taleplerinin değerlendirilmesi, randevu ve görüşme
          organizasyonunun sağlanması ile Kullanıcı ile Danışman arasındaki
          iletişimin sürdürülmesi amacıyla kullanılır. Bilgileriniz, açık
          rızanız olmadıkça reklam veya pazarlama amacıyla üçüncü kişilerle
          paylaşılmaz.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          3. Üçüncü Taraf Bağlantıları
        </h2>
        <p>
          Site içerisinde yer alan ilanların "İlana Git" butonu aracılığıyla
          yönlendirildiği sahibinden.com gibi üçüncü taraf platformlar,
          kendi gizlilik politikalarına tabidir. Akgün Omuzubozlu, bu
          üçüncü taraf platformların gizlilik uygulamalarından sorumlu
          değildir ve Kullanıcıların söz konusu platformların gizlilik
          politikalarını ayrıca incelemesi tavsiye edilir.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          4. Verilerin Saklanma Süresi
        </h2>
        <p>
          Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca
          ve ilgili mevzuatta öngörülen zamanaşımı süreleri saklı kalmak
          kaydıyla saklanmakta, bu sürelerin sona ermesini müteakip
          silinmekte, yok edilmekte veya anonim hale getirilmektedir.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          5. Sözleşmede Değişiklik
        </h2>
        <p>
          Akgün Omuzubozlu, işbu Gizlilik Sözleşmesi'nde dilediği zaman
          değişiklik yapma hakkını saklı tutar. Güncel sözleşme metni, Site
          üzerinde yayınlandığı andan itibaren yürürlüğe girer.
        </p>
      </div>
    </div>
  );
}
