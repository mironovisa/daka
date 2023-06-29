import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import RootNavigator from './src/navigators/RootNavigator';
import { Amplify, Storage } from 'aws-amplify';
import {
  useAuthenticator,
  withAuthenticator, Authenticator
} from '@aws-amplify/ui-react-native';
import awsExports from './src/aws-exports';



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

    <NavigationContainer >
            <StatusBar />
      <RootNavigator />
      </NavigationContainer>
    // </View>r
  );
}



const styles = StyleSheet.create({
  container: {
  marginTop: "15%",
  },
});

export default withAuthenticator(App);