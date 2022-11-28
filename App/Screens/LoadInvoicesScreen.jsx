import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';

import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';
import AppButton from '../Components/AppButton.jsx';
import AppInputField from '../Components/AppInputField.jsx';


//TODO: make date useState an actual date variable so it can work with the database
/*-------------------------------------------------------------------------
  Home Screen Component
-------------------------------------------------------------------------*/
export default function LoadInvoicesScreen({ navigation }){

  //this function will submit the input data to the backend to be uploaded to the database
  //TODO: 1.) submit the data - DONE - MXO
  //      2.) error handling/input handling
  const apiURL = 'http://localhost:5000'
  const handleSubmit = async () => {
    await fetch(`${apiURL}/invoices`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: date,
        driver: driver,
        truckNum: truckNum,
        description: description,
        orderNum: orderNum,
        ticketNum: ticketNum,
        tons: tons,
        hours: hours,
        unitPrice: unitPrice
      })
    });

    setDate("");
    setDriver("");
    setTruckNum("");
    setDescription("");
    setOrderNum("");
    setTicketNum("");
    setTons("");
    setHours("");
    setUnitPrice("");
  }

  const [date, setDate] = useState(""); //look at using {varOne: new Data()}
  const [driver, setDriver] = useState("");
  const [truckNum, setTruckNum] = useState("");
  const [description, setDescription] = useState("");
  const [orderNum, setOrderNum] = useState("");
  const [ticketNum, setTicketNum] = useState("");
  const [tons, setTons] = useState(""); //database stores this as an int
  const [hours, setHours] = useState(""); //database stores this as an int
  const [unitPrice, setUnitPrice] = useState(""); //database stores this as an int

  /*-------------------------------------------------------------------------
    Home Screen
  -------------------------------------------------------------------------*/
  return (
      <View style={globalStyles.pageContainer}>
        <View style={styles.outerContainer}>
          <Text style={styles.pageTitle}>
            Load Ticket
          </Text>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Date" onChangeText={(textInputBox) => setDate(textInputBox)} value={date}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Driver" onChangeText={(textInputBox) => setDriver(textInputBox)} value={driver}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Truck #" onChangeText={(textInputBox) => setTruckNum(textInputBox)} value={truckNum}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Description" onChangeText={(textInputBox) => setDescription(textInputBox)} value={description}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Order #" onChangeText={(textInputBox) => setOrderNum(textInputBox)} value={orderNum}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Ticket #" onChangeText={(textInputBox) => setTicketNum(textInputBox)} value={ticketNum}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Tons" onChangeText={(textInputBox) => setTons(textInputBox)} value={tons}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Hours" onChangeText={(textInputBox) => setHours(textInputBox)} value={hours}/>
          </View>
          <View style={styles.softContainer}>
            <AppInputField placeholder="Unit Price" onChangeText={(textInputBox) => setUnitPrice(textInputBox)} value={unitPrice}/>
          </View>
          <AppButton text="Submit" onPress={() => handleSubmit()} />
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