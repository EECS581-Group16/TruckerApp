import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';
import { FlatList } from 'react-native-web';

import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';

//test data to get the page to dynamically output the data.
const testData = [
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
      "Date": "10-30-2022",
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
  },
  {
    "TruckNumber": "4",
    "Driver": "NM",
    "Date": "10-20-2022",
    "TicketNumber": 435,
    "OrderNumber": 111,
    "Hours": 23.5,
    "Tons": 103.43,
    "UnitPrice": 24
},
{
    "TruckNumber": "5",
    "Driver": "OO",
    "Date": "10-20-2022",
    "TicketNumber": 435,
    "OrderNumber": 111,
    "Hours": 23.5,
    "Tons": 103.43,
    "UnitPrice": 24
},
{
    "TruckNumber": "6",
    "Driver": "PP",
    "Date": "10-20-2022",
    "TicketNumber": 435,
    "OrderNumber": 111,
    "Hours": 23.5,
    "Tons": 103.43,
    "UnitPrice": 24
}
];
//This will display every truck and all the data it has
//TODO: refactor so it will only display data under correct truck number.
function TruckAccoutingData({dataIndex}) {
  return (
    <View style={styles.softContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.truckNum}>
          Truck #: {testData[dataIndex].TruckNumber}
        </Text>
        <Text style={styles.driver}>
          Driver: {testData[dataIndex].Driver}
        </Text>
      </View>
      <InvoiceData index={dataIndex}/>
      <InvoiceData index={dataIndex}/>
      <View style={styles.cardFooter}>
        <Text style={styles.truckTotal}>
          Truck Total:
        </Text>
      </View>
    </View>
  );
}
//This will display every data item with the same truck number
function InvoiceData({index}) {
  return (
    <View style={styles.cardBody}>
        <Text>
          Date: {testData[index].Date}
        </Text>
        <Text>
          Ticket #: {testData[index].TicketNumber}
        </Text>
        <Text>
          Order #: {testData[index].OrderNumber}
        </Text>
        <Text>
          Hours: {testData[index].Hours}
        </Text>
        <Text>
          Tons: {testData[index].Tons}
        </Text>
        <Text>
          Unit Price: {testData[index].UnitPrice}
        </Text>
        <Text>
          Total: {testData[index].UnitPrice * testData[index].Tons}
        </Text>
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
  //TODO: fix FlatList so that it will dynmically display every truck...not just hardcoded values.
  return (
    <View style={globalStyles.pageContainer}>
      <View style={styles.outerContainer}>
        <Text style={styles.title}>
          Invoices
        </Text>
        <FlatList 
          data={[
            {dataIndex: 0},
            {dataIndex: 1},
            {dataIndex: 2},
            {dataIndex: 3},
            {dataIndex: 4},
            {dataIndex: 5}
          ]}
          renderItem={({item}) => <TruckAccoutingData dataIndex={item.dataIndex} />} 
        />
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
    width: "95%",
    height: "95%",
    backgroundColor: "#cccccc",
    borderRadius: "10px",
    padding: 10
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