import { Dimensions, StyleSheet, Platform } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  favorite: {
    marginTop: 10,
      marginLeft: 3,
      justifyContent: "center",
    width: width*0.5,
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
  favoriteView: {
    width: width * 0.45,
    justifyContent: "center",
      backgroundColor: "white",
      padding: 10,
  },
  favoriteImage: {
    width: "100%",
    height: 120,
      borderRadius: 5,

  },
  cityPriceLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCity: {
    color: "#3b2f2f",
      fontWeight: "bold",
    fontSize: 14,
  },
  textPrice: {
    fontWeight: "bold",
  },
  textDate: {
    fontSize: 12,
    color: "#3b2f2f",
  },
  productName: {
    maxHeight: 40,
    minHeight: 40,
      overflow: 'hidden',
    paddingTop: 5,
    },
    bottomLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 3,
  }
});

export default styles;
