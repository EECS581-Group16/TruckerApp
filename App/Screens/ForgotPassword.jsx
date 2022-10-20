import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Pressable } from 'react-native';
import { styles, colors } from '../Styles/GlobalStyles.jsx';

/*-------------------------------------------------------------------------
  Forgot Password Component
-------------------------------------------------------------------------*/
export default function ForgotPassword({ navigation }){

  /*-------------------------------------------------------------------------
    Forgot Password Screen
  -------------------------------------------------------------------------*/
  return(
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Forgot Password</Text>
        <View style={signInStyles.mySoftRectangularContainer}>
        </View>
    </View>
  )
    
}

/*-------------------------------------------------------------------------
  Component Specific Styles
-------------------------------------------------------------------------*/
const signInStyles = StyleSheet.create({
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