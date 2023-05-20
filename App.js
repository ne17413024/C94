import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen";
import PendientesScreen from "./Screens/PendientesScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import BottonTabNavigator from "./components/BottomTabNavigator";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="Login"  screenOptions={{
    headerShown: false,
    gestureEnabled: true
  }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Screens" component={BottonTabNavigator} />
    
  </Stack.Navigator>)
}
/*
<Stack.Screen name="Welcome" component={Welcome} />
<Stack.Screen name="Login" component={LoginScreen} />
*/

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>)

}
