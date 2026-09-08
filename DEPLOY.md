# Panduan Deploy — GitHub Pages + Domain

Situs ini statis, jadi hosting-nya gampang & gratis lewat GitHub Pages.
Setelah setup, tiap update cukup `git push`.

> ⚠️ Yang jadi website hanya **isi folder `portfolio/`**. Folder lain
> (`Tessa Portfolio Projects`, `scripts`, dll) TIDAK ikut di-push.

---

## 1. Buat repo di GitHub
- Buat akun GitHub (kalau belum) → buat repository baru, mis. `portfolio`.
- Biarkan kosong (jangan centang "Add README"), biar tidak bentrok.

## 2. Push isi folder portfolio
Buka Terminal, arahkan ke folder `portfolio`, lalu:

```bash
cd "path/ke/folder/portfolio"
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<USERNAME>/portfolio.git
git push -u origin main
```

Ganti `<USERNAME>` dengan username GitHub-mu.

## 3. Aktifkan GitHub Pages
- Repo → **Settings → Pages**
- **Source:** Deploy from a branch
- **Branch:** `main`, folder `/ (root)` → Save
- Tunggu ±1 menit. Situs live di: `https://<USERNAME>.github.io/portfolio/`

## 4. Pasang domain sendiri
Setelah beli domain (Namecheap/Niagahoster/Cloudflare/dll):

**a. Di GitHub:** Settings → Pages → **Custom domain** → isi domainmu
(mis. `domainku.com`) → Save. GitHub otomatis membuat file `CNAME`.

**b. Di penyedia domain (DNS), tambahkan:**

Untuk domain utama (apex, `domainku.com`) — buat 4 A record:
```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```
(Opsional IPv6 — AAAA record:)
```
AAAA @ 2606:50c0:8000::153
AAAA @ 2606:50c0:8001::153
AAAA @ 2606:50c0:8002::153
AAAA @ 2606:50c0:8003::153
```

Untuk `www`:
```
CNAME  www  <USERNAME>.github.io.
```

**c.** Balik ke Settings → Pages → centang **Enforce HTTPS** (setelah DNS aktif,
bisa 1–24 jam). Selesai.

## 5. Update ke depan
Tiap ada perubahan:
```bash
git add .
git commit -m "update"
git push
```
Beberapa detik kemudian situs otomatis ter-update.

---

### Catatan
- Fitur **Download .zip** di customizer butuh internet (JSZip via CDN) — di GitHub Pages lancar.
- Kalau pakai project site (`/portfolio/`), semua link sudah relatif jadi tetap jalan.
- Kalau mau URL-nya di root (`https://<USERNAME>.github.io`), beri nama repo `<USERNAME>.github.io`.
