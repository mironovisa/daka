import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import addPhoto from "../../../assets/addPhoto.png";

interface ImagePileProps {
  onPressA: (value: string) => void;
}

function ListFooter({ onPressA }: ImagePileProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressA}>
        <Image source={addPhoto} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

export default ListFooter;

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    alignItems: "center",
    justifyContent: "flex-start",
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
