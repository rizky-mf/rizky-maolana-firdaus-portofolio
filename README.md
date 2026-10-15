# Portofolio

Website portofolio statis (HTML + CSS + JavaScript), tanpa proses build.

## Mengubah isi
Semua isi (nama, deskripsi, skill, proyek, pengalaman, pendidikan, link sosial) ada di **`data.js`**.
Gambar (foto, screenshot proyek, CV) taruh di folder `assets/`, lalu isi path-nya di `data.js`,
misalnya `photo: "assets/foto.jpg"`.

## Menjalankan di lokal
Buka `index.html` langsung di browser, atau jalankan:

```bash
npx serve .
```

## Deploy ke Vercel
1. Push folder ini ke repository GitHub kamu.
2. Buka https://vercel.com/new → pilih repository tersebut → **Import**.
3. Framework Preset: **Other**; Build Command dan Output Directory dikosongkan → **Deploy**.

Setiap kali kamu `git push`, Vercel akan otomatis deploy ulang.
