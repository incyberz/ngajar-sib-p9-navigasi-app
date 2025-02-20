import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Hero = () => {
  return (
    <View style={styles.container}>
      {/* Menambahkan Gambar */}
      <Image
        source={require("../../assets/images/foto.jpg")}
        style={styles.image}
      />

      {/* Paragraf Sebelum NIM */}
      <Text style={styles.paragraph}>
        Saya adalah seorang programmer yang males ngoding, pake ChatGPT aja!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Mengatur konten untuk berada di tengah vertikal
    alignItems: "center", // Mengatur konten untuk berada di tengah horizontal
    padding: 20,
  },
  image: {
    width: 120, // Lebar gambar
    height: 120, // Tinggi gambar
    borderRadius: 60, // Membuat gambar menjadi bulat
    borderWidth: 3, // Menambahkan border
    borderColor: "lightblue", // Warna border biru muda
    marginBottom: 20, // Memberi jarak antara gambar dan teks
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 15, // Memberi jarak antara paragraf dan field pertama (NIM)
    textAlign: "center", // Menyelaraskan teks ke tengah
    marginLeft: 20,
    marginRight: 20, // Menambah jarak di kanan kiri
  },
});

export default Hero;
