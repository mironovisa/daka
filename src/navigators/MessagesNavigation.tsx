import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import {View, Text, TouchableOpacity} from "react-native"
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import MessagesScreen from "../screens/MessagesScreen";
const Stack = createStackNavigator();

const MessageNavigator = ({ isMainPage = true }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.goBack();
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MessagesScreen}
              options={{
                headerTitle: () => (<Text>My messages</Text>),
                headerLeft: () => (
                  <TouchableOpacity onPress={handleClick}><Entypo name="home" size={24} style={{marginLeft: 20}} color="black" /></TouchableOpacity>
                
                )
              }
              }
      />
    </Stack.Navigator>
  );
};

export default MessageNavigator;
