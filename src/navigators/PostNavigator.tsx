import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import {View, Text, TouchableOpacity} from "react-native"
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

const PostNavigator = ({ isMainPage = true }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Home");
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={PostScreen}
              options={{
                headerTitle: () => (<Text>Liked Items</Text>),
                headerLeft: () => (
                  <TouchableOpacity onPress={handleClick}><Entypo name="home" size={24} style={{marginLeft: 20}} color="black" /></TouchableOpacity>
                
                )
              }
              }
      />
    </Stack.Navigator>
  );
};

export default PostNavigator;
