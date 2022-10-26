import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';
import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';

/*-------------------------------------------------------------------------
  Sign In Component
-------------------------------------------------------------------------*/
export default function SignInScreen({ navigation }){

  /*-------------------------------------------------------------------------
    React States
  -------------------------------------------------------------------------*/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  /*-------------------------------------------------------------------------
    Methods
  -------------------------------------------------------------------------*/
  const handleKeyDown = (e) => {
    if(e.nativeEvent.key == "Enter"){
      validateSignIn();
    }
  }

  //Temporary -- will eventually validate with usernames and passwords from database server.
  const validateSignIn = () => {
    if (username != "admin") {
      console.log("Invalid Username"); 
      setUsernameError("Invalid Username");
      if (passwordError.length > 0) {
        setPasswordError("");
      }
      setUsername("");
      setPassword("");
    }
    else if (password != "password") {
      console.log("Invalid Password"); 
      if (usernameError.length > 0) {
        setUsernameError("");
      }
      setPasswordError("Invalid Password");
      setPassword("");
    }
    else {
      //go to home page
      console.log("Success!");
      navigation.navigate("HomeScreen");
      setUsername("");
      setPassword("");

    }
  }

  const forgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  }

  /*-------------------------------------------------------------------------
    Sign In Screen
  -------------------------------------------------------------------------*/
  return(
    <View style={globalStyles.pageContainer}>
      <Text style={globalStyles.pageTitle}>Sign In</Text>
      <View style={styles.mySoftRectangularContainer}>
        <Text style={[globalStyles.primaryHeader, {justifyContent: "left"}]}>Username</Text>
          <TextInput value={username} onChangeText={(textInputBox) => setUsername(textInputBox)} style={globalStyles.textInputBox} placeholder="" onKeyPress={handleKeyDown}></TextInput>
          {usernameError.length > 0 && <Text style={globalStyles.errorText}>{usernameError}</Text>}
        <Text style={globalStyles.primaryHeader}>Password</Text>
          <TextInput value={password} onChangeText={(textInputBox) => setPassword(textInputBox)} secureTextEntry={true} style={globalStyles.textInputBox} placeholder="" onKeyPress={handleKeyDown}></TextInput>
          {passwordError.length > 0 && <Text style={globalStyles.errorText}>{passwordError}</Text>}
        <Pressable style={globalStyles.forgotPassword} onPress={() => forgotPassword()}>
          <Text>Forgot password</Text>
        </Pressable>
        <TouchableOpacity style={globalStyles.button} onPress={() => validateSignIn()}>
          <Text style={globalStyles.loginText}>Login</Text>
        </TouchableOpacity>
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