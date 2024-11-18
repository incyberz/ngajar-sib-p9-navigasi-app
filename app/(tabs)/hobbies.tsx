import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Hobbies = () => {
  return (
    <View style={styles.container}>
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

export default Hobbies;
