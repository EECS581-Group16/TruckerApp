import React from 'react';
import SignInScreen from './Screens/SignInScreen.jsx';
import HomeScreen from './Screens/HomeScreen.jsx';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen.jsx';
import LoadInvoicesScreen from './Screens/LoadInvoicesScreen.jsx';
import AccountingScreen from './Screens/AccountingScreen.jsx';
import UserProfileScreen from './Screens/UserProfileScreen.jsx';
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
        <Stack.Screen name="LoadInvoicesScreen" component={LoadInvoicesScreen} options={{headerTitle: ''}}/>
        <Stack.Screen name="AccountingScreen" component={AccountingScreen} options={{headerTitle: ''}}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{headerTitle: ''}}/>
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} options={{headerTitle: ''}}/>
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