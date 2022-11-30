import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';

import { globalStyles, colors } from '../Styles/GlobalStyles.jsx';
import AppInputField from '../Components/AppInputField.jsx';
import AppButton from '../Components/AppButton.jsx';

const {width, height} = Dimensions.get('window');

/*-------------------------------------------------------------------------
  Sign In Component
-------------------------------------------------------------------------*/
export default function SignInScreen({ navigation }){

  /*-------------------------------------------------------------------------
    React States
  -------------------------------------------------------------------------*/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [validation, setValidation] = useState(false);

  /*-------------------------------------------------------------------------
    Methods
  -------------------------------------------------------------------------*/
  const apiURL = 'http://localhost:5000'
  const handleLogin = async () => {
    const response = await fetch(`${apiURL}/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    const validation = await response.json();
    console.log(validation.response);
    setValidation(validation.accepted);
    return validation.accepted;
  }

  const handleKeyDown = (e) => {
    if(e.nativeEvent.key == "Enter"){
      validateSignIn();
    }
  }

  //Temporary -- will eventually validate with usernames and passwords from database server.
  const validateSignIn = () => {
    async function loginHandler() {
      await handleLogin().then((e) => {
        if(e === true || validation) {
          navigation.navigate("HomeScreen");
        }
        else if(e === false) {
          setLoginError("Invalid Credentials");
        }
      });
      setUsername("");
      setPassword("");
    }
    loginHandler();
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
          {loginError.length > 0 && <Text style={globalStyles.errorText}>{loginError}</Text>}
          <AppInputField placeholder="Username" onChangeText={(textInputBox) => {
            setUsername(textInputBox)
            if(loginError.length > 0) {setLoginError("");}
            }} value={username} onKeyPress={handleKeyDown} />
          <AppInputField placeholder="Password" onChangeText={(textInputBox) => {
            setPassword(textInputBox);
            if(loginError.length > 0) {setLoginError("");}
          }} value={password} onKeyPress={handleKeyDown} secureTextEntry={true} />
        <Pressable style={globalStyles.forgotPassword} onPress={() => forgotPassword()}>
          <Text style={{color: colors.primary}}>Forgot password</Text>
        </Pressable>
        <AppButton text="Login" onPress={() => validateSignIn()}/>
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
    justifyContent: 'space-evenly',
    width: width * .8,
    height: height * .5,
    borderRadius: '10px',
    padding: 10,
  },
});