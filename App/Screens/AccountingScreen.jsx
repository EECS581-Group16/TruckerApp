import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';

import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';

//test data to get the page to dynamically output the data.
const data = [
  {
      "TruckNumber": "1",
      "Driver": "NM",
      "Date": "10-20-2022",
      "TicketNumber": 435,
      "OrderNumber": 111,
      "Hours": 23.5,
      "Tons": 103.43,
      "UnitPrice": 24
  },
  {
      "TruckNumber": "2",
      "Driver": "OO",
      "Date": "10-20-2022",
      "TicketNumber": 435,
      "OrderNumber": 111,
      "Hours": 23.5,
      "Tons": 103.43,
      "UnitPrice": 24
  },
  {
      "TruckNumber": "3",
      "Driver": "PP",
      "Date": "10-20-2022",
      "TicketNumber": 435,
      "OrderNumber": 111,
      "Hours": 23.5,
      "Tons": 103.43,
      "UnitPrice": 24
  }
];

function AccoutingData({dataIndex}) {
  //dataIndex = 0;
  return (
    <View style={styles.softContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.truckNum}>
          Truck #: {data[dataIndex].TruckNumber}
        </Text>
        <Text style={styles.driver}>
          Driver: {data[dataIndex].Driver}
        </Text>
      </View>
      <View style={styles.cardBody}>
        <Text>
          Date: {data[dataIndex].Date}
        </Text>
        <Text>
          Ticket #: {data[dataIndex].TicketNumber}
        </Text>
        <Text>
          Order #: {data[dataIndex].OrderNumber}
        </Text>
        <Text>
          Hours: {data[dataIndex].Hours}
        </Text>
        <Text>
          Tons: {data[dataIndex].Tons}
        </Text>
        <Text>
          Unit Price: {data[dataIndex].UnitPrice}
        </Text>
        <Text>
          Total: {data[dataIndex].UnitPrice * data[dataIndex].Tons}
        </Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.truckTotal}>
          Truck Total:
        </Text>
      </View>
    </View>
  );
}

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
          Invoices
        </Text>
        <AccoutingData dataIndex={0}/>
        <AccoutingData dataIndex={1}/>
        <AccoutingData dataIndex={2}/>
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