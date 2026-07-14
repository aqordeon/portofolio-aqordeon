# Screenshot review — Kartu Deep

Taruh file screenshot ulasan Shopee di folder ini.

## Cara pakai

1. Buka halaman produk Deep di Shopee, screenshot / download gambar ulasannya.
2. Simpan di sini, mis: `review-1.webp`, `review-2.webp`, dst.
   - Format `.webp` paling ringan (boleh `.jpg`/`.png` juga).
   - Ukuran ideal ~800px sisi terpanjang, di-crop rapi.
3. Daftarkan tiap file di `composables/cards/decks_lp.ts` pada entri `deep` →
   array `review_images`:

   ```ts
   review_images: [
       { src: '/images/reviews/deep/review-1.webp', alt: 'Screenshot ulasan pembeli kartu Deep di Shopee' },
       { src: '/images/reviews/deep/review-2.webp', alt: 'Screenshot ulasan pembeli kartu Deep di Shopee' },
   ],
   ```

Path `src` dihitung dari folder `public/`, jadi awali dengan `/images/reviews/deep/...`.
