import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Biodata = () => {
  return (
    <View style={styles.container}>
      {/* Nama Field dan Isi */}
      <Text style={styles.label}>NIM:</Text>
      <Text style={styles.text}>12345678</Text>

      <Text style={styles.label}>Nama:</Text>
      <Text style={styles.text}>Iin Sholihin</Text>

      <Text style={styles.label}>Alamat:</Text>
      <Text style={styles.text}>Tanjungsari - Sumedang</Text>

      <Text style={styles.label}>Hobby:</Text>
      <Text style={styles.text}>1. Coding</Text>
      <Text style={styles.text}>2. Farming</Text>
      <Text style={styles.text}>3. Hiking</Text>
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
  label: {
    fontSize: 24,
    fontWeight: "bold", // Nama field menjadi tebal
    color: "darkblue", // Warna teks biru tua
    marginBottom: 5,
    marginLeft: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
  },
});

export default Biodata;
