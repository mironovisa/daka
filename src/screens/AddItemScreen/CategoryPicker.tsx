import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { TryContext } from "../../context/tryoutCont";
import { Auth } from "aws-amplify";
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
const CategoriesPicker = ({
  onNextPage,
  containerStyle,
  textStyle,
  navigation,
  isNextButtonDisabled,
  setIsNextButtonDisabled,
  setPickedCategory,
}: FirstPageProps & {
  navigation: any;
  isNextButtonDisabled: boolean;
  setIsNextButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setPickedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    setUserSub,
    category,
    subcategory,
    setCategory,
    setSubcategory,
    setCategories,
  } = useContext(TryContext);

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

    setIsNextButtonDisabled(!categoryInner || !subcategoryInner);
  };

  const handleSetSubcategory = () => {
    if (subcategoryInner) {
      setSubcategory(subcategoryInner.id);
      setPickedCategory(subcategoryInner.id);
    } else {
      setSubcategory(null); // Set subcategory to null when a blank option is selected
    }

    setIsNextButtonDisabled(!categoryInner || !subcategoryInner);
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
      <View style={{ flex: 2 }}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "white",
  },
  text: {
    fontSize: 22,
    marginBottom: 16,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#97B858",
    borderWidth: 1,
    borderRadius: 15,
    // paddingHorizontal: 10,
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

export default CategoriesPicker;

{
  /* <View
        style={[
          styles.buttonContainer,
          isButtonDisabled && styles.buttonContainerDisabled,
        ]}
      > */
}
{
  /* <TouchableOpacity
          onPress={handleButtonClick}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> */
}
{
  /* </View> */
}
