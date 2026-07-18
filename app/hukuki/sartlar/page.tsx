import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Akgün Omuzubozlu",
};

export default function SartlarPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
        Yasal Bilgilendirme
      </p>
      <h1 className="mt-2 font-serif text-3xl font-bold text-navy">
        Kullanım Şartları
      </h1>
      <p className="mt-3 text-sm text-navy/50">Son güncelleme: 18 Temmuz 2026</p>

      <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-navy/80">
        <p>
          İşbu Kullanım Şartları, Gayrimenkul Danışmanı Akgün Omuzubozlu'ya
          ait resmi internet sitesinin ("Site") kullanımına ilişkin kural
          ve koşulları düzenlemektedir. Siteyi ziyaret eden ve/veya
          kullanan her Kullanıcı, işbu şartları önceden okuduğunu ve kabul
          ettiğini beyan eder.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          1. Site İçeriğinin Niteliği
        </h2>
        <p>
          Site üzerinde yayınlanan tüm gayrimenkul ilanları, fiyat
          bilgileri, metrekare, oda sayısı, bina yaşı ve benzeri teknik
          özellikler yalnızca bilgilendirme amaçlıdır. Bu bilgiler ilan
          sahiplerinden veya ilgili portföy kayıtlarından temin edilmekte
          olup, piyasa koşulları, ilan sahibinin talebi veya ilanın satış/
          kiralanma durumu nedeniyle önceden haber verilmeksizin
          değişebilir. Akgün Omuzubozlu, Site üzerindeki fiyat ve içerik
          bilgilerinin güncelliğini sağlamak için makul çabayı gösterse de,
          bu bilgilerin eksiksizliği veya güncelliği konusunda herhangi bir
          garanti vermemektedir.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          2. sahibinden.com Yönlendirmeleri Hakkında Sorumluluk Reddi
        </h2>
        <p>
          Site üzerindeki portföy kartlarında yer alan "İlana Git" butonu,
          Kullanıcıyı ilgili ilanın yayınlandığı sahibinden.com veya
          benzeri üçüncü taraf ilan platformuna yönlendirmektedir. Akgün
          Omuzubozlu, anılan üçüncü taraf platformların içeriğinden,
          işleyişinden, veri güvenliğinden veya bu platformlarda meydana
          gelebilecek herhangi bir teknik aksaklıktan sorumlu tutulamaz.
          Üçüncü taraf platformlarda yer alan ilan bilgileri ile Site
          üzerindeki bilgiler arasında farklılık bulunması hâlinde, güncel
          ve bağlayıcı bilgi doğrudan Danışman ile iletişime geçilerek
          teyit edilmelidir.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          3. Danışmanlık İlişkisinin Niteliği
        </h2>
        <p>
          Site üzerinden iletilen talepler, herhangi bir gayrimenkul alım,
          satım veya kiralama taahhüdü niteliği taşımaz. Taraflar arasında
          bağlayıcı bir hukuki ilişkinin doğması, ancak yazılı sözleşme
          düzenlenmesi ve/veya yetkili kurum ve kuruluşlar nezdinde
          resmî işlemlerin tamamlanması ile mümkündür.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          4. Fikri Mülkiyet Hakları
        </h2>
        <p>
          Site üzerinde yer alan Coldwell Banker markası, logo, tasarım
          unsurları, metin ve görseller, ilgili hak sahiplerinin izni
          olmaksızın çoğaltılamaz, dağıtılamaz veya ticari amaçla
          kullanılamaz.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          5. Sorumluluğun Sınırlandırılması
        </h2>
        <p>
          Akgün Omuzubozlu, Site'nin kesintisiz veya hatasız çalışacağını
          garanti etmez. Site'nin kullanımından doğabilecek doğrudan veya
          dolaylı zararlardan, yürürlükteki mevzuatın izin verdiği azami
          ölçüde sorumluluk kabul edilmemektedir.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          6. Uygulanacak Hukuk ve Yetki
        </h2>
        <p>
          İşbu Kullanım Şartları, Türkiye Cumhuriyeti mevzuatına tabidir.
          İşbu şartlardan doğabilecek her türlü uyuşmazlığın çözümünde
          Kullanıcının veya Danışmanın ikametgahının bulunduğu yer
          mahkemeleri ve icra daireleri yetkilidir.
        </p>
      </div>
    </div>
  );
}
