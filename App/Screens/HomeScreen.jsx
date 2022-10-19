import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';
import { styles, colors } from '../Styles/GlobalStyles.jsx';

/*-------------------------------------------------------------------------
  Home Screen Component
-------------------------------------------------------------------------*/
export default function HomeScreen({ navigation }){

  /*-------------------------------------------------------------------------
    Home Screen
  -------------------------------------------------------------------------*/
  return (
      <View style={styles.pageContainer}>
        <View style={homeStyles.mySoftRectangularContainer}>
        <Pressable style={styles.forgotPassword}>
          <Text>User Profile</Text>
        </Pressable>
          <Text style={styles.pageTitle}>User's Company</Text>
          <TouchableOpacity style={[styles.button, { margin: '5px', flex: 1 }]}>
            <text style={styles.loginText}>Invoices</text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { margin: '5px', flex: 1 }]}>
            <text style={styles.loginText}>Accounting</text>
          </TouchableOpacity>
        </View>
      </View>
  );

}

/*-------------------------------------------------------------------------
  Component Specific Styles
-------------------------------------------------------------------------*/
const homeStyles = StyleSheet.create({
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