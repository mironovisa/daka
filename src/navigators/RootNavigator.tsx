import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {View, Text, Platform} from "react-native"
import HomeNavigator from './HomeNavigator';
import { Foundation, Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons'; 
import PostNavigator from './PostNavigator';
import ProfileNavigator from "./ProfileNavigator";
import MessagesNavigator from './MessagesNavigation';
import AddItemNavigator from './AddItemNavigator';
const Tab = createBottomTabNavigator();
function RootNavigator() {
  const tabBarSize = Platform.OS === 'android' ? 60 : 80;
  const defaultTabBarHeight = 60; 

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
                height: tabBarSize || defaultTabBarHeight,
              }
          }}>
<Tab.Screen
  name="Home"
  component={HomeNavigator}
  options={{
    tabBarIcon: ({ color }) => (
      <Foundation name="home" size={20} color={color} />
    ),
  }}
          />
          <Tab.Screen
  name="Liked"
  component={PostNavigator}
  options={{
    tabBarIcon: ({ color }) => (
          <Ionicons name="md-heart" size={20} color={color} />
    ),
  }}
/>
<Tab.Screen
  name="Add"
  component={AddItemNavigator}
  options={{
      tabBarIcon: ({ color }) => (
        <MaterialIcons name="add-circle-outline" size={20} color={color} />
      ),
  }}
/>
<Tab.Screen
  name="Messages"
  component={MessagesNavigator}
  options={{
      tabBarIcon: ({ color }) => (
          <View><Ionicons name="chatbox" size={20} color={color} />
          <View style={{position: "absolute", top: -4, right: -10, width: 16, height: 16, borderRadius: 8, backgroundColor: "#F24E61", flexDirection: "row", alignItems: "center" }}><Text style={{fontSize: 10, color: "white", position: 'relative', left: 5}}>2</Text></View></View>
        
    ),
  }}
          />
          <Tab.Screen
  name="Profile"
  component={ProfileNavigator}
  options={{
    tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" size={20} color={color} />
    ),
  }}
/>

          </Tab.Navigator>
  )
}

export default RootNavigator