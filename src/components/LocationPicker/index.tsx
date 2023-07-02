import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

const Index = () => {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

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
    console.log(location);
  }

  function pickOnMapHandler() {
    // Implement the logic for picking a location on the map
  }

  return (
    <View>
      <View style={styles.mapPreview}></View>
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
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
