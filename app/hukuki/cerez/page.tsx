import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası | Akgün Omuzubozlu",
};

export default function CerezPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
        Yasal Bilgilendirme
      </p>
      <h1 className="mt-2 font-serif text-3xl font-bold text-navy">
        Çerez (Cookie) Politikası
      </h1>
      <p className="mt-3 text-sm text-navy/50">Son güncelleme: 18 Temmuz 2026</p>

      <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-navy/80">
        <p>
          Gayrimenkul Danışmanı Akgün Omuzubozlu'ya ait resmi internet
          sitesi ("Site"), Kullanıcı deneyimini geliştirmek, site
          performansını ölçmek ve hizmet kalitesini artırmak amacıyla
          çerezler ("cookies") kullanmaktadır. İşbu Çerez Politikası, hangi
          tür çerezlerin kullanıldığını ve bu çerezlerin amacını
          açıklamaktadır.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          1. Çerez Nedir?
        </h2>
        <p>
          Çerezler, ziyaret ettiğiniz internet siteleri tarafından
          tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin
          dosyalarıdır. Çerezler; site içi gezinme davranışlarınızı
          hatırlamak, tercihlerinizi kaydetmek ve site performansını analiz
          etmek amacıyla kullanılır.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          2. Kullanılan Çerez Türleri
        </h2>
        <p>
          <strong className="text-navy">Zorunlu Çerezler:</strong> Sitenin
          temel işlevlerinin (mobil menü durumu, form doğrulama gibi)
          çalışabilmesi için gereklidir ve devre dışı bırakılamaz.
        </p>
        <p>
          <strong className="text-navy">Performans ve Analitik
          Çerezler:</strong> Site trafiğini ölçmek, hangi sayfaların ve
          portföy ilanlarının daha çok ziyaret edildiğini analiz etmek ve
          site performansını iyileştirmek amacıyla kullanılır. Bu çerezler
          aracılığıyla toplanan veriler istatistiksel amaçlarla
          kullanılmakta olup kişiyi doğrudan tanımlamaz.
        </p>
        <p>
          <strong className="text-navy">İşlevsellik Çerezleri:</strong>{" "}
          Kullanıcının site üzerinde daha önce seçtiği filtreleme (Satılık,
          Kiralık, Ticari, Konut) gibi tercihlerin oturum süresince
          hatırlanmasını sağlar.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          3. Çerezlerin Yönetimi
        </h2>
        <p>
          Kullanıcılar, tarayıcı ayarları üzerinden çerezleri
          engelleyebilir, silebilir veya çerez kullanımına ilişkin
          bildirim almayı tercih edebilir. Ancak zorunlu çerezlerin devre
          dışı bırakılması, Sitenin bazı işlevlerinin (örneğin iletişim
          formunun düzgün çalışması) olumsuz etkilenmesine neden olabilir.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          4. Politika Güncellemeleri
        </h2>
        <p>
          İşbu Çerez Politikası, yasal mevzuattaki değişiklikler veya Site
          işleyişindeki güncellemeler doğrultusunda zaman zaman revize
          edilebilir. Güncel politika metni her zaman bu sayfa üzerinden
          erişime açık tutulacaktır.
        </p>
      </div>
    </div>
  );
}
