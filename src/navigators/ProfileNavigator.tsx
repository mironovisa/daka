import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, TouchableOpacity, Text, View } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import ProfileScreen from "../screens/ProfileScreen";
import { ChooseLanguage } from "../screens/LanguageChoosingScreen/LanguageScreen";

const Stack = createStackNavigator();
const { height } = Dimensions.get("window");

const MainHeaderComponent = ({ isMainPage = true }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
        justifyContent: "space-between", // Space evenly between items
        backgroundColor: "white",
        height: height * 0.12, // Adjust the height here
        paddingHorizontal: 16, // Add horizontal padding for spacing
      }}
      edges={["top", "left", "right"]}
    >
      <TouchableOpacity onPress={handlePress}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Your Profile</Text>
      <TouchableOpacity onPress={() => navigation.navigate("LanguageChoosing")}>
        <Feather name="settings" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

function MyStack({ navigation, route }) {
  const tabHiddenRoutes = ["ProductDetails"];

  // React.useLayoutEffect(() => {
  //   const routeName = getFocusedRouteNameFromRoute(route);
  //   if (tabHiddenRoutes.includes(routeName)) {
  //     navigation.setOptions({ tabBarStyle: { display: "none" } })
  //   } else {
  //     navigation.setOptions({ tabBarStyle: { display: "true" } })
  //   }
  // }, [navigation, route])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ header: () => <MainHeaderComponent isMainPage={true} /> }}
      />
      <Stack.Screen
        name="LanguageChoosing"
        component={ChooseLanguage}
        options={{ header: () => <MainHeaderComponent isMainPage={true} /> }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}
