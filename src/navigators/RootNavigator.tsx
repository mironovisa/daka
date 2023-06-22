import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {View, Text} from "react-native"
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();
function RootNavigator() {
  return (
      <Tab.Navigator
          initialRouteName="Ala"
          screenOptions={{
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: false,
              tabBarActiveTintColor: "#F24E61",
              tabBarInactiveTintColor: "#F24E61", 
              headerShown: false,
              tabBarStyle: {
                  height: 80,
              }
          }}>
          <Tab.Screen name="Home" component={HomeNavigator}/>
          
          </Tab.Navigator>
  )
}

export default RootNavigator