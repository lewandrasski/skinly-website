# SKINLY — Skincare Brand Website

Website profil brand skincare sederhana untuk mini project. Dibuat menggunakan HTML, CSS, dan JavaScript murni (static website).

## Fitur
- Single-page website dengan navigasi antar-section.
- Home / Hero, About / Profile, Main Content (produk), Contact & Footer.
- Section tambahan: Core Values, Benefits, dan Testimonial.
- Responsive layout untuk desktop, tablet, dan smartphone.
- Navigasi mobile dengan JavaScript.
- Active navigation berdasarkan section yang sedang dibaca.

## Struktur folder
```text
skinly-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Cara menjalankan di komputer
1. Download atau clone repository.
2. Buka folder project di Visual Studio Code.
3. Buka `index.html` langsung di browser, atau gunakan ekstensi Live Server.
4. Website tidak membutuhkan instalasi package maupun backend.

## Cara mengunggah ke GitHub
1. Buat repository baru di GitHub, misalnya `skinly-website`.
2. Buka folder project di terminal.
3. Jalankan perintah berikut:

```bash
git init
git add .
git commit -m "Initial commit: SKINLY website"
git branch -M main
git remote add origin https://github.com/USERNAME/skinly-website.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub milikmu.

## Cara mengubah isi website
- Teks, judul, navigasi, dan konten: edit `index.html`.
- Warna, ukuran, jarak, layout, dan responsive: edit `css/style.css`.
- Interaksi menu mobile dan navigasi aktif: edit `js/script.js`.

## Catatan
Gambar produk menggunakan URL gambar eksternal dari Unsplash sehingga memerlukan koneksi internet. Nama produk, email, dan akun media sosial adalah konten contoh. Ganti dengan identitas project milikmu sebelum dikumpulkan. Website ini hanya menampilkan informasi; tidak memiliki transaksi, login, database, atau fitur CRUD.
