import { Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "B. Bilişik",
    text: "Akgün Bey ile çalışmak bizim için oldukça doğru bir karardı. Mülkümüzün fiyatlandırma sürecinden pazarlama çalışmalarına kadar her aşamayı titizlikle yönetti. Süreç boyunca düzenli bilgilendirme yapması ve şeffaf yaklaşımı sayesinde hiçbir soru işareti yaşamadık. Profesyonelliği ve güven veren iletişimi için kendisine teşekkür ederiz.",
  },
  {
    name: "A. Aslan",
    text: "Evimizi uzun zamandır satamıyorduk. Akgün'le tanıştıktan sonra her şey çok daha düzenli ilerledi. Sürekli iletişimde kaldı, ne yaptığını tek tek anlattı ve gerçekten bizimle kendi eviymiş gibi ilgilendi. Sonunda da istediğimiz şekilde satışımız gerçekleşti. İyi ki yollarımız kesişmiş.",
  },
  {
    name: "E. Kahveci",
    text: "Yatırım amaçlı sahip olduğumuz dairenin kiralama sürecinde Akgün Bey'den destek aldık. Doğru kiracı seçimi, hızlı iletişim ve sürecin eksiksiz yönetilmesi sayesinde beklentimizin üzerinde bir hizmet aldık. Bundan sonraki gayrimenkul işlemlerimizde de kendisiyle çalışmayı düşünüyoruz.",
  },
  {
    name: "Elif T.",
    text: "Günümüzde güvenilir bir danışman bulmak gerçekten zor. Akgün Bey, ilk görüşmeden itibaren samimiyeti ve ilgisiyle bize güven verdi. Hiç acele ettirmeden, her detayı açıklayarak süreci yönetti. Kendimizi hiçbir zaman yalnız hissetmedik. Gönül rahatlığıyla tavsiye edebileceğim bir danışman.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="yorumlar"
      className="mx-auto mt-20 max-w-6xl scroll-mt-24 px-6 md:px-8"
    >
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-dark">
          Müşteri Yorumları
        </p>
        <h2 className="mt-2 text-center font-serif text-2xl font-bold text-navy md:text-3xl">
          Müşterilerim Ne Diyor?
        </h2>
      </Reveal>

      <StaggerGrid className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <Quote size={26} className="text-gold" fill="#D4AF37" strokeWidth={0} />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      className="text-gold"
                      fill="#D4AF37"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/75">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <p className="mt-5 font-serif text-sm font-bold text-navy">
                {testimonial.name}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
