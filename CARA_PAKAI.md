# 🚀 Cara Menjalankan User Identity Service

## Langkah-langkah

### 1. Jalankan Backend
```bash
cd backend
npm install
npm start
```

Backend akan berjalan di: `http://localhost:3000`

### 2. Buka Frontend
Buka file `frontend/index.html` di browser:
- **Cara termudah:** Double-click file `index.html` atau
- **Dengan Live Server (VS Code):** Klik kanan > Open with Live Server

### 3. Login dengan Akun Default

#### 🎯 Login Cepat (Quick Login)
Di halaman login, ada 2 tombol:
1. **"Login sebagai Admin"** → Langsung login sebagai Admin HR
2. **"Login sebagai Karyawan"** → Langsung login sebagai Budi (karyawan)

#### 📝 Login Manual
Atau ketik manual:

**Admin:**
- Email: `admin@company.com`
- Password: `admin123`

**Karyawan:**
- Email: `budi@company.com` (atau karyawan lain)
- Password: `employee123`

## ✅ Fitur yang Tersedia

### Untuk Admin:
- ✅ Lihat profil semua karyawan (U001 - U011)
- ✅ Update profil **semua** karyawan (nama & email)
- ✅ Daftarkan karyawan baru
- ✅ Menu "Daftar Karyawan" muncul di navigasi
- ✅ Field User ID dapat diedit untuk update profil karyawan manapun

### Untuk Employee:
- ✅ Lihat profil sendiri (dan karyawan lain jika tahu User ID-nya)
- ✅ Update profil **hanya diri sendiri** (nama & email)
- ❌ Tidak bisa update profil karyawan lain
- ❌ Menu "Daftar Karyawan" tidak muncul
- 🔒 Field User ID dikunci (readonly) ke User ID sendiri

### 🎨 Tampilan Baru (User-Friendly)
- **Tampilan Card** untuk profil karyawan (bukan JSON)
- **Visual Status Badge** (Aktif, Non-aktif, Resign)
- **Role Badge** dengan icon (Admin HR 👨‍💼 / Karyawan 👤)
- **Avatar** dengan initial nama
- **Tanggal terdaftar** dalam format Indonesia
- **Success/Error messages** yang jelas dan informatif
- **Loading indicators** saat proses data

## 📋 Info Penting

### Default Credentials
Lihat file: [`AKSES_LOGIN.md`](AKSES_LOGIN.md)

### User ID yang Ada
- **U001**: Admin HR
- **U002 - U011**: Karyawan (Budi, Siti, Andi, Rina, Dewi, Agus, Nina, Fajar, Putri, Rizky)

### Password Default Karyawan Baru
Saat admin mendaftar karyawan baru: `12345`

## 🎨 Tampilan Baru

✨ **User-Friendly Features:**
1. **Quick Login Buttons** → Klik sekali langsung login
2. **Credential Cards** → Info email & password jelas terlihat
3. **Modern UI** → Gradient background, animasi smooth
4. **Bahasa Indonesia** → Semua label & instruksi dalam Bahasa Indonesia
5. **Role-Based Navigation** → Menu muncul sesuai hak akses
6. **Visual Feedback** → Hover effects, transitions

## 🛠️ Troubleshooting

**Backend tidak bisa diakses?**
```bash
# Pastikan backend sudah running
cd backend
npm start
```

**Login gagal?**
- Cek credentials di `AKSES_LOGIN.md`
- Pastikan backend sudah running
- Lihat console browser untuk error

**Tampilan rusak?**
- Clear browser cache
- Refresh halaman (Ctrl + F5)
- Pastikan file `css/styles.css` ada

## 📁 Struktur File

```
frontend/
├── index.html          → Main page (single-page app)
├── css/
│   └── styles.css     → Modern styling
└── js/
    ├── auth.js        → Authentication & navigation
    ├── login.js       → Login handler
    ├── profile.js     → View profile
    ├── update.js      → Update profile
    └── register.js    → Register new employee (admin only)
```

## 🎯 Quick Start (TL;DR)

1. **Terminal 1:** `cd backend && npm install && npm start`
2. **Browser:** Buka `frontend/index.html`
3. **Klik:** "Login sebagai Admin" atau "Login sebagai Karyawan"
4. **Done!** 🎉
