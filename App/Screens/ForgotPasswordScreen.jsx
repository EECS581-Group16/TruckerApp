import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Pressable } from 'react-native';
import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';

/*-------------------------------------------------------------------------
  Forgot Password Component
-------------------------------------------------------------------------*/
export default function ForgotPasswordScreen({ navigation }){

  /*-------------------------------------------------------------------------
    Forgot Password Screen
  -------------------------------------------------------------------------*/
  return(
    <View style={globalStyles.pageContainer}>
        <Text style={globalStyles.pageTitle}>Forgot Password</Text>
        <View style={styles.mySoftRectangularContainer}>
        </View>
    </View>
  )
    
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