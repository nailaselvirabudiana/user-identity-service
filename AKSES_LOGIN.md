# 🔐 Panduan Akses Login - User Identity Service

## Default Credentials

### 👨‍💼 Admin HR
- **Email:** `admin@company.com`
- **Password:** `admin123`
- **Hak Akses:**
  - ✅ Lihat semua profil karyawan
  - ✅ Update profil semua karyawan
  - ✅ Mendaftarkan karyawan baru
  - ✅ Mengubah status karyawan

### 👤 Karyawan (Employee)
Semua karyawan menggunakan password yang sama untuk demo:

- **Password Default:** `employee123`

**Daftar Email Karyawan:**
- `budi@company.com` (User ID: U002)
- `siti@company.com` (User ID: U003)
- `andi@company.com` (User ID: U004)
- `rina@company.com` (User ID: U005)
- `dewi@company.com` (User ID: U006)
- `agus@company.com` (User ID: U007)
- `nina@company.com` (User ID: U008)
- `fajar@company.com` (User ID: U009)
- `putri@company.com` (User ID: U010)
- `rizky@company.com` (User ID: U011)

**Hak Akses Employee:**
- ✅ Lihat profil sendiri
- ✅ Update profil sendiri (nama & email)
- ❌ Tidak bisa melihat/edit profil karyawan lain
- ❌ Tidak bisa mendaftarkan karyawan baru

## 🚀 Cara Menggunakan

### Metode 1: Quick Login (Mudah & Cepat)
1. Buka `frontend/index.html` di browser
2. Klik tombol **"Login sebagai Admin"** atau **"Login sebagai Karyawan"**
3. Sistem akan otomatis login dengan credentials yang dipilih

### Metode 2: Login Manual
1. Buka `frontend/index.html` di browser
2. Masukkan email dan password secara manual
3. Klik tombol "🔓 Login"

## 📋 Fitur Berdasarkan Role

### Admin dapat:
- Melihat profil semua karyawan (U001 - U011)
- Mengupdate nama & email semua karyawan
- Mendaftarkan karyawan baru
- Menu "Daftar Karyawan" akan muncul di navigasi

### Employee dapat:
- Melihat profil sendiri saja
- Mengupdate nama & email sendiri
- Menu "Daftar Karyawan" tidak akan muncul

## 💡 Tips Penggunaan

1. **Password Default Karyawan Baru:** `12345`
   - Saat admin mendaftarkan karyawan baru, password default adalah `12345`

2. **User ID Format:** Harus unik, contoh: U012, U013, dst.

3. **Email Format:** Harus valid dan unik

4. **Navigasi:** 
   - Menu akan otomatis menyesuaikan dengan role user yang login
   - Karyawan tidak akan melihat menu admin

## 🔄 Reset Data
Data disimpan di memory (in-memory store), jadi akan reset jika:
- Server backend direstart
- Container direstart

## 📞 Troubleshooting

**Login gagal?**
- Pastikan backend sudah berjalan di `http://localhost:3000`
- Cek apakah email dan password sudah benar
- Lihat console browser untuk error details

**Menu tidak muncul?**
- Logout dan login ulang
- Clear browser cache
- Refresh halaman

**Tidak bisa akses profil?**
- Karyawan hanya bisa akses profil sendiri
- Gunakan User ID yang sesuai dengan akun login
- Admin bisa akses semua User ID
