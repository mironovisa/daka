import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  productsContainer: {
    margin: 5,
  },
  topicTitle: {
    fontWeight: "normal",
    fontSize: 16,
  },
  recOrNear: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#fffcf7",
    marginTop: 5,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  titleProducts: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#F24E61",
  },
});

export default styles;
