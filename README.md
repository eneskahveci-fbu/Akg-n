# Akgün Omuzubozlu — Coldwell Banker Gayrimenkul Danışmanı Web Sitesi

Next.js (App Router, React 19) + Tailwind CSS + Lucide React ile geliştirilmiş,
mobil öncelikli, tek danışmanlık kişisel web sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## Görselleri Değiştirmek (ÖNEMLİ)

Şu an `public/` klasöründe **geçici placeholder görseller** bulunuyor:

- `public/logo-coldwell-banker.png` → Coldwell Banker Söz Bir logosu ile
  değiştirilecek (Header.tsx içinde sol üstte ve mobil menüde kullanılıyor).
- `public/danisman-fotografi.jpg` → Akgün Omuzubozlu'nun profesyonel profil
  fotoğrafı ile değiştirilecek (Anasayfa hero alanında kullanılıyor).

Aynı dosya adlarıyla üzerine kaydetmeniz yeterlidir, kodda değişiklik
gerekmez. Yüksek çözünürlüklü logo geldiğinde `public/logo-coldwell-banker.png`
yolunu bu dosyayla değiştirin.

## Portföy (İlan) Verilerini Güncellemek

Tüm ilanlar `data/properties.json` dosyasında tutulur. Yeni ilan eklemek
için mevcut nesne formatını kopyalayıp `id` alanını benzersiz tutarak
düzenleyin. `imageUrl` alanına doğrudan bir görsel URL'si verebilir veya
kendi görsellerinizi `public/portfoy/` altına koyup `/portfoy/dosya.jpg`
şeklinde referans verebilirsiniz.

## İletişim Formu — Gerçek Gönderim Bağlantısı

`components/ContactForm.tsx` içindeki `handleSubmit` fonksiyonu şu an
formu yalnızca ön yüzde (client-side) doğrulayıp "gönderildi" ekranı
gösteriyor. Gerçek e-posta/CRM gönderimi için `handleSubmit` içine bir
`fetch(...)` çağrısı eklemeniz gerekir (örn. Formspree, Resend, kendi API
route'unuz). İlgili yer kod içinde yorum satırıyla işaretlenmiştir.

## Telefon / WhatsApp Numaraları

Numara `+90 533 057 09 29` olarak; `BottomNav.tsx`, `Header.tsx`,
`Footer.tsx`, `PropertyCard.tsx` ve `[id]/page.tsx` dosyalarında sabit
kodlanmıştır. Gerçek numarayla değiştirmek için bu dosyalardaki
`905330570929` ve `+905330570929` değerlerini bulup değiştirin.

## GitHub + Vercel'e Deploy

```bash
git init
git add .
git commit -m "İlk sürüm"
git branch -M main
git remote add origin <GITHUB_REPO_URL>
git push -u origin main
```

Ardından [vercel.com](https://vercel.com) üzerinden "Import Project" ile
GitHub reponuzu seçip deploy edebilirsiniz. Ekstra ortam değişkeni
(environment variable) gerekmemektedir.

## Klasör Yapısı

```
/data/properties.json
/components/Header.tsx
/components/Footer.tsx
/components/BottomNav.tsx
/components/PropertyCard.tsx
/components/ContactForm.tsx
/lib/types.ts
/app/layout.tsx
/app/page.tsx
/app/portfoy/page.tsx
/app/portfoy/[id]/page.tsx
/app/hukuki/kvkk/page.tsx
/app/hukuki/gizlilik/page.tsx
/app/hukuki/cerez/page.tsx
/app/hukuki/sartlar/page.tsx
```
