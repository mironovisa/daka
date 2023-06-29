import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TryContext } from '../../context/tryoutCont';
import { DataStore, Auth } from "aws-amplify";
import RNPickerSelect from 'react-native-picker-select';

interface FirstPageProps {
  onNextPage: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

interface Category {
  id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: string;
  name: string;
}

const categoriesData: { categories: Category[] } = {
  categories: [
    {
      id: "50a8693a-f12c-40f2-b35e-99c30cbcc3b1",
      name: "Cars",
      url: "/cars",
      createdAt: "2023-06-26T22:24:35.954Z",
      updatedAt: "2023-06-26T22:24:35.954Z",
      subcategories: [
        {
          id: "daa3ccc4-2edc-4cbc-a986-e7deb2d3520e",
          name: "Sell"
        }
      ]
    },
    {
      id: "6355aa12-599e-4f01-ba09-47d4bde7db49",
      name: "Electronics",
      url: "/electronics",
      createdAt: "2023-06-26T22:24:50.136Z",
      updatedAt: "2023-06-26T22:24:50.136Z",
      subcategories: [
        {
          id: "d856d8e6-e1d1-46db-9d04-d4656669573e",
          name: "Phones"
        },
        {
          id: "f54cf213-890a-4a06-8751-4e7b539ac17f",
          name: "TV's"
        },
        {
          id: "9c09ec78-9777-4417-b310-c4ce1b3b6c45",
          name: "Computers"
        }
      ]
    }
  ]
};

const FirstPage: React.FC<FirstPageProps> = ({ onNextPage, containerStyle, textStyle }) => {
  const { value, setValue, userSub, setUserSub, category, subcategory, setCategory, setSubcategory } = useContext(TryContext);
  const [inputValue, setInputValue] = useState('');
  const [categoryInner, setCategoryInner] = useState<Category | null>(null);
  const [subcategoryInner, setSubcategoryInner] = useState<Subcategory | null>(null);

  const fetchUserSub = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    setUserSub(userData.attributes.sub);
  }

  useEffect(() => {
    fetchUserSub();
  }, [])
    
  const handleSetCategory = () => {
    if (categoryInner) {
      setCategory(categoryInner.id);
    }
  }

  const handleSetSubcategory = () => {
    if (subcategoryInner) {
      setSubcategory(subcategoryInner.id);
    }
  }

  const handleButtonClick = () => {
    setValue(inputValue);
    console.log('New Value:', inputValue);
    console.log('Selected Category:', category);
    console.log('Selected Subcategory:', subcategory);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>Hi!</Text>
      {/* <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter a value"
      /> */}
      <View style={styles.input}>
        <RNPickerSelect
          placeholder={{ label: 'Select a category', value: null }}
          value={categoryInner}
          onValueChange={(value) => {
            setCategoryInner(value as Category);
            handleSetCategory();
          }}
          items={categoriesData.categories.map((category) => ({
            label: category.name,
            value: category,
          }))}
        />
      </View>
      {category && (
        <View style={styles.input}>
          <RNPickerSelect
            placeholder={{ label: 'Select a subcategory', value: null }}
            value={subcategoryInner}
            onValueChange={(value) => {
              setSubcategoryInner(value as Subcategory);
              handleSetSubcategory();
            }}
            items={categoryInner.subcategories.map((subcategory) => ({
              label: subcategory.name,
              value: subcategory,
            }))}
          />
        </View>
      )}
      {/* <TouchableOpacity onPress={handleButtonClick}>
        <Text style={styles.buttonText}>Send Value to Context</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={onNextPage}>
        <Text style={styles.buttonText}>Hey!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default FirstPage;
