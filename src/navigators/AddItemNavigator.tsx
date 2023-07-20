import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CategoriesPicker from "../screens/AddItemScreen/CategoryPicker";
import OptionalData from "../components/OptionalItemDataScreens/OptionalData";
import ImagePickerExample from "../components/ImagePicker";
import AddTitle from "../screens/AddItemScreen/addItemPhotoNameDescPriceComp";
import LocationPicker from "../screens/AddItemScreen/LocationPicker";
const Stack = createStackNavigator();
// i can not hear you!(


const AddItemNavigator = ({ isMainPage = true }) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [pickedCategory, setPickedCategory] = useState("");
  const [allDataGathered, setAllDataGathered] = useState(false);
  const [allImagesGathered, setAllImagesGathered] = useState(false);
  const [titleAndDescGathered, setTitleAndDescGathered] = useState(false);

  const navigation = useNavigation();
  const handleBackClick = () => {
    navigation.goBack();
  };
  const moveToOptionalData = () => {
    navigation.navigate("OptionalData", { pickedCategory: pickedCategory });
  };
  const moveBackToCategoriesPicker = () => {
    navigation.navigate("ChooseCategory");
  };

  const moveBackToOptionalData = () => {
    navigation.navigate("OptionalData");
  };
  const moveBackToImagePicker = () => {
    navigation.navigate("ImagePicker");
  };
  const moveBackToAddTitle = () => {
    navigation.navigate("AddTitle");
  };
  const moveToImagePicker = () => {
    navigation.navigate("ImagePicker");
  };
  const moveToAddTitle = () => {
    navigation.navigate("AddTitle");
  };
  const moveToLocationPicker = () => {
    navigation.navigate("LocationPicker");
  };
  const handleSetAllDataGathered = (gathered) => {
    setAllDataGathered(gathered);
    setIsNextButtonDisabled(!gathered); // Update isNextButtonDisabled based on allDataGathered
  };
  const handleSetAllImagesGathered = (gathered) => {
    setAllImagesGathered(gathered);
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChooseCategory"
        component={CategoriesPicker}
        options={({ navigation }) => ({
          headerTitle: () => <Text>Pick a category</Text>,
          headerRight: () => (
            <TouchableOpacity
              onPress={moveToOptionalData}
              disabled={isNextButtonDisabled}
            >
              <Text
                style={{
                  color: isNextButtonDisabled ? "gray" : "blue",
                  marginHorizontal: 24,
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          ),
        })}
        initialParams={{
          isNextButtonDisabled: isNextButtonDisabled,
          setIsNextButtonDisabled: setIsNextButtonDisabled,
          setPickedCategory: setPickedCategory,
        }}
      />
      <Stack.Screen
        name="OptionalData"
        component={OptionalData}
        options={{
          headerTitle: () => <Text>Add more info</Text>,
          headerLeft: () => (
            <TouchableOpacity onPress={moveBackToCategoriesPicker}>
              <Text style={{ color: "blue", paddingHorizontal: 12 }}>Back</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={moveToImagePicker}
              disabled={!allDataGathered}
            >
              <Text
                style={{
                  color: allDataGathered ? "blue" : "gray",
                  marginHorizontal: 24,
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          ),
        }}
        initialParams={{
          handleSetAllDataGathered: handleSetAllDataGathered,
          allDataGathered: allDataGathered,
          setAllDataGathered: setAllDataGathered, // Pass setAllDataGathered to OptionalData
        }}
      />

      <Stack.Screen
        name="ImagePicker"
        component={ImagePickerExample}
        options={{
          headerTitle: () => <Text>Add Image</Text>,
          headerLeft: () => (
            <TouchableOpacity onPress={moveBackToOptionalData}>
              <Text style={{ color: "blue", paddingHorizontal: 12 }}>Back</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={moveToAddTitle}
              disabled={!allImagesGathered}
            >
              <Text
                style={{
                  color: allImagesGathered ? "blue" : "gray",
                  marginHorizontal: 24,
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          ),
        }}
        initialParams={{
          handleSetAllImagesGathered: handleSetAllDataGathered,
          setAllImagesGathered: setAllImagesGathered, // Pass setAllDataGathered to OptionalData
        }}
      />

      <Stack.Screen
        name="AddTitle"
        component={AddTitle}
        options={{
          headerTitle: () => <Text>Add title & description</Text>,
          headerLeft: () => (
            <TouchableOpacity onPress={moveBackToImagePicker}>
              <Text style={{ color: "blue", paddingHorizontal: 12 }}>Back</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={moveToLocationPicker}
              disabled={!titleAndDescGathered}
            >
              <Text
                style={{
                  color: titleAndDescGathered ? "blue" : "gray",
                  marginHorizontal: 24,
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          ),
        }}
        initialParams={{
          setTitleAndDescGathered: setTitleAndDescGathered, // Pass setAllDataGathered to OptionalData
        }}
      />
      <Stack.Screen
        name="LocationPicker"
        component={LocationPicker}
        options={{
          headerTitle: () => <Text>Add item location</Text>,
          headerLeft: () => (
            <TouchableOpacity onPress={moveBackToAddTitle}>
              <Text style={{ color: "blue", paddingHorizontal: 12 }}>Back</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AddItemNavigator;
