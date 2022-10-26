import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';

import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';

/*-------------------------------------------------------------------------
  Home Screen Component
-------------------------------------------------------------------------*/
export default function AccountingScreen(props){

  /*-------------------------------------------------------------------------
    Home Screen
  -------------------------------------------------------------------------*/
  return (
    <View style={globalStyles.pageContainer}>
      <View style={styles.outerContainer}>
        <Text style={styles.title}>
          Accounting
        </Text>
        <View style={styles.softContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.truckNum}>
              Truck #:
            </Text>
            <Text style={styles.driver}>
              Driver:
            </Text>
          </View>
          <View style={styles.cardBody}>
            <Text>
              Date:
            </Text>
            <Text>
              Ticket #:
            </Text>
            <Text>
              Order #:
            </Text>
            <Text>
              Hours:
            </Text>
            <Text>
              Tons:
            </Text>
            <Text>
              Unit Price:
            </Text>
            <Text>
              Total:
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.truckTotal}>
              Truck Total:
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  cardHeader : {
    width: "90%",
    textAlign: "left",
  },
  cardFooter : {
    width: "90%",
    textAlign: "right",
  },
  outerContainer : {
    width: "80%",
    height: "80%",
  },
  softContainer : {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    border: "solid",
    borderRadius: "10px",
    width: "100%"
  },
  cardBody : {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    border: "solid",
    borderRadius: "10px",
    width: "90%"
  },
  title : {
    textAlign: "left",
    fontSize: 50,
    paddingBottom: 15,
  },
  truckNum : {
    fontSize: 20,
  },
  truckTotal : {
    fontSize: 20,
  },
  driver : {
    fontSize: 20,
  }
});