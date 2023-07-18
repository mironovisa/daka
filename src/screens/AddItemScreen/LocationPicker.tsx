import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";
const { height, width } = Dimensions.get("screen");

const LocationPicker = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

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
      const address = details.description;
      const location = await geocodeAddressAsync(address);
      if (location) {
        setSelectedLocation(location);
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
        }}
      />
      {/* <View style={styles.mapContainer}>
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
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    // width: width,
    // height: "100%",
    backgroundColor: "white",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#97B858",
    borderRadius: 8,
    marginBottom: 10,
    // paddingHorizontal: 10,
  },
  input: {
    height: 40,
    color: "black", // Change the text color if needed
  },

  mapContainer: {
    flex: 1,
    height: 300,
    borderWidth: 1,
    borderColor: "#97B858",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden", // To round the corners of the map container
  },
  map: {
    flex: 1,
  },
});

export default LocationPicker;
