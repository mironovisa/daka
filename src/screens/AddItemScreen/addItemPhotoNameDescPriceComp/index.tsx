import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { TryContext } from "../../../context/tryoutCont";
import { DataStore } from "aws-amplify";
import { Product, Category } from "../../../models";
import GptRequester from "../gptRequester";
import LocationPicker from "../../../components/LocationPicker";

const { width, height } = Dimensions.get("window");

interface AddInitDataProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

const AddInitDataComp = ({ onNextPage, onPrevPage }: AddInitDataProps) => {
  const {
    userSub,
    name,
    setName,
    price,
    setPrice,
    category,
    subcategory,
    imageUrls,
  } = useContext(TryContext);

  const [tempDescription, setTempDescription] = useState("");
  const [shouldCallGptRequester, setShouldCallGptRequester] = useState(false);

  const handleCreateProduct = async () => {
    try {
      const categoryObject = await DataStore.query(Category, category);

      const now = new Date();
      const createdAt = now.toISOString();
      const updatedAt = now.toISOString();

      const product = await DataStore.save(
        new Product({
          name,
          description: tempDescription, // Use the temporary description
          price: parseFloat(price),
          category: categoryObject,
          Subcategories: [],
          city: "default",
          images: imageUrls,
        })
      );

      console.log("Product created:", product);
      setShouldCallGptRequester(true); // Set the flag to call GptRequester
    } catch (error) {
      console.log("Error creating product:", error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter the name"
          style={styles.input}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          value={tempDescription}
          onChangeText={setTempDescription}
          placeholder="Enter the description"
          style={styles.input}
          multiline
        />

        <Text style={styles.label}>Price</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          placeholder="Enter the price"
          style={styles.input}
          keyboardType="numeric"
        />
        <LocationPicker />
        <View
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
        </View>

        {shouldCallGptRequester && <GptRequester desc={tempDescription} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: width,
    borderWidth: 2,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
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
});

export default AddInitDataComp;