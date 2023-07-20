import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState, useContext } from "react";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";
const { height, width } = Dimensions.get("screen");
import { TryContext } from "../../context/tryoutCont";

const LocationPicker = () => {
  // const [selectedLocation, setSelectedLocation] = useState(null);
  const { address, setAddress, selectedLocation, setSelectedLocation } =
    useContext(TryContext);

  const geocodeAddressAsync = async (address) => {
    try {
      const geocodeResults = await Location.geocodeAsync(address);
      if (geocodeResults.length > 0) {
        const { latitude, longitude } = geocodeResults[0];
        return { lat: latitude, lng: longitude };
      }
      return null;
    } catch (error) {
      console.warn("Error fetching location details:", error);
      return null;
    }
  };

  const handlePlaceSelect = async (data, details) => {
    try {
      const addressPlace = details.description;
      console.log("AddressPlace: ", addressPlace);
      setAddress(addressPlace);
      const location = await geocodeAddressAsync(addressPlace);
      if (location) {
        setSelectedLocation(location);
        console.log("What a location", location);
      }
    } catch (error) {
      console.warn("Error fetching location details:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Point the item location</Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          handlePlaceSelect(data, details);
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyDpodzVpQtoyBSGV3qU5ccXveppLsdBRcQ",
          language: "en",
        }}
        styles={{
          textInputContainer: styles.inputContainer,
          textInput: styles.input,
          listView: styles.autocompleteListView,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "15%",
    backgroundColor: "white",
    zIndex: 1,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#97B858",
    borderRadius: 5,
    // marginBottom: 10,
    // paddingHorizontal: 10,
  },
  input: {
    height: 35,
    color: "black", // Change the text color if needed
  },
  autocompleteListView: {
    position: "absolute",
    top: 50, // Adjust this value based on your UI layout
    zIndex: 1, // Set a higher zIndex value
    width: "100%", // Ensure the dropdown covers the entire width
    backgroundColor: "white", // Set the background color of the dropdown
  },
});

export default LocationPicker;
