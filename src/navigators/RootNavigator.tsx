import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {View, Text} from "react-native"
import HomeNavigator from './HomeNavigator';
import { Foundation, Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import PostNavigator from './PostNavigator';

const Tab = createBottomTabNavigator();
function RootNavigator() {

  return (
      <Tab.Navigator
          initialRouteName="Ala"
          screenOptions={{
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: true,
              tabBarActiveTintColor: "#97B858",
              tabBarInactiveTintColor: "#3B2F2F", 
              headerShown: false,
              tabBarStyle: {
                  height: 80,
              }
          }}>
<Tab.Screen
  name="Home"
  component={HomeNavigator}
  options={{
    tabBarIcon: ({ color }) => (
      <Foundation name="home" size={24} color={color} />
    ),
  }}
          />
          <Tab.Screen
  name="Liked"
  component={PostNavigator}
  options={{
    tabBarIcon: ({ color }) => (
          <Ionicons name="md-heart" size={24} color={color} />
    ),
  }}
/>
<Tab.Screen
  name="Add"
  component={HomeNavigator}
  options={{
      tabBarIcon: ({ color }) => (
        <MaterialIcons name="add-circle-outline" size={24} color={color} />
      ),
  }}
/>
<Tab.Screen
  name="Messages"
  component={HomeNavigator}
  options={{
      tabBarIcon: ({ color }) => (
          <View><Ionicons name="chatbox" size={24} color={color} />
          <View style={{position: "absolute", top: -4, right: -10, width: 16, height: 16, borderRadius: 8, backgroundColor: "#F24E61", flexDirection: "row", alignItems: "center" }}><Text style={{fontSize: 10, color: "white", position: 'relative', left: 5}}>2</Text></View></View>
        
    ),
  }}
          />
          <Tab.Screen
  name="Profile"
  component={HomeNavigator}
  options={{
    tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" size={24} color={color} />
    ),
  }}
/>

          </Tab.Navigator>
  )
}

export default RootNavigator