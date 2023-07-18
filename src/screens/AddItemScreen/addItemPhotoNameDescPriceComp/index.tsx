import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Keyboard,
} from "react-native";
import MapView from "react-native-maps";
import { TryContext } from "../../../context/tryoutCont";
import { DataStore, Auth } from "aws-amplify";
import { Product, Category, ProductCategories } from "../../../models";
import { useRoute } from "@react-navigation/native";
import LocationPicker from "../LocationPicker";
const { width, height } = Dimensions.get("screen");

interface AddInitDataProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

const AddInitDataComp = ({ onNextPage, onPrevPage }: AddInitDataProps) => {
  // const { name, setName, price, setPrice, categories, imageUrls } =
  //   useContext(TryContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const route = useRoute();
  const { setTitleAndDescGathered } = route.params;

  useEffect(() => {
    if (title && description && price) {
      setTitleAndDescGathered(true);
    }
  }, [title, description, price]);
  const handleCreateProduct = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const userId = userData.attributes.sub;
      console.log("The userId is " + userId);
      const product = await DataStore.save(
        new Product({
          name,
          description: tempDescription, // Use the temporary description
          price: parseFloat(price),
          city: "default",
          images: imageUrls,
          userSub: userId,
        })
      );

      console.log("Product created:", product);

      // Create the product categories using DataStore.mutate
      for (const categoryId of categories) {
        const productCategory = await DataStore.save(
          new ProductCategories({
            categoryId,
            productId: product.id,
          })
        );
        console.log("Product category created:", productCategory);
      }
    } catch (error) {
      console.log("Error creating product:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginBottom: 100 }}>
        <LocationPicker />
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Enter the title"
          style={styles.input}
          returnKeyType="done" // Add returnKeyType prop with "done" value
          onSubmitEditing={() => Keyboard.dismiss()}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Enter the description"
          style={styles.inputDesc}
          returnKeyType="done" // Add returnKeyType prop with "done" value
          onSubmitEditing={() => Keyboard.dismiss()}
          multiline
        />

        <Text style={styles.label}>Price</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          placeholder="Enter the price"
          style={styles.input}
          keyboardType="number-pad"
          returnKeyType="done" // Add returnKeyType prop with "done" value
          onSubmitEditing={() => Keyboard.dismiss()}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: width,
    height: "100%",
    backgroundColor: "white",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#97B858",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  inputDesc: {
    height: 90,
    borderWidth: 1,
    borderColor: "#97B858",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    backgroundColor: "#4f992e",
    padding: 15,
    borderRadius: 15,
    width: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default AddInitDataComp;
{
  /* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPrevPage}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleCreateProduct}
            >
              <Text style={styles.buttonText}>Add!</Text>
            </TouchableOpacity>
          </View>
        </View> */
}
{
  /* {shouldCallGptRequester && <GptRequester desc={tempDescription} />} */
}

{
  /* <LocationPicker /> */
}
