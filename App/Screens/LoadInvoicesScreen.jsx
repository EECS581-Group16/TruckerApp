import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';

import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';
import AppButton from '../Components/AppButton.jsx';

/*-------------------------------------------------------------------------
  Home Screen Component
-------------------------------------------------------------------------*/
export default function LoadInvoicesScreen({ navigation }){

  /*-------------------------------------------------------------------------
    Home Screen
  -------------------------------------------------------------------------*/
  return (
      <View style={globalStyles.pageContainer}>
        <View style={styles.softContainer}>
          <Text style={styles.pageTitle}>
            Load Sheet
          </Text>
          <View style={styles.softContainer}>
            <Text style={styles.inputHeader}>
              Date:
            </Text>
          </View>
          <View style={styles.softContainer}>
            <Text style={styles.inputHeader}>
              Driver:
            </Text>
          </View>
          <View style={styles.softContainer}>
            <Text style={styles.inputHeader}>
              Truck #:
            </Text>
          </View>
          <View style={styles.softContainer}>
            <Text style={styles.inputHeader}>
              Description:
            </Text>
          </View>
          <View style={styles.softContainer}>
            <Text style={styles.inputHeader}>
              Order #:
            </Text>
          </View>
          <View style={styles.softContainer}>
            <Text style={styles.inputHeader}>
              Ticket #:
            </Text>
          </View>
          <View style={styles.softContainer}>
            <Text style={styles.inputHeader}>
              Tons:
            </Text>
          </View>
          <View style={styles.softContainer}>
            <Text style={styles.inputHeader}>
              Hours:
            </Text>
          </View>
          <View style={styles.softContainer}>
            <Text style={styles.inputHeader}>
              Unit Price:
            </Text>
          </View>
          <AppButton text="my button"/>
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
    border: "solid",
    borderRadius: "10px",
    flex: 1,
    width: "80%",
    marginBottom: 10
  },
});