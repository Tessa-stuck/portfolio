# MikroTik Hotspot Template — V1 Perusahaan

Template login page hotspot MikroTik bergaya korporat. Bersih, responsive, ringan, dan **tanpa aset eksternal** (semua inline, pakai system font) supaya selalu tampil sempurna walau captive portal muncul sebelum user dapat internet.

Cocok untuk: kantor, perusahaan, institusi — dengan pemisahan akses **Karyawan/Intern** dan **Tamu**.

---

## Isi Folder

| File | Fungsi |
|------|--------|
| `login.html` | Halaman login utama (tab Karyawan/Intern + Tamu) |
| `alogin.html` | Splash "Berhasil Masuk" → redirect otomatis |
| `status.html` | Halaman status koneksi (kuota, waktu, tombol logout) |
| `logout.html` | Halaman setelah logout + tombol masuk lagi |
| `error.html` | Halaman error (menampilkan `$(error)`) |
| `errors.txt` | Pesan error (sudah diterjemahkan ke Bahasa Indonesia) |
| `md5.js` | Enkripsi password untuk mode login `http-chap` |

---

## Cara Pasang di MikroTik

1. **Backup dulu** folder hotspot bawaan (jaga-jaga):
   - Winbox → **Files** → cari folder `hotspot` → download sebagai cadangan.
2. **Upload** semua file di folder ini ke direktori hotspot router:
   - Winbox → **Files** → drag-and-drop semua file ke dalam folder `hotspot/`
     (atau folder servlet hotspot-mu, mis. `hotspot/perusahaan/`).
   - Alternatif: pakai FTP ke IP router (user & password admin RouterOS).
3. **Arahkan hotspot ke folder ini** (kalau pakai subfolder):
   - `IP → Hotspot → Server Profiles → [profil kamu] → HTML Directory` → isi nama folder.
4. **Tes:** sambung ke WiFi hotspot, halaman login harus muncul otomatis.

---

## Metode Login: PAP vs CHAP

- **PAP (default template ini):** password dikirim apa adanya. Aman kalau hotspot pakai **HTTPS**.
- **CHAP (opsional, lebih aman di HTTP):** password di-hash di browser pakai `md5.js`.
  - Template ini **otomatis** mendukung keduanya. Kalau server pakai `http-chap`,
    variabel `$(chap-id)` terisi dan `md5.js` otomatis dipakai. Kalau tidak, kirim PAP biasa.
  - Pastikan login method di `IP → Hotspot → Server Profiles → Login` sesuai.

---

## Cara Ganti Branding

Semua di dalam `login.html` (dan file lain, ubah senada):

| Yang diubah | Lokasi |
|-------------|--------|
| **Warna brand** | Variabel `--brand` & `--brand-dark` di bagian `<style>` (paling atas) |
| **Logo** | Ganti teks `CO` (di `.brand-logo` & `.mobile-logo`) dengan inisial, atau ganti jadi `<img src="logo.png">` (upload logo ke folder hotspot) |
| **Nama & tagline** | Teks di dalam `<aside class="brand-panel">` |
| **Kontak IT** | Teks di `.brand-foot` |
| **Placeholder input** | Atribut `placeholder` di tiap `<input>` |

> Tips: kalau pakai logo gambar, kompres dulu (< 30 KB) biar halaman tetap ringan.

---

## Variabel MikroTik yang Dipakai

`$(link-login-only)`, `$(link-orig)`, `$(link-redirect)`, `$(link-login)`, `$(link-logout)`,
`$(link-status)`, `$(error)`, `$(chap-id)`, `$(chap-challenge)`, `$(username)`, `$(ip)`, `$(mac)`,
`$(hostname)`, `$(uptime)`, `$(session-time-left)`, `$(bytes-in-nice)`, `$(bytes-out-nice)`.

> Catatan: teks seperti `$(if error)...$(endif)` akan terlihat sebagai teks biasa
> saat file dibuka di browser langsung — itu **normal**, hanya diproses oleh router.

---

## Kredit

Template dibuat oleh **[@arschbx](https://instagram.com/arschbx)** (Instagram) ·
**[Tessa-stuck](https://github.com/Tessa-stuck)** (GitHub).
Bebas dipakai & dimodifikasi. Jika terbantu, tetap cantumkan kredit 🙌
