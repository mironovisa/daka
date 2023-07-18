import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import { Amplify } from "aws-amplify";
import { PaperProvider } from "react-native-paper";
import {
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react-native";
import awsExports from "./src/aws-exports";
import { TryContextProvider } from "./src/context/tryoutCont";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";
import { registerRootComponent } from "expo";

Amplify.configure(awsExports);
function App() {
  return (
    <TryContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar />
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </TryContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
  },
});
registerRootComponent(App);
export default withAuthenticator(App);
