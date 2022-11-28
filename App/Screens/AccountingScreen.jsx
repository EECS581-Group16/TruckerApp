import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';
import { FlatList } from 'react-native-web';

import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';

//This will display every invoice and all the data it has
//TODO: refactor so it will only display data under correct truck number.
function TruckAccoutingData({invoice}) {
  return (
    <View style={styles.softContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.truckNum}>
          Truck #: {invoice.truck_number}
        </Text>
        <Text style={styles.driver}>
          Driver: {invoice.driver_id}
        </Text>
      </View>
      <InvoiceData invoice={invoice}/>
      <View style={styles.cardFooter}>
        <Text style={styles.truckTotal}>
          Truck Total:
        </Text>
      </View>
    </View>
  );
}
//This will display date, ticket_number, order, hours, tons, and rate
//TODO: calculate total
function InvoiceData({invoice}) {
  return (
    <View style={styles.cardBody}>
        <Text>
          Date: {invoice.date}
        </Text>
        <Text>
          Ticket #: {invoice.ticket_number}
        </Text>
        <Text>
          Order #: {invoice.order}
        </Text>
        <Text>
          Hours: {invoice.hours}
        </Text>
        <Text>
          Tons: {invoice.tons}
        </Text>
        <Text>
          Unit Price: ${invoice.rate}
        </Text>
        <Text>
          Total: ${(invoice.rate * invoice.tons).toFixed(2)}
        </Text>
      </View>
  );
}

/*-------------------------------------------------------------------------
  Home Screen Component
-------------------------------------------------------------------------*/
export default function AccountingScreen(props){

  const apiURL = 'http://localhost:5000'
  const [invoices, setInvoices] = useState([{}]); //might need to be useState([])

  useEffect(() => {
    //TODO: 1.) make get request to backend - DONE (verfified with react dev tools) - MXO
    //      2.) store data into useState array
    async function fetchInvoices() {
      const response = await fetch(`${apiURL}/invoices`);
      const newInvoices = await response.json();
      setInvoices(newInvoices);
    }
    fetchInvoices();
    
      
  },[])
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
        {invoices.map((invoice) => {
          return(
            <TruckAccoutingData invoice={invoice}/>
          );
        })}
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