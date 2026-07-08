import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
  Linking,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

  // =========================
  // STATE
  // =========================

  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [prodi, setProdi] = useState("");
  const [kelas, setKelas] = useState("");

  const [image, setImage] = useState(null);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [alamat, setAlamat] = useState("");

  const [loading, setLoading] = useState(false);

  // =========================
  // LOAD DATA
  // =========================

  useEffect(() => {
    loadData();
  }, []);

  // =========================
  // AUTO SAVE
  // =========================

  useEffect(() => {
    saveData();
  }, [
    nama,
    nim,
    prodi,
    kelas,
    image,
    latitude,
    longitude,
    alamat,
  ]);

  // =========================
  // SAVE DATA
  // =========================

  const saveData = async () => {
    try {

      const data = {
        nama,
        nim,
        prodi,
        kelas,
        image,
        latitude,
        longitude,
        alamat,
      };

      await AsyncStorage.setItem(
        "PROFILE_DATA",
        JSON.stringify(data)
      );

    } catch (error) {
      console.log("Save Error :", error);
    }
  };

  // =========================
  // LOAD DATA
  // =========================

  const loadData = async () => {

    try {

      const value = await AsyncStorage.getItem("PROFILE_DATA");

      if (value !== null) {

        const data = JSON.parse(value);

        setNama(data.nama || "");
        setNim(data.nim || "");
        setProdi(data.prodi || "");
        setKelas(data.kelas || "");

        setImage(data.image || null);

        setLatitude(data.latitude || "");
        setLongitude(data.longitude || "");

        setAlamat(data.alamat || "");

      }

    } catch (error) {

      console.log("Load Error :", error);

    }

  };

  // =========================
  // PERMISSION
  // =========================

  const requestPermission = async () => {

    const cameraPermission =
      await ImagePicker.requestCameraPermissionsAsync();

    const galleryPermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    const locationPermission =
      await Location.requestForegroundPermissionsAsync();

    if (
      cameraPermission.status !== "granted" ||
      galleryPermission.status !== "granted" ||
      locationPermission.status !== "granted"
    ) {

      Alert.alert(
        "Izin Ditolak",
        "Camera, Gallery dan GPS harus diizinkan."
      );

      return false;
    }

    return true;

  };
  // =========================
  // AMBIL FOTO DARI KAMERA
  // =========================

  const takePhoto = async () => {

    const permission = await requestPermission();

    if (!permission) return;


    const result = await ImagePicker.launchCameraAsync({

      mediaTypes: ImagePicker.MediaTypeOptions.Images,

      allowsEditing: true,

      aspect: [1, 1],

      quality: 0.7,

    });


    if (!result.canceled) {

      setImage(result.assets[0].uri);

    }

  };


  // =========================
  // PILIH FOTO DARI GALERI
  // =========================

  const pickImage = async () => {

    const permission = await requestPermission();

    if (!permission) return;


    const result =
      await ImagePicker.launchImageLibraryAsync({

        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,

        allowsEditing: true,

        aspect: [1, 1],

        quality: 0.7,

      });


    if (!result.canceled) {

      setImage(result.assets[0].uri);

    }

  };



  // =========================
  // AMBIL LOKASI GPS
  // =========================

  const getLocation = async () => {

    try {

      setLoading(true);


      const permission =
        await Location.requestForegroundPermissionsAsync();


      if (permission.status !== "granted") {

        Alert.alert(
          "GPS Ditolak",
          "Aktifkan izin lokasi terlebih dahulu."
        );

        setLoading(false);

        return;

      }


      const location =
        await Location.getCurrentPositionAsync({

          accuracy:
            Location.Accuracy.High,

        });



      const lat =
        location.coords.latitude.toString();


      const lon =
        location.coords.longitude.toString();



      setLatitude(lat);

      setLongitude(lon);



      // Mendapatkan alamat berdasarkan koordinat

      const address =
        await Location.reverseGeocodeAsync({

          latitude:
            location.coords.latitude,

          longitude:
            location.coords.longitude,

        });



      if (address.length > 0) {

        const data = address[0];


        const alamatLengkap =
          `${data.street || ""}, 
${data.city || ""}, 
${data.region || ""}`;


        setAlamat(alamatLengkap);

      }


      setLoading(false);


    } catch (error) {

      console.log(
        "GPS Error :",
        error
      );

      Alert.alert(
        "Error",
        "Gagal mengambil lokasi."
      );


      setLoading(false);

    }

  };



  // =========================
  // GOOGLE MAPS
  // =========================

  const openGoogleMaps = () => {


    if (
      latitude === "" ||
      longitude === ""
    ) {

      Alert.alert(
        "Lokasi Kosong",
        "Ambil lokasi GPS terlebih dahulu."
      );

      return;

    }



    const url =
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;



    Linking.openURL(url);

  };



  // =========================
  // RESET DATA
  // =========================

  const resetData = () => {


    Alert.alert(

      "Konfirmasi Reset",

      "Apakah Anda yakin ingin menghapus semua data profile?",

      [

        {
          text: "Batal",

          style: "cancel",

        },


        {

          text: "Reset",

          style: "destructive",


          onPress: async () => {


            setNama("");

            setNim("");

            setProdi("");

            setKelas("");

            setImage(null);

            setLatitude("");

            setLongitude("");

            setAlamat("");


            await AsyncStorage.removeItem(
              "PROFILE_DATA"
            );


          },


        },


      ]

    );


  };
    // =========================
  // TAMPILAN APLIKASI
  // =========================

  return (

    <ScrollView
      contentContainerStyle={styles.container}
    >

      <Text style={styles.title}>
        Profile Card
      </Text>


      {/* FOTO PROFILE */}

      <View style={styles.card}>


        {
          image ? (

            <Image
              source={{ uri: image }}
              style={styles.profileImage}
            />

          ) : (

            <View style={styles.emptyImage}>

              <Text>
                Belum Ada Foto
              </Text>

            </View>

          )
        }



        <TouchableOpacity
          style={styles.button}
          onPress={takePhoto}
        >

          <Text style={styles.buttonText}>
            📷 Ambil Foto Kamera
          </Text>

        </TouchableOpacity>



        <TouchableOpacity
          style={styles.button}
          onPress={pickImage}
        >

          <Text style={styles.buttonText}>
            🖼 Pilih Dari Galeri
          </Text>

        </TouchableOpacity>



        {/* INPUT DATA PROFILE */}


        <Text style={styles.label}>
          Nama Lengkap
        </Text>


        <TextInput

          style={styles.input}

          value={nama}

          onChangeText={setNama}

          placeholder="Masukkan Nama"

        />



        <Text style={styles.label}>
          NIM
        </Text>


        <TextInput

          style={styles.input}

          value={nim}

          onChangeText={setNim}

          placeholder="Masukkan NIM"

          keyboardType="numeric"

        />



        <Text style={styles.label}>
          Program Studi
        </Text>


        <TextInput

          style={styles.input}

          value={prodi}

          onChangeText={setProdi}

          placeholder="Masukkan Prodi"

        />



        <Text style={styles.label}>
          Kelas
        </Text>


        <TextInput

          style={styles.input}

          value={kelas}

          onChangeText={setKelas}

          placeholder="Masukkan Kelas"

        />



        {/* GPS */}


        <TouchableOpacity

          style={styles.button}

          onPress={getLocation}

        >

          <Text style={styles.buttonText}>
            📍 Ambil Lokasi GPS
          </Text>

        </TouchableOpacity>



        {
          loading && (

            <ActivityIndicator

              size="large"

            />

          )
        }



        <View style={styles.locationBox}>


          <Text style={styles.locationTitle}>
            Informasi Lokasi
          </Text>



          <Text>
            Latitude :
            {latitude || "-"}
          </Text>


          <Text>
            Longitude :
            {longitude || "-"}
          </Text>


          <Text>
            Alamat :
            {alamat || "-"}
          </Text>



        </View>



        {/* GOOGLE MAPS */}


        <TouchableOpacity

          style={styles.button}

          onPress={openGoogleMaps}

        >

          <Text style={styles.buttonText}>
            🗺 Buka Google Maps
          </Text>


        </TouchableOpacity>




        {/* RESET */}


        <TouchableOpacity

          style={styles.resetButton}

          onPress={resetData}

        >

          <Text style={styles.buttonText}>
            🗑 Reset Data
          </Text>


        </TouchableOpacity>



      </View>


    </ScrollView>

  );

}

