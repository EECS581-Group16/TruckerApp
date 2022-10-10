import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './SignIn.js';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;