import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Amplify, Storage } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { TryContext } from "../../context/tryoutCont";
import ImagePickerModal from "./modal";
import { fetchImage } from "./functions";
import { AntDesign } from "@expo/vector-icons";
import ImagePile from "./imagePile";
import ListFooter from "./listFooterComp";

Amplify.configure(awsconfig);

const { height, width } = Dimensions.get("screen");

interface ImagePickerProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

export default function ImagePickerExample({
  onNextPage,
  onPrevPage,
}: ImagePickerProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState([]);
  const [imageAsset, setImageAsset] = useState([]);
  const { setImageUrls } = useContext(TryContext);

  const deleteByValue = (value) => {
    setImage((oldValues) => {
      return oldValues.filter((img) => img !== value);
    });

    setImageAsset((oldAssets) => {
      return oldAssets.filter((asset) => asset.uri !== value);
    });
  };

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

  const isButtonDisabled = image.length <= 0;

  return (
    <View style={styles.container}>
      {/* {!image[0] && (
        <TouchableOpacity onPress={showModal}>
          <Image source={addPh} style={styles.placeholderImage} />
        </TouchableOpacity>
      )} */}
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
        <FlatList
          data={image}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <ImagePile img={item} deleteByValue={deleteByValue} />
          )}
          ListFooterComponent={
            <View style={styles.listFooterContainer}>
              <ListFooter onPressA={showModal} />
            </View>
          }
        />
      </View>

      <View style={styles.bottomButtonsContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPrevPage}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.button,
            isButtonDisabled && styles.buttonContainerDisabled,
          ]}
        >
          <TouchableOpacity
            onPress={handleNextButton}
            disabled={isButtonDisabled}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderImage: {
    width: 200,
    height: 200,
  },
  scrollView: {
    height: height * 0.3,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 10,
  },

  image: {
    height: height * 0.5,
    width: (width - 20) / 2, // Divide width equally between two columns and subtract padding
    resizeMode: "cover",
  },

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
  actionButtonsContainer: {
    flexDirection: "row",
  },

  addButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    width: width,
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: "#4f992e",
    padding: 15,
    borderRadius: 15,
    width: 100,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  buttonContainerDisabled: {
    opacity: 0.5,
  },
  listFooterContainer: {
    alignItems: "flex-start",
    flexDirection: "column", // Display items in a row
    justifyContent: "flex-start", // Space items evenly// Add margin for separation
  },
});
