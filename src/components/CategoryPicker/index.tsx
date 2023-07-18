import React from "react";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import categoriesData from "../../db/categories";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

export const CategoryPicker = ({
  categoryInner,
  setCategoryInner,
  handleSetCategory,
}) => {
  const navigation = useNavigation();

  const handleNext = () => {
    if (categoryInner) {
      navigation.navigate("OptionalData", categoryInner.id);
    }
  };

  return (
    <RNPickerSelect
      placeholder={{ label: "Pick a category", value: null }}
      value={categoryInner}
      onValueChange={(value) => {
        setCategoryInner(value);
        handleSetCategory();
      }}
      items={categoriesData.categories.map((category) => ({
        label: category.name,
        value: category,
      }))}
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
      doneText="Pick!"
      onDonePress={() => {}}
    />
  );
};

export const SubcategoryPicker = ({
  categoryInner,
  subcategoryInner,
  setSubcategoryInner,
  handleSetSubcategory,
}) => {
  const navigation = useNavigation();

  const handleNext = () => {
    if (subcategoryInner && subcategoryInner.component) {
      navigation.navigate(subcategoryInner.component);
    }
  };

  if (!categoryInner) {
    return null;
  }

  return (
    <RNPickerSelect
      placeholder={{ label: "Pick a subcategory", value: null }}
      value={subcategoryInner}
      onValueChange={(value) => {
        setSubcategoryInner(value);
        handleSetSubcategory();
      }}
      items={categoryInner.subcategories.map((subcategory) => ({
        label: subcategory.name,
        value: subcategory,
      }))}
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
      doneText="Pick!"
      onDonePress={() => {}}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderRadius: 15,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "#e3e3e3", // change the background color if needed
    width: width * 0.9, // set a minimum width for the input on iOS
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "#FFFFFC", // change the background color if needed
    width: width * 0.9, // set a minimum width for the input on Android
  },
});
