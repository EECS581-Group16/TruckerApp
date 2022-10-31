import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';
import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';

/*-------------------------------------------------------------------------
  Home Screen Component
-------------------------------------------------------------------------*/
export default function HomeScreen({ navigation }){

  /*-------------------------------------------------------------------------
    Home Screen
  -------------------------------------------------------------------------*/
  return (
      <View style={globalStyles.pageContainer}>
        <Pressable style={globalStyles.forgotPassword} onPress = { () => navigation.navigate("UserProfileScreen") }>
          <Text>User Profile</Text>
        </Pressable>
        <Text style={globalStyles.pageTitle}>Truck Manager</Text>
        <TouchableOpacity style={[globalStyles.button, { margin: '5px', flex: 1 }]} onPress = { () => navigation.navigate("LoadInvoicesScreen") }>
          <Text style={globalStyles.loginText}>Load Invoices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[globalStyles.button, { margin: '5px', flex: 1 }]} onPress = { () => navigation.navigate("AccountingScreen") }>
          <Text style={globalStyles.loginText}>Accounting</Text>
        </TouchableOpacity>
      </View>
  );

}

/*-------------------------------------------------------------------------
  Component Specific Styles
-------------------------------------------------------------------------*/
const styles = StyleSheet.create({
  mySoftRectangularContainer: {// Soft Rectangular Container
    backgroundColor: colors.white,
    border: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    width: '600px',
    height: '350px',
    borderRadius: '10px',
  },
});