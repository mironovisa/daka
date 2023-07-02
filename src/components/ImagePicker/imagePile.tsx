import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ImagePileProps {
  img: string;
  deleteByValue: (value: string) => void;
}

function ImagePile({ img, deleteByValue }: ImagePileProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.image} />

      <TouchableOpacity
        onPress={() => deleteByValue(img)}
        style={styles.deleteButton}
      >
        <MaterialIcons name="delete" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default ImagePile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  actionButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  deleteButton: {
    position: "absolute",
    right: 10,
    bottom: 2,
    opacity: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
