import React, {useState} from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Pressable } from 'react-native';
import { styles, colors } from '../Styles/GlobalStyles.jsx';

/*-------------------------------------------------------------------------
  Forgot Password Component
-------------------------------------------------------------------------*/
export default function ForgotPassword({ navigation }){
/*TODO: write simple function to check for a valid usernamethen display a different 
        UI for validation (probably via email), then display reset password UI
*/
  const [username, setUsername] = useState("");

  const validUsername = () => {
    
  }

  const handleKeyDown = (e) => {
    if(e.nativeEvent.key == "Enter"){
      validUsername();
    }
  }


  /*-------------------------------------------------------------------------
    Forgot Password Screen
  -------------------------------------------------------------------------*/
  //TODO: create and update styles specific to forgot password...
  return(
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Forgot Password</Text>
        <View style={signInStyles.mySoftRectangularContainer}>
        <Text style={[styles.primaryHeader, {justifyContent: "left"}]}>Username *</Text>
          <TextInput value={username} onChangeText={(textInputBox) => setUsername(textInputBox)} style={styles.textInputBox} placeholder="" onKeyPress={handleKeyDown}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => validUsername()}>
          <Text style={styles.loginText}>Forgot Password</Text>
        </TouchableOpacity>
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