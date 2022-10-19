import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';
import { styles, colors } from '../Styles/GlobalStyles.jsx';

/*-------------------------------------------------------------------------
  Sign In Component
-------------------------------------------------------------------------*/
export default function SignIn({ navigation }){

  /*-------------------------------------------------------------------------
    Constants
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
      console.log("Invalid Username"); //For android and ios Alert.alert("message") will work...still need solution for web, normal web alerts do not work.
      setUsernameError("Invalid Username");
      if (passwordError.length > 0) {
        setPasswordError("");
      }
      setUsername("");
      setPassword("");
    }
    else if (password != "password") {
      console.log("Invalid Password"); //For android and ios Alert.alert("message") will work...still need solution for web, normal web alerts do not work.
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

  /*-------------------------------------------------------------------------
    Sign In Screen
  -------------------------------------------------------------------------*/
  return(
    <View style={styles.pageContainer}>
      <View style={styles.containerStack}>
        <Text style={styles.pageTitle}>Sign In</Text>
        <View style={signInStyles.mySoftRectangularContainer}>
          <Text style={styles.primaryHeader}>Username</Text>
            <TextInput value={username} onChangeText={(textInputBox) => setUsername(textInputBox)} style={styles.textInputBox} placeholder="" onKeyPress={handleKeyDown}></TextInput>
            {usernameError.length > 0 && <Text style={styles.errorText}>{usernameError}</Text>}
          <Text style={styles.primaryHeader}>Password</Text>
            <TextInput value={password} onChangeText={(textInputBox) => setPassword(textInputBox)} secureTextEntry={true} style={styles.textInputBox} placeholder="" onKeyPress={handleKeyDown}></TextInput>
            {passwordError.length > 0 && <Text style={styles.errorText}>{passwordError}</Text>}
          <Pressable style={styles.forgotPassword}>
            <Text>Forgot password</Text>
          </Pressable>
          <TouchableOpacity style={styles.button} onPress={() => validateSignIn()}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
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