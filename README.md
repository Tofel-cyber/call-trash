# ♻️ Call Trash – Pi Network dApp

**Call Trash** adalah aplikasi terdesentralisasi (dApp) berbasis **Pi Network** yang memungkinkan pengguna memanggil layanan pengangkutan sampah secara on-demand menggunakan **Pi Wallet**.  
Aplikasi ini difokuskan pada **utility nyata**, solusi **lingkungan**, dan dukungan **program sosial / CSR**.

---

## 🚀 Fitur Utama

- 🔐 Login menggunakan akun **Pi Network**
- 💰 Pembayaran layanan menggunakan **Pi (Sandbox / Production)**
- ♻️ Panggil petugas pengangkut sampah
- 📊 Halaman Admin (monitoring & pengembangan)
- 🌱 Berorientasi pada solusi lingkungan berkelanjutan

---

## 🧱 Teknologi

| Layer | Teknologi |
|------|----------|
| Frontend | Next.js (App Router) |
| Backend | Next.js API Routes |
| Auth & Payment | Pi Network SDK |
| Hosting | Vercel |
| Mode | Sandbox & Production |

---

## 📁 Struktur Project

src/
├─ styles/
│ └─ globals.css
├─ lib/
│ └─ pi.js
└─ app/
├─ layout.js
├─ page.js
├─ admin/
│ └─ page.js
└─ api/
└─ payment/
├─ verify/
│ └─ route.js
└─ complete/
└─ route.js

---

## 🛠️ Setup Lokal (Development)

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/call-trash-pi-dapp.git
cd call-trash-pi-dapp
