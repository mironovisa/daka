import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput,
} from "react-native";
import { TryContext } from "../../context/tryoutCont";
import { Auth } from "aws-amplify";
import categoriesData from "../../db/categories";
import RNPickerSelect from "react-native-picker-select";
import {
  CategoryPicker,
  SubcategoryPicker,
} from "../../components/CategoryPicker";

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
  subcategoryInner: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: string;
  name: string;
}

const FirstPage = ({
  onNextPage,
  containerStyle,
  textStyle,
}: FirstPageProps) => {
  const {
    value,
    setValue,
    userSub,
    setUserSub,
    category,
    subcategory,
    setCategory,
    setSubcategory,
    categories,
    setCategories,
  } = useContext(TryContext);
  const [inputValue, setInputValue] = useState("");
  const [categoryInner, setCategoryInner] = useState<Category | null>(null);
  const [subcategoryInner, setSubcategoryInner] = useState<Subcategory | null>(
    null
  );
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const fetchUserSub = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    setUserSub(userData.attributes.sub);
  };

  useEffect(() => {
    fetchUserSub();
  }, []);

  const handleSetCategory = () => {
    if (categoryInner) {
      setCategory(categoryInner.id);
    } else {
      setCategory(null); // Set category to null when a blank option is selected
    }
  };

  const handleSetSubcategory = () => {
    if (subcategoryInner) {
      setSubcategory(subcategoryInner.id);
    } else {
      setSubcategory(null); // Set subcategory to null when a blank option is selected
    }
  };

  const handleButtonClick = () => {
    const newSelectedCategories: Category[] = [];

    if (categoryInner) {
      newSelectedCategories.push(categoryInner);
    }

    if (subcategoryInner) {
      newSelectedCategories.push(subcategoryInner);
    }

    setSelectedCategories(newSelectedCategories);
    setCategories(newSelectedCategories.map((category) => category.id));
    onNextPage();
  };

  const isButtonDisabled = !category || !subcategory;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>Choose the category:</Text>
      <View style={styles.input}>
        <CategoryPicker
          categoryInner={categoryInner}
          setCategoryInner={setCategoryInner}
          handleSetCategory={handleSetCategory}
        />
      </View>
      {category && (
        <View style={styles.input}>
          <SubcategoryPicker
            categoryInner={categoryInner}
            subcategoryInner={subcategoryInner}
            setSubcategoryInner={setSubcategoryInner}
            handleSetSubcategory={handleSetSubcategory}
          />
        </View>
      )}
      <View
        style={[
          styles.buttonContainer,
          isButtonDisabled && styles.buttonContainerDisabled,
        ]}
      >
        <TouchableOpacity
          onPress={handleButtonClick}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    left: 10,
    backgroundColor: "#4f992e",
    padding: 15,
    borderRadius: 15,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainerDisabled: {
    opacity: 0.5,
  },
});

export default FirstPage;