// =========================
// STYLESHEET
// =========================

const styles = StyleSheet.create({


  container: {

    flexGrow: 1,

    padding: 20,

    backgroundColor: "#f2f2f2",

  },


  title: {

    fontSize: 26,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 20,

    color: "#333",

  },


  card: {

    backgroundColor: "#ffffff",

    borderRadius: 15,

    padding: 20,

    elevation: 5,

    shadowColor: "#000",

    shadowOpacity: 0.2,

    shadowRadius: 5,

    shadowOffset: {

      width: 0,

      height: 3,

    },

  },


  profileImage: {

    width: 150,

    height: 150,

    borderRadius: 75,

    alignSelf: "center",

    marginBottom: 20,

  },


  emptyImage: {

    width: 150,

    height: 150,

    borderRadius: 75,

    backgroundColor: "#ddd",

    justifyContent: "center",

    alignItems: "center",

    alignSelf: "center",

    marginBottom: 20,

  },


  label: {

    fontSize: 16,

    fontWeight: "bold",

    marginTop: 10,

    marginBottom: 5,

    color: "#333",

  },


  input: {

    height: 45,

    borderWidth: 1,

    borderColor: "#ccc",

    borderRadius: 8,

    paddingHorizontal: 12,

    backgroundColor: "#fff",

  },


  button: {

    backgroundColor: "#2563eb",

    padding: 14,

    borderRadius: 10,

    alignItems: "center",

    marginTop: 15,

  },


  resetButton: {

    backgroundColor: "#dc2626",

    padding: 14,

    borderRadius: 10,

    alignItems: "center",

    marginTop: 15,

    marginBottom: 10,

  },


  buttonText: {

    color: "#ffffff",

    fontWeight: "bold",

    fontSize: 15,

  },


  locationBox: {

    backgroundColor: "#eeeeee",

    padding: 15,

    borderRadius: 10,

    marginTop: 15,

  },


  locationTitle: {

    fontSize: 17,

    fontWeight: "bold",

    marginBottom: 10,

  },


});
