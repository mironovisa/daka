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
import DraggableFlatList from "react-native-draggable-flatlist";
import { MaterialIcons } from "@expo/vector-icons";

Amplify.configure(awsconfig);

const { height, width } = Dimensions.get("screen");

interface ImagePickerProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

function ImagePickerExample({ onNextPage, onPrevPage }: ImagePickerProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState([]);
  const [imageAsset, setImageAsset] = useState([]);
  const { setImageUrls, categories } = useContext(TryContext);

  const deleteByValue = (value) => {
    setImage((oldValues) => {
      return oldValues.filter((img) => img !== value);
    });

    setImageAsset((oldAssets) => {
      return oldAssets.filter((asset) => asset.uri !== value);
    });
  };
  useEffect(() => console.log("Categories: " + categories), []);
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

  const isButtonDisabled = image.length <= 0;
  const shouldShowListFooter = imageAsset.length <= 5;

  return (
    <View style={styles.container}>
      <View>
        {isButtonDisabled && (
          <View
            style={{
              marginTop: 1100,
              padding: 50,
            }}
          >
            <ListFooter onPressA={showModal} />
            <View style={{ marginTop: 15 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}
              >
                Please, add a photo:
              </Text>
              <Text style={{ fontSize: 15, marginBottom: 20 }}>
                That would be really great if you choose a good photo in order
                to show your item in the best way.
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20 }}
              >
                Try following this rules:
              </Text>
              <Text style={{ fontSize: 15, marginBottom: 10 }}>
                - Take photo so that the item would be in the focus area
              </Text>
              <Text style={{ fontSize: 15, marginBottom: 10 }}>
                - Avoid showing too many unrelate items around the main item
              </Text>
            </View>
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
        />
      </View>
      <View style={styles.bottomButtonsContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPrevPage}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
        {!isButtonDisabled && (
          <View style={styles.button}>
            <TouchableOpacity onPress={showModal}>
              <MaterialIcons name="add-a-photo" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}
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
    width: (width - 20) / 2,
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
    position: "absolute",
    right: 10,
  },
});

export default ImagePickerExample;
