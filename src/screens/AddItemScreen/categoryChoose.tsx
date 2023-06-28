import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { MyContextProvider, MyContextType } from '../../context/addItem';
import categoriesData from '../../db/categories';

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

interface MyComponentProps {
  onNext: () => void; // Callback to navigate to the next page
}

const MyComponent: React.FC<MyComponentProps> = ({ onNext }) => {
  const context = useContext<MyContextType>(MyContextProvider);

  // Access the context state and setter functions
  const { selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory } = context;

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryChange = (value: string) => {
    setSelectedSubcategory(value);
  };

  const getSubcategoriesOptions = (): { label: string; value: string }[] => {
    if (selectedCategory) {
      const category: Category | undefined = categoriesData.categories.find(
        (category: Category) => category.id === selectedCategory
      );
      if (category) {
        return category.subcategories.map((subcategory: Subcategory) => ({
          label: subcategory.name,
          value: subcategory.id,
        }));
      }
    }
    return [];
  };

  const categoryOptions = categoriesData.categories.map((category: Category) => ({
    label: category.name,
    value: category.id,
  }));

  const isFormComplete = selectedCategory !== null && selectedSubcategory !== null;

  const handleNext = () => {
    if (isFormComplete) {
      onNext(); // Call the callback to navigate to the next page
    }
  };

  return (
    <MyContextProvider> {/* Provide the context value to the provider */}
      <View>
        <RNPickerSelect
          placeholder={{ label: 'Select a category', value: null }}
          items={categoryOptions}
          onValueChange={handleCategoryChange}
          value={selectedCategory}
        />
        {selectedCategory && (
          <RNPickerSelect
            placeholder={{ label: 'Select a subcategory', value: null }}
            items={getSubcategoriesOptions()}
            onValueChange={handleSubcategoryChange}
            value={selectedSubcategory}
          />
        )}
        <Button title="Next" onPress={handleNext} disabled={!isFormComplete} />
      </View>
    </MyContextProvider>
  );
};

export default MyComponent;
