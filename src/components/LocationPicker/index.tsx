import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function index() {
  function getLocationHandler() {}
  function pickOnMapHandler() {}
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
}

export default index;

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
