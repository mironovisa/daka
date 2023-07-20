import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  Keyboard,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import LocationPicker from "../LocationPicker";
import { TryContext } from "../../../context/tryoutCont";
import MapView, { Marker } from "react-native-maps";
const { width, height } = Dimensions.get("screen");

interface AddInitDataProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

const AddTitle = ({ onNextPage, onPrevPage }: AddInitDataProps) => {
  const { selectedLocation } = useContext(TryContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [markerCoords, setMarkerCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const route = useRoute();
  const { setTitleAndDescGathered } = route.params;

  useEffect(() => {
    if (title && description && price) {
      setTitleAndDescGathered(true);
    }
  }, [title, description, price]);

  useEffect(() => {
    if (selectedLocation) {
      setMarkerCoords({
        latitude: selectedLocation.lat,
        longitude: selectedLocation.lng,
      });
    }
  }, [selectedLocation]);

  return (
    <View style={styles.container}>
      <LocationPicker />
      <ScrollView>
        <View>
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
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={
              selectedLocation
                ? {
                    latitude: selectedLocation.lat,
                    longitude: selectedLocation.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
                : null
            }
          >
            {selectedLocation && (
              <Marker
                coordinate={{
                  latitude: selectedLocation.lat,
                  longitude: selectedLocation.lng,
                }}
              />
            )}
          </MapView>
        </View>
        <View style={{ paddingHorizontal: 200 }} />
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

  mapContainer: {
    borderWidth: 1,
    borderColor: "#97B858",
    borderRadius: 5,
    marginBottom: 16,
    overflow: "hidden",
    height: "60%", // To round the corners of the map container
  },
  map: {
    height: "100%",
    width: "100%",
  },
});

export default AddTitle;
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

// const handleCreateProduct = async () => {
//   try {
//     const userData = await Auth.currentAuthenticatedUser();
//     const userId = userData.attributes.sub;
//     console.log("The userId is " + userId);
//     const product = await DataStore.save(
//       new Product({
//         name,
//         description: tempDescription, // Use the temporary description
//         price: parseFloat(price),
//         city: "default",
//         images: imageUrls,
//         userSub: userId,
//       })
//     );

//     console.log("Product created:", product);

//     // Create the product categories using DataStore.mutate
//     for (const categoryId of categories) {
//       const productCategory = await DataStore.save(
//         new ProductCategories({
//           categoryId,
//           productId: product.id,
//         })
//       );
//       console.log("Product category created:", productCategory);
//     }
//   } catch (error) {
//     console.log("Error creating product:", error);
//   }
// };
