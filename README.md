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

# Screenshot Aplikasi

## 1. Tampilan Awal Profile Card

![Tampilan Awal](<img width="540" height="1412" alt="WhatsApp Image 2026-07-09 at 01 35 29" src="https://github.com/user-attachments/assets/a978c5f3-099d-4fae-87d7-53f923634578" />
)

## 2. Input Data Profile

![Input Data Profile](<img width="720" height="1600" alt="WhatsApp Image 2026-07-09 at 01 35 45" src="https://github.com/user-attachments/assets/5f4b05e7-d4f1-40bf-8e79-895f7fd494bb" />
)

## 3. Fitur Camera

![Camera](<img width="540" height="1412" alt="WhatsApp Image 2026-07-09 at 01 36 02" src="https://github.com/user-attachments/assets/a0384dc2-d7f5-4f5b-8670-945b713c1124" />
)

## 4. Fitur Gallery

![Gallery](<img width="540" height="1412" alt="WhatsApp Image 2026-07-09 at 01 36 11" src="https://github.com/user-attachments/assets/298017bc-d376-46f2-b20d-f28d1f0551cd" />
)

## 5. Fitur GPS

![GPS](<img width="720" height="1600" alt="WhatsApp Image 2026-07-09 at 01 36 27" src="https://github.com/user-attachments/assets/a4e4a1a2-8858-4cdc-ad96-017d53072337" />
)

## 6. Fitur Google Maps

![Google Maps](<img width="720" height="1600" alt="WhatsApp Image 2026-07-09 at 01 36 44" src="https://github.com/user-attachments/assets/60d49c85-a964-4578-9d42-6a766c40730f" />
)

## 7. Reset Data

![Reset](<img width="720" height="1600" alt="WhatsApp Image 2026-07-09 at 01 37 55" src="https://github.com/user-attachments/assets/f8bb240a-11f5-43e4-9dbe-fef07ae8d61c" />
)

## 8. Dialog Izin Permission

![Permission](<img width="720" height="1600" alt="WhatsApp Image 2026-07-09 at 01 52 06" src="https://github.com/user-attachments/assets/f947499d-b3f4-469c-9d0a-c8d36aac10db" />
)

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
