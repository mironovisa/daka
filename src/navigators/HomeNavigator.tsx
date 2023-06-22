import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from 'react-native';
import { TextInput, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const MainHeaderComponent = ({ isMainPage = true }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
        justifyContent: "center",
        backgroundColor: "white"
      }}
      edges={['top', 'left', 'right']}
    >
      {!isMainPage && (
        <TouchableOpacity
          style={{
            backgroundColor: "#e5e5e5",
            height: 46,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingLeft: 5,
            paddingRight: 5
          }}
          onPress={handlePress}
        >
          <Ionicons name="arrow-back" size={24} color="#424242" />
        </TouchableOpacity>
      )}
        
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e5e5e5',
        }}
      >
        <Ionicons name="search" size={24} color="darkgrey" style={{ padding: 10 }} />
        <TextInput
          placeholder="Search..."
          style={{
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#e5e5e5',
            color: '#424242',
          }}
          returnKeyType="search"
        />
      </View>

      <TouchableOpacity style={{ backgroundColor: "#e5e5e5", height: 46, alignItems: "center", justifyContent: "center" }}>
        <MaterialIcons name="settings-applications" size={36} color="#97B858" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => (<MainHeaderComponent />) }} />
      <Stack.Screen name="CategoryFiltering" component={CategoryFilterScreen} options={{ header: () => (<MainHeaderComponent isMainPage={false} />) }} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
