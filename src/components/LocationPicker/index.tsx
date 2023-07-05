import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { TryContext } from "../../context/tryoutCont";

const { height, width } = Dimensions.get("screen");
const MapPreview = ({ lat, lng }) => {
  const [region, setRegion] = useState({
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    console.log("Fetching map preview");
  }, []);

  return (
    <View style={styles.mapPreview}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={{ latitude: lat, longitude: lng }} />
      </MapView>
    </View>
  );
};

const Index = () => {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [haveLocation, setHaveLocation] = useState(null);
  const { setLocation } = useContext(TryContext);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "You need to grant permission for location in order to continue."
      );
      return false;
    }

    // Handle the case where the permission is already granted
    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setHaveLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    setLocation([location.coords.latitude, location.coords.longitude]);
    console.log(
      "User location:",
      location.coords.latitude,
      location.coords.longitude
    );
  }

  function pickOnMapHandler() {
    // Implement the logic for picking a location on the map
  }

  return (
    <View>
      {haveLocation && (
        <MapPreview lat={haveLocation.lat} lng={haveLocation.lng} />
      )}
      <View style={styles.actions}>
        <TouchableOpacity onPress={getLocationHandler}>
          <Text>Find by GPS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickOnMapHandler}>
          <Text>Find on Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  mapPreview: {
    marginVertical: 8,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 4,
  },
  map: {
    width: width * 0.9,
    height: 200,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
