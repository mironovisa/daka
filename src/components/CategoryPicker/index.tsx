import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import categoriesData from '../../db/categories';
import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window")

export const CategoryPicker = ({ categoryInner, setCategoryInner, handleSetCategory }) => {
  return (
    <RNPickerSelect
      placeholder={{ label: 'Select a category', value: null }}
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
    />
  );
};

export const SubcategoryPicker = ({ categoryInner, subcategoryInner, setSubcategoryInner, handleSetSubcategory }) => {
  if (!categoryInner) {
    return null;
  }

  return (
    <RNPickerSelect
      placeholder={{ label: 'Select a subcategory', value: null }}
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
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderColor: 'gray',
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor: '#f0f0f0', // change the background color if needed
      width: width*0.75, // set a minimum width for the input on iOS
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderColor: 'gray',
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor: '#f0f0f0', // change the background color if needed
      width: width*0.75, // set a minimum width for the input on Android
    },
  });
  
