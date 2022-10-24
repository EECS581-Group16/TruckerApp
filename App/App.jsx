import React from 'react';
import SignIn from './Screens/SignInScreen.jsx';
import HomeScreen from './Screens/HomeScreen.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/*-------------------------------------------------------------------------
  Stack Navigator - Handles navigation between screens and is the first
  component after the root
-------------------------------------------------------------------------*/
const Stack = createNativeStackNavigator();
const StackNavigator = () => {// First component listed in Stack.Navigator is what's displayed when launching the site/app
  return(
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

/*-------------------------------------------------------------------------
  Our Root Component - Called from index.js
-------------------------------------------------------------------------*/
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}