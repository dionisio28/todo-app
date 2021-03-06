// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main, NewTask } from "./pages";
import { RootStackParamList } from "./@types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName={"Main"}>
      <Stack.Screen
       
        name={"Main"}
        component={Main}
      />
      <Stack.Screen name={"NewTask"} component={NewTask} />
    </Stack.Navigator>
  );
}

export default Routes;
