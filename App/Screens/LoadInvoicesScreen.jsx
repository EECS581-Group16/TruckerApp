import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';

import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';
import AppButton from '../Components/AppButton.jsx';
import AppInputField from '../Components/AppInputField.jsx';

/*-------------------------------------------------------------------------
  Home Screen Component
-------------------------------------------------------------------------*/
export default function LoadInvoicesScreen({ navigation }){

  /*-------------------------------------------------------------------------
    Home Screen
  -------------------------------------------------------------------------*/
  return (
      <View style={globalStyles.pageContainer}>
        <View style={styles.outerContainer}>
          <Text style={styles.pageTitle}>
            Load Sheet
          </Text>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Date" onChangeText={() => console.log("Text changed")}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Driver" onChangeText={() => console.log("Text changed")}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Truck #" onChangeText={() => console.log("Text changed")}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Description" onChangeText={() => console.log("Text changed")}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Order #" onChangeText={() => console.log("Text changed")}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Ticket #" onChangeText={() => console.log("Text changed")}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Tons" onChangeText={() => console.log("Text changed")}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Hours" onChangeText={() => console.log("Text changed")}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Unit Price" onChangeText={() => console.log("Text changed")}/>
          </View>
          <AppButton text="my button" />
        </View>
      </View>
  );

}

/*-------------------------------------------------------------------------
  Component Specific Styles
-------------------------------------------------------------------------*/
const styles = StyleSheet.create({
  inputHeader: {
    fontSize: 30,
    height: "100%",
  },
  pageTitle: {
    fontSize: 50,
    fontWeight: "bold"
  },
  softContainer : {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "80%",
    margin: 10,
  },
  outerContainer: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    border: "solid",
    borderRadius: "10px",
    flex: 1,
    width: "80%",
    margin: 10,
    padding: 10,
  }
});