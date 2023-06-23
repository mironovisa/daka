import React from 'react';
import { createStackNavigator, StackHeaderHidden } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, Dimensions } from 'react-native';
import { TextInput, Text, View, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import ProducDetailsScreen from '../screens/ProductDetailsScreen';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const { height, width } = Dimensions.get('window');

const MainHeaderComponent = ({ isMainPage = true }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        justifyContent: 'center',
        backgroundColor: 'white',
        height: height * 0.12, // Adjust the height here
      }}
      edges={['top', 'left', 'right']}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e5e5e5',
        }}
      >
        {!isMainPage && (
          <TouchableOpacity
            style={{
              backgroundColor: '#e5e5e5',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: 5,
            }}
            onPress={handlePress}
          >
            <Ionicons name="arrow-back" size={24} color="darkgrey" />
          </TouchableOpacity>
        )}

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
        <TouchableOpacity
          style={{
            backgroundColor: '#e5e5e5',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <MaterialIcons name="settings-applications" size={28} color="#97B858" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

function MyStack({ navigation, route }) {
  const tabHiddenRoutes = ["ProductDetails"]
  
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: "none"}})
    } else {
      navigation.setOptions({tabBarStyle:{display: "true"}})
    }
  }, [navigation, route])


  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => <MainHeaderComponent handlePress={handlePress} /> }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProducDetailsScreen}
        options={({ route }) => ({
          title: '',
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <View>
                <TouchableOpacity>
                  <Feather name="heart" size={21} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <EvilIcons name="share-google" size={26} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity onPress={handlePress}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="CategoryFiltering"
        component={CategoryFilterScreen}
        options={{ header: () => <MainHeaderComponent isMainPage={false} handlePress={handlePress} /> }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route })
{
  return <MyStack navigation={navigation} route={route}/>
}
