import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
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
import DraggableFlatList from "react-native-draggable-flatlist";
import ImagePile from "./imagePile";
import addPhoto from "../../../assets/addPhoto.png";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

Amplify.configure(awsconfig);

const { height, width } = Dimensions.get("screen");

interface ImagePickerProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}
const ImagePickerExample = ({ onNextPage, onPrevPage }: ImagePickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const { setImageUrls } = useContext(TryContext);

  const deleteByValue = (value) => {
    setImages((oldImages) => {
      return oldImages.filter((img) => img !== value);
    });
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

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
        selectionLimit: 5 - images.length, // Set the selection limit based on the remaining slots
        quality: 0,
      });
    }

    if (!result.cancelled) {
      const newImages = result.assets.map((asset) => asset.uri);
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const handleNextButton = async () => {
    for (const asset of images) {
      try {
        await uploadFile(asset);
      } catch (error) {
        console.log("Error uploading file:", error);
      }
    }

    onNextPage();
  };

  const isButtonDisabled = images.length <= 0;

  const setMainImage = (index) => {
    setMainImageIndex(index);
  };

  return (
    <View style={styles.container}>
      {images.length === 0 && (
        <View>
          <TouchableOpacity onPress={showModal}>
            <Image source={addPhoto} style={styles.addPhotoCont} />
          </TouchableOpacity>
        </View>
      )}
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

      {images.length === 0 && (
        <View style={styles.noticeContainer}>
          <View style={styles.notice}>
            <MaterialIcons
              name="notification-important"
              size={24}
              color="black"
            />
            <View style={styles.noticeText}>
              <Text numberOfLines={3} ellipsizeMode="clip">
                Please, choose at least one image. Maximum of 5 images is
                allowed.
              </Text>
            </View>
          </View>
          <View style={styles.noticeTwo}>
            <Entypo name="light-bulb" size={24} color="black" />
            <View style={styles.noticeText}>
              <Text
                style={styles.noticeDescription}
                numberOfLines={3}
                ellipsizeMode="clip"
              >
                It would be wonderful for other users to see good quality images
                that show what you sell in the best way!
              </Text>
            </View>
          </View>
        </View>
      )}

      <View style={styles.grid}>
        {images.map((item, index) => (
          <ImagePile key={index} img={item} deleteByValue={deleteByValue} />
        ))}
      </View>

      <View style={styles.bottomButtonsContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPrevPage}>
            <View style={styles.buttonInnerContainer}>
              <View style={styles.buttonIconContainer}>
                <AntDesign name="arrowleft" size={20} color="black" />
              </View>
              <Text style={styles.buttonText}>Back</Text>
            </View>
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
            <View style={styles.buttonInnerContainer}>
              <Text style={styles.buttonText}>Next</Text>
              <View style={styles.buttonIconContainer}>
                <AntDesign name="arrowright" size={20} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noticeContainer: {
    width: width,
  },
  notice: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "darkorange",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  noticeText: {
    flex: 1,
    marginLeft: 10,
  },
  noticeDescription: {
    marginTop: 10,
  },
  noticeTwo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgreen",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },

  addPhotoCont: {
    width: 200,
    height: 200,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
  buttonInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonIconContainer: {
    paddingRight: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
  buttonContainerDisabled: {
    opacity: 0.5,
  },
});

export default ImagePickerExample;
