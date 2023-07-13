import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Product, Chat } from "../../models";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { DataStore, Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
type MessageItemProps = {
  item: Chat;
};

function Index({ item }: MessageItemProps) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const navigation = useNavigation();
  const [currentUserId, setCurrentUserId] = useState("");

  const fetchProductData = async () => {
    const results = await DataStore.query(Product, item.productId);
    setImage(results.images[0]);
    setTitle(results.name);
  };

  const fetchCurrentUserId = async () => {
    const result = await Auth.currentAuthenticatedUser();
    setCurrentUserId(result.attributes.sub);
  };
  useEffect(() => {
    fetchCurrentUserId();
  }, []);
  useEffect(() => {
    fetchProductData();
  }, []);

  const handlePress = () => {
    console.log("Clicked on chat ID:", item.id);
  };

  return (
    <TouchableOpacity
      style={{ flexDirection: "row", padding: 8 }}
      onPress={() =>
        navigation.navigate("ChatScreen", {
          chatId: item.id,
          currentUserId: currentUserId,
        })
      }
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={{ uri: image }}
            style={{ width: 85, height: 85, borderRadius: 12 }}
          />
        </View>
        <View>
          <Text style={{ color: "black", fontWeight: "bold" }}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  messageItem: {
    padding: 15,
    borderBottomWidth: 1.5,
    borderColor: "#e2e2e2",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Index;
