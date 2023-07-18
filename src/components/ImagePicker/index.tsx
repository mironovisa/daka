import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Platform,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Amplify, Storage } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { TryContext } from "../../context/tryoutCont";
import ImagePickerModal from "./modal";
import { fetchImage } from "./functions";
import ImagePile from "./imagePile";
import { useRoute } from "@react-navigation/native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { MaterialIcons } from "@expo/vector-icons";

Amplify.configure(awsconfig);

const { height, width } = Dimensions.get("screen");

interface ImagePickerProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

function ImagePickerExample({
  onNextPage,
  onPrevPage,
  props,
}: ImagePickerProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState([]);
  const [imageAsset, setImageAsset] = useState([]);
  const { setImageUrls, categories } = useContext(TryContext);
  const route = useRoute();
  const { handleSetAllImagesGathered, setAllImagesGathered } = route.params;
  const deleteByValue = (value) => {
    setImage((oldValues) => {
      return oldValues.filter((img) => img !== value);
    });

    setImageAsset((oldAssets) => {
      return oldAssets.filter((asset) => asset.uri !== value);
    });
  };

  useEffect(() => {
    if (imageAsset.length > 0) {
      setAllImagesGathered(true);
    }
  }, [imageAsset]);

  useEffect(() => {
    console.log(imageAsset);
  }, [imageAsset]);

  const uploadFile = async (file) => {
    const img = await fetchImage(file.uri);
    return Storage.put(`my-image-filename${Math.random()}.jpg`, img, {
      level: "public",
      contentType: file.type,
      progressCallback(uploadProgress) {
        console.log(
          "PROGRESS",
          uploadProgress.loaded + "/" + uploadProgress.total
        );
      },
    })
      .then((res) => {
        Storage.get(res.key)
          .then((res) => {
            console.log("Result", res);
            const clearedUrl = res.split("?")[0];
            setImageUrls((prevUrl) => [...prevUrl, clearedUrl]);
            console.log(clearedUrl);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => console.log(e));
  };

  const showModal = () => {
    setModalVisible(!modalVisible);
  };

  const reorderImages = (data) => {
    setImage(data);

    const newImageAssets = data.map((item) => item.asset);
    setImageAsset(newImageAssets);
  };

  const handlePickImage = async (mediaType) => {
    showModal();

    let result;
    let quality = 1; // Default quality for Android

    if (Platform.OS === "ios") {
      quality = 0; // Set quality to 0 for iOS
    }

    if (mediaType === "camera") {
      result = await ImagePicker.launchCameraAsync({
        allowsMultipleSelection: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsMultipleSelection: true,
        aspect: [4, 3],
        selectionLimit: 5 - image.length, // Set the selection limit based on the remaining slots
        quality: 0,
      });
    }

    if (!result.canceled) {
      const newImages = result.assets.map((asset) => asset.uri);
      setImage((prev) => [...prev, ...newImages]);
      setImageAsset((prev) => [...prev, ...result.assets]);
    }
  };

  const handleNextButton = async () => {
    for (const asset of imageAsset) {
      try {
        await uploadFile(asset);
      } catch (error) {
        console.log("Error uploading file:", error);
      }
    }

    onNextPage();
  };

  const isButtonDisabled = image.length <= 5;
  const shouldShowListFooter = imageAsset.length <= 4;

  return (
    <View style={styles.container}>
      <View>
        {shouldShowListFooter && (
          <View>
            <TouchableOpacity
              onPress={showModal}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#326273",
                backgroundColor: "#97B858",
                marginHorizontal: 12,
                marginTop: 5,
              }}
            >
              <MaterialIcons name="add-a-photo" size={24} color="black" />
              <Text
                style={{
                  marginLeft: 10,
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Add photo
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <ImagePickerModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCameraPress={() => {
          handlePickImage("camera");
          setModalVisible(false);
        }}
        onLibraryPress={() => {
          handlePickImage("library");
          setModalVisible(false);
        }}
      />

      <View>
        <DraggableFlatList
          data={image.map((img, index) => ({ id: index.toString(), uri: img }))}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <ImagePile img={item.uri} deleteByValue={deleteByValue} />
          )}
          onDragEnd={({ data }) => reorderImages(data)}
          style={styles.flatListView}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  flatListView: {},
  image: {},
  imageInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageInfo: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
  },
  imageInfoText: {
    color: "white",
    fontWeight: "bold",
  },

  listFooterContainer: {
    position: "absolute",
    right: 10,
  },
});

export default ImagePickerExample;
