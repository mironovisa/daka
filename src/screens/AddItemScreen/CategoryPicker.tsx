import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TryContext } from "../../context/tryoutCont";
import { Auth } from "aws-amplify";
import {
  CategoryPicker,
  SubcategoryPicker,
} from "../../components/CategoryPicker";
import { useRoute } from "@react-navigation/native";

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}
interface Subcategory {
  id: string;
  name: string;
}
const CategoriesPicker = () => {
  const { setUserSub, setCategory, setSubcategory } = useContext(TryContext);

  const [categoryInner, setCategoryInner] = useState<Category | null>(null);
  const [subcategoryInner, setSubcategoryInner] = useState<Subcategory | null>(
    null
  );

  const route = useRoute();
  const { setIsNextButtonDisabled, setPickedCategory } = route.params;
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
      setCategory(null);
    }

    setIsNextButtonDisabled(!categoryInner || !subcategoryInner);
  };

  const handleSetSubcategory = () => {
    if (subcategoryInner) {
      setSubcategory(subcategoryInner.id);
      setPickedCategory(subcategoryInner.id);
    } else {
      setSubcategory(null);
    }

    setIsNextButtonDisabled(!categoryInner || !subcategoryInner);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <View style={styles.input}>
          <CategoryPicker
            categoryInner={categoryInner}
            setCategoryInner={setCategoryInner}
            handleSetCategory={handleSetCategory}
          />
        </View>
        {categoryInner && (
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
    borderRadius: 5,
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

export default CategoriesPicker;
