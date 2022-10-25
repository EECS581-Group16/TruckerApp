import React, {useState} from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Pressable } from 'react-native';
import { styles, colors } from '../Styles/GlobalStyles.jsx';
console.reportErrorsAsExceptions = false;

/*-------------------------------------------------------------------------
  Forgot Password Component
-------------------------------------------------------------------------*/
export default function ForgotPassword({ navigation }){
/*TODO: write simple function to check for a valid usernamethen display a different 
        UI for validation (probably via email), then display reset password UI
*/

const [validatedUsername, setValidatedUsername] = useState(false);

const ValidatingUsername = () => {

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const validUsername = () => {
    if (username === "admin") { //this will eventually run against all username in database to see if there is a match
      setValidatedUsername(true);
    }
    else {
      setUsernameError("Not Valid Username");
    }
  }

  const handleKeyDown = (e) => {
    if(e.nativeEvent.key == "Enter"){
      validUsername();
    }
  }


  return (
    <View style={signInStyles.mySoftRectangularContainer}>
      {usernameError.length > 0 && <Text style={styles.errorText}>{usernameError}</Text>}
      <Text style={[styles.primaryHeader, {justifyContent: "left"}]}>Username *</Text>
      <TextInput value={username} onChangeText={(textInputBox) => setUsername(textInputBox)} style={styles.textInputBox} placeholder="" onKeyPress={handleKeyDown}></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => validUsername()}>
      <Text style={styles.loginText}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const ResetPassword = () => {
  
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [validatedPassword, setValidatedPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validPassword = () => {
    if (newPassword === newPasswordConfirm) { //this will eventually run against pararameters for a password, such as 8 characters in length, number, etc. it will also ensure it is not the old password
      setValidatedPassword(true);
      if (passwordError.length > 0) {
        setPasswordError("");
      }
    }
    else {
      setPasswordError("Passwords do not match!");
    }
  }

  const handleKeyDown = (e) => {
    if(e.nativeEvent.key == "Enter"){
      validPassword();
    }
  }


  return (
    <View style={signInStyles.mySoftRectangularContainer}>
        {passwordError.length > 0 && <Text style={styles.errorText}>{passwordError}</Text>}
        <Text style={[styles.primaryHeader, {justifyContent: "left"}]}>New Password *</Text>
        <TextInput value={newPassword} onChangeText={(textInputBox) => setNewPassword(textInputBox)} style={styles.textInputBox} secureTextEntry={true} placeholder="" onKeyPress={handleKeyDown}></TextInput>
        <Text style={[styles.primaryHeader, {justifyContent: "left"}]}> Confirm New Password *</Text>
        <TextInput value={newPasswordConfirm} onChangeText={(textInputBox) => setNewPasswordConfirm(textInputBox)} style={styles.textInputBox} secureTextEntry={true} placeholder="" onKeyPress={handleKeyDown}></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => validPassword()}>
        <Text style={styles.loginText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
  );
}

  /*-------------------------------------------------------------------------
    Forgot Password Screen
  -------------------------------------------------------------------------*/
  //TODO: create and update styles specific to forgot password...
  return(
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Forgot Password</Text>
        {validatedUsername === false && <ValidatingUsername />}
        {validatedUsername === true && <ResetPassword />}
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