# MikroTik Hotspot Template — V3 Publik / Voucher

Template login page hotspot MikroTik bergaya **two-panel clean** untuk jaringan publik / jualan voucher.
Kiri: carousel 3 gambar (bisa diisi brosur ISP). Kanan: form dengan tab **Voucher · Member · Harga**.
Bersih, responsive, ringan, **offline-safe** (tanpa aset eksternal).

## Isi Folder
| File | Fungsi |
|------|--------|
| `login.html` | Login utama: carousel 3 gambar, tab Voucher/Member/Harga, tombol beli via WhatsApp |
| `alogin.html` | Splash "Berhasil Terhubung" → redirect otomatis |
| `status.html` | Status koneksi + tombol logout |
| `logout.html` | Halaman setelah logout |
| `error.html` | Halaman error (`$(error)`) |
| `errors.txt` | Pesan error (Bahasa Indonesia) |
| `md5.js` | Enkripsi password untuk mode `http-chap` |

## Login
- **Voucher:** kode voucher = username, password kosong.
- **Member:** username + password.
- **Harga:** daftar paket + durasi + tombol pesan via WhatsApp.
- Mendukung PAP & CHAP.

## Ganti Branding (di `login.html`)
| Yang diubah | Lokasi |
|-------------|--------|
| **Warna** | `--brand` / `--brand-dark` |
| **Nama & logo brand** | `Nama Brand Anda` & inisial `CO` |
| **Foto carousel** | 3 `.slide` (ganti `background` jadi `url('...')`) |
| **Harga & durasi** | Blok `.price-row` di tab Harga |
| **Nomor WhatsApp** | `href` `https://wa.me/62xxxx` |
| **Background** | Lihat komentar di `body` |

> Di mobile, panel gambar pindah ke bawah & full — cocok untuk brosur ISP.

## Kredit
Template oleh **[@arschbx](https://instagram.com/arschbx)** · **[Tessa-stuck](https://github.com/Tessa-stuck)**.
