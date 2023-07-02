import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import RootNavigator from './src/navigators/RootNavigator';
import { Amplify,} from 'aws-amplify';
import {
  withAuthenticator
} from '@aws-amplify/ui-react-native';
import awsExports from './src/aws-exports';
import { TryContextProvider } from './src/context/tryoutCont'; 


Amplify.configure(awsExports);
function App() {
  // const navigation = useNavigation();
  // const handleAuthStateChange = (state) => {
  //   if (state === 'signedIn') {
  //     // Redirect to HomeScreen after successful authentication
  //     navigation.navigate('MainHome');
  //   }
  // };
  return (
    // <View style={styles.container}>
<TryContextProvider>
    <NavigationContainer >
            <StatusBar />
      <RootNavigator />
      </NavigationContainer></TryContextProvider>
    // </View>r
  );
}



const styles = StyleSheet.create({
  container: {
  marginTop: "15%",
  },
});

export default withAuthenticator(App);