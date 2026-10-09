# Web Profil - Bootstrap

## Deskripsi
Website profil mahasiswa Armansyah Setiawan yang menggunakan HTML, Bootstrap 5, CSS tambahan, dan JavaScript sederhana.

## Fitur
- Navigasi responsif dengan Bootstrap Navbar.
- Bagian profil dan hobi.
- Tabel jadwal kuliah yang responsif.
- Tombol untuk menyembunyikan dan menampilkan jadwal.
- Link media sosial.
- Form kontak dengan validasi browser.

## Teknologi
- HTML
- Bootstrap 5.3.3 melalui CDN
- CSS
- JavaScript

## Bootstrap yang digunakan
Bootstrap ditambahkan di `index.html` melalui stylesheet CDN pada bagian `<head>`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

Bootstrap JavaScript bundle juga dimuat sebelum `script.js` agar komponen interaktif Bootstrap dapat digunakan:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Class Bootstrap yang digunakan pada halaman ini antara lain:
- **Grid dan container** (`container`, `row`, `col-12`, `col-md-auto`, `col-md`) untuk mengatur tata letak profil yang responsif.
- **Navbar dan collapse** (`navbar`, `navbar-expand-md`, `navbar-toggler`, `collapse`) untuk navigasi yang dapat dibuka pada layar kecil.
- **Card dan shadow** (`card`, `card-body`, `shadow-sm`) untuk membungkus informasi profil dan form kontak.
- **Table** (`table`, `table-striped`, `table-hover`, `table-bordered`, `table-responsive`) untuk menampilkan jadwal kuliah dan membuat tabel dapat digulir pada layar sempit.
- **Form** (`form-label`, `form-control`) untuk merapikan kolom kontak.
- **Button dan utility** (`btn`, `btn-danger`, `text-center`, `py-3`, `mb-5`, dan lainnya) untuk tampilan tombol, warna, jarak, dan perataan.

Bootstrap mengatur komponen dan layout dasar; `style.css` tetap digunakan untuk gaya khusus website. Fungsi tampil/sembunyikan jadwal tetap ditangani oleh `script.js`.

## Cara menjalankan
1. Download atau clone repository ini.
2. Buka folder proyek.
3. Buka `index.html` di browser atau gunakan ekstensi Live Server di VS Code.
4. Pastikan koneksi internet aktif agar file CSS dan JavaScript Bootstrap dapat dimuat dari CDN.

## Struktur file
- `index.html`: struktur halaman dan class Bootstrap.
- `style.css`: CSS tambahan untuk warna dan ukuran khusus.
- `script.js`: fungsi tombol tampil/sembunyikan jadwal.
- `potoprofil.jpg.JPG`: foto profil.

## Catatan
Proyek ini menggunakan HTML dan JavaScript biasa, bukan React. Bootstrap membantu layout dan tampilan responsif tanpa perlu mengubah proyek menjadi aplikasi React.
