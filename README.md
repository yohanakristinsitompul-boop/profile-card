# Profile Card App

## Deskripsi App

Profile Card App adalah aplikasi mobile berbasis React Native yang digunakan untuk membuat dan menyimpan informasi profil pengguna secara sederhana.
Aplikasi ini menyediakan fitur pengelolaan data profil seperti nama, NIM, program studi, kelas, serta foto profil. Selain itu, aplikasi memanfaatkan fitur native perangkat seperti kamera, galeri, GPS, penyimpanan lokal, dan integrasi Google Maps.
Data pengguna akan tersimpan otomatis menggunakan AsyncStorage sehingga informasi profil tetap tersedia ketika aplikasi dibuka kembali.

---

## Fitur Native yang Digunakan

Aplikasi ini menggunakan beberapa fitur native dari perangkat:

1. **Camera**
   - Mengambil foto secara langsung menggunakan kamera perangkat.

2. **Gallery / Media Library**
   - Memilih foto profil dari penyimpanan galeri perangkat.

3. **GPS / Location**
   - Mengambil koordinat lokasi pengguna secara real-time.

4. **Google Maps Integration**
   - Membuka lokasi pengguna melalui Google Maps berdasarkan koordinat GPS.

5. **AsyncStorage**
   - Menyimpan data profil secara lokal pada perangkat.

6. **Permission System**
   - Meminta izin akses kamera, galeri, dan lokasi dari pengguna.

---

# Daftar Fitur Aplikasi

## Level 2 Features

| No | Fitur | Status |
|---|---|---|
| 1 | Profile Card dengan data pengguna | ✅ Level 2 |
| 2 | Input Nama, NIM, Program Studi, dan Kelas | ✅ Level 2 |
| 3 | Mengambil foto menggunakan Camera | ✅ Level 2 |
| 4 | Memilih foto melalui Gallery | ✅ Level 2 |
| 5 | Mengambil lokasi menggunakan GPS | ✅ Level 2 |
| 6 | Menampilkan Latitude dan Longitude | ✅ Level 2 |
| 7 | Membuka lokasi melalui Google Maps | ✅ Level 2 |
| 8 | Auto Save menggunakan AsyncStorage | ✅ Level 2 |
| 9 | Load data otomatis ketika aplikasi dibuka | ✅ Level 2 |
| 10 | Reset data dengan dialog konfirmasi | ✅ Level 2 |
| 11 | Permission dialog untuk Camera, Gallery, dan Location | ✅ Level 2 |

---

## 1. Tampilan Awal Profile Card

![Tampilan Awal](screenshots/awal.jpeg)

## 2. Input Data Profile

![Input Data Profile](screenshots/input.jpeg)

## 3. Fitur Camera

![Camera](screenshots/camera.jpeg)

## 4. Fitur Gallery

![Gallery](screenshots/gallery.jpeg)

## 5. Fitur GPS

![GPS](screenshots/gps.jpeg)

## 6. Fitur Google Maps

![Google Maps](screenshots/maps.jpeg)

## 7. Reset Data

![Reset](screenshots/reset.jpeg)

## 8. Dialog Izin Permission

![Permission](screenshots/permission.jpeg)

---

# Cara Menjalankan Aplikasi

## 1. Install
Jalankan Expo: npx expo start
Kemudian:
Scan QR Code menggunakan aplikasi Expo Go
Pastikan perangkat terhubung dengan jaringan yang sama
Izinkan permission Camera, Gallery, Location, dan sebainya
Screenshot hasil

## Expo Snack

Link Expo Snack:
https://snack.expo.dev/@yohana06/b102b6
