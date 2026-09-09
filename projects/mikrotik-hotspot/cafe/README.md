# MikroTik Hotspot Template — V2 Cafe / Resto / Hotel

Template login page hotspot MikroTik bergaya **hangat & elegan** untuk kafe, resto, atau hotel.
Fokus tamu: login voucher (dari struk/kasir) + login member. Bersih, responsive, ringan, dan
**tanpa aset eksternal** (offline-safe untuk captive portal).

## Isi Folder
| File | Fungsi |
|------|--------|
| `login.html` | Login utama (tab Voucher + Member) + info paket, running text, tombol WhatsApp |
| `alogin.html` | Splash "Berhasil Terhubung" → redirect otomatis |
| `status.html` | Status koneksi (kuota, sisa waktu, tombol logout) |
| `logout.html` | Halaman setelah logout + tombol masuk lagi |
| `error.html` | Halaman error (menampilkan `$(error)`) |
| `errors.txt` | Pesan error (Bahasa Indonesia) |
| `md5.js` | Enkripsi password untuk mode login `http-chap` |

## Cara Pasang
Sama seperti V1: backup folder hotspot, upload semua file ke direktori hotspot router
(Winbox → Files, atau FTP), lalu arahkan HTML Directory di Server Profile bila pakai subfolder.

## Cara Ganti Branding (di `login.html`)
| Yang diubah | Lokasi |
|-------------|--------|
| **Warna** | Variabel `--brand` / `--brand-dark` di `<style>` |
| **Foto background** | Lihat komentar di `body` (ganti ke `url('bg.jpg')`) |
| **Nama & logo cafe** | Teks `Nama Cafe Anda` & inisial `CO` |
| **Running text promo** | Teks di `<div class="promo">` |
| **Harga paket** | Blok `.packages` |
| **Nomor WhatsApp** | `href` pada `.wa` (format `https://wa.me/62xxxx`) |

## Login: Voucher vs Member
- **Voucher:** kode dimasukkan sebagai `username`, password kosong. Cocok untuk voucher username-only.
- **Member:** username + password biasa.
- Keduanya otomatis mendukung **PAP & CHAP** (lihat `md5.js`).

## Kredit
Template oleh **[@arschbx](https://instagram.com/arschbx)** · **[Tessa-stuck](https://github.com/Tessa-stuck)**.
Bebas dipakai & dimodifikasi.
