import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import {View, Text} from "react-native"

const Stack = createStackNavigator();

const PostNavigator = ({ isMainPage = true }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={PostScreen}
              options={{
                  headerTitle: ()=>(<Text>Liked Items</Text>)
        }}
      />
    </Stack.Navigator>
  );
};

export default PostNavigator;
