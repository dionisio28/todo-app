// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './pages/main-screen';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
      <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
  );
}

export default Routes;