import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen"
import {NavigationContainer} from "@react-navigation/native"
import RootNavigator from './src/navigators/RootNavigator';
export default function App() {
  return (
    // <View style={styles.container}>

    <NavigationContainer >
            <StatusBar />
        <RootNavigator/>
      </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
  marginTop: "15%",
  },
});
