import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Akgün Omuzubozlu",
};

export default function KvkkPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
        Yasal Bilgilendirme
      </p>
      <h1 className="mt-2 font-serif text-3xl font-bold text-navy">
        6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma
        Metni
      </h1>
      <p className="mt-3 text-sm text-navy/50">Son güncelleme: 18 Temmuz 2026</p>

      <div className="prose-legal mt-8 space-y-6 text-[15px] leading-relaxed text-navy/80">
        <p>
          İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması
          Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla Coldwell Banker
          Söz Bir gayrimenkul danışmanlığı hizmeti kapsamında faaliyet
          gösteren Gayrimenkul Danışmanı Akgün Omuzubozlu ("Veri Sorumlusu")
          tarafından, işbu internet sitesi (tunahansimsek.com benzeri
          domain yapısı üzerinden hizmet veren Akgün Omuzubozlu resmi web
          sitesi) üzerinden elde edilen kişisel verilerinizin işlenmesine
          ilişkin olarak KVKK'nın 10. maddesi gereğince aydınlatma
          yükümlülüğünün yerine getirilmesi amacıyla hazırlanmıştır.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          1. Kişisel Verilerin İşlenme Amacı
        </h2>
        <p>
          İletişim formu, WhatsApp hızlı iletişim kanalı veya telefon/e-posta
          yoluyla tarafımıza iletmiş olduğunuz ad-soyad, telefon numarası,
          e-posta adresi ve mesaj içeriğinden ibaret kişisel verileriniz;
          gayrimenkul danışmanlığı hizmetlerinin (satılık/kiralık portföy
          sunumu, ekspertiz talebi değerlendirmesi, kentsel dönüşüm
          danışmanlığı dahil) yürütülmesi, tarafınıza dönüş yapılması,
          talep ettiğiniz ilan veya hizmet hakkında bilgilendirme
          yapılması, müşteri ilişkilerinin yönetilmesi ve yasal
          yükümlülüklerin yerine getirilmesi amaçlarıyla sınırlı olarak
          işlenmektedir.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          2. Kişisel Verilerin Aktarılması
        </h2>
        <p>
          Toplanan kişisel verileriniz, faaliyetlerin yürütülmesi amacıyla
          bağlı bulunulan Coldwell Banker Söz Bir gayrimenkul danışmanlığı
          ofisi ile, yalnızca hizmetin ifası için gerekli olduğu ölçüde ve
          KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar dahilinde,
          hukuken yetkili kamu kurum ve kuruluşları ile paylaşılabilir.
          Verileriniz, açık rızanız olmaksızın pazarlama amaçlı üçüncü
          taraflarla paylaşılmaz veya satılmaz.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
        </h2>
        <p>
          Kişisel verileriniz, internet sitesi üzerindeki iletişim formu,
          WhatsApp mesajlaşma uygulaması ve doğrudan telefon/e-posta
          iletişimi gibi kanallar aracılığıyla elektronik ortamda
          toplanmaktadır. Bu veriler, KVKK'nın 5. maddesinin 2. fıkrasının
          (c) bendi uyarınca "bir sözleşmenin kurulması veya ifasıyla
          doğrudan doğruya ilgili olması" ve (f) bendi uyarınca "veri
          sorumlusunun meşru menfaati" hukuki sebeplerine dayanılarak
          işlenmektedir.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          4. KVKK'nın 11. Maddesi Kapsamındaki Haklarınız
        </h2>
        <p>
          Kişisel veri sahibi olarak; kişisel verilerinizin işlenip
          işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,
          işlenme amacını ve amacına uygun kullanılıp kullanılmadığını
          öğrenme, yurt içinde veya yurt dışında verilerin aktarıldığı
          üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini
          isteme, KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde
          silinmesini veya yok edilmesini isteme, yapılan işlemlerin
          verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
          münhasıran otomatik sistemler ile analiz edilmesi nedeniyle
          aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kanuna
          aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde
          zararın giderilmesini talep etme haklarına sahipsiniz.
        </p>

        <h2 className="font-serif text-xl font-bold text-navy">
          5. Başvuru Yöntemi
        </h2>
        <p>
          Yukarıda sayılan haklarınıza ilişkin taleplerinizi, kimliğinizi
          tevsik edici belgelerle birlikte, işbu internet sitesinde yer alan
          iletişim bilgileri üzerinden yazılı olarak Veri Sorumlusuna
          iletebilirsiniz. Başvurularınız, KVKK'nın 13. maddesi uyarınca en
          geç otuz gün içerisinde ücretsiz olarak sonuçlandırılacaktır.
        </p>
      </div>
    </div>
  );
}
