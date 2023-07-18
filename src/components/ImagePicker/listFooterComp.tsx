import React, { useRef, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
} from "react-native";
import addPhoto from "../../../assets/addPhotoo.png";

interface ImagePileProps {
  onPressA: (value: string) => void;
}

function ListFooter({ onPressA }: ImagePileProps) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>
        Add item images, take photo or add from gallery. Please, add at least 1
        photo to move forward.
      </Text> */}
      <Text style={styles.text}></Text>
      <View style={styles.image}>
        <TouchableOpacity onPress={onPressA} style={styles.image}>
          {/* <Image source={addPhoto} style={styles.image} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ListFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5C9EAD",
  },
  image: {
    height: 160,
    width: 160,
    resizeMode: "cover",
    paddingHorizontal: 8,
    marginBottom: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 15,
    paddingHorizontal: 15,
    color: "#FFFFFF",
  },
});
