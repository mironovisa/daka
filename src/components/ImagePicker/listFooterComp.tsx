import React, { useRef, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import addPhoto from "../../../assets/addPhoto.png";

interface ImagePileProps {
  onPressA: (value: string) => void;
}

function ListFooter({ onPressA }: ImagePileProps) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 300,
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
      <TouchableOpacity onPress={onPressA}>
        <Animated.Image
          source={addPhoto}
          style={[styles.image, { transform: [{ scale: scaleValue }] }]}
        />
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
});
