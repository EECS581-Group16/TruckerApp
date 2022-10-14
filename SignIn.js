import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';

const SignIn = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
      navigation.navigate('HomeScreen');
      setUsername("");
      setPassword("");

    }
  }
  return(
    <View style={styles.container}>
      <View style={styles.containerOuter}>
        <Text style={styles.head}>Sign In</Text>
        <View style={styles.containerInner}>
          <Text style={styles.head2}>Username</Text>
            <TextInput value={username} onChangeText={(userInput) => setUsername(userInput)} style={styles.userInput} placeholder="" onKeyPress={handleKeyDown}></TextInput>
            {usernameError.length > 0 && <Text style={styles.loginError}>{usernameError}</Text>}
          <Text style={styles.head2}>Password</Text>
            <TextInput value={password} onChangeText={(userInput) => setPassword(userInput)} secureTextEntry={true} style={styles.userInput} placeholder="" onKeyPress={handleKeyDown}></TextInput>
            {passwordError.length > 0 && <Text style={styles.loginError}>{passwordError}</Text>}
          <Pressable style={styles.forgotPassword}>
            <Text>Forgot password</Text>
          </Pressable>
          <TouchableOpacity style={styles.loginContainer} onPress={() => validateSignIn()}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>  
    </View>
  )
    
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOuter: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent: 'left',
      margin: '10%',
      width: 'windowWidth',
  },

  containerInner: {
      flex: 1,
      backgroundColor: '#fff',
      border: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
      width: '600px',
      maxHeight: '350px',
      borderRadius: '10px',
  },

  userInput: {
    border: 'solid',
    padding: '4px',
    width: '500px',
    height: '50px',
    borderRadius: '10px',
    margin: '10px',
  },

  head: {
    fontSize: '32px',
    padding: '4px',
  },

  head2: {
    fontSize: '24px',
    alignItems: 'left',
    justifyContent: 'left',
    width: '500px',
    color: '#4257f5',
    fontWeight: 'bold'
  },

  forgotPassword: {
    alignItems: 'left',
    justifyContent: 'left',
    width: '500px',
    marginLeft: '2%'
  }, 
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4257f5',
    width: '100px',
    height: '50px',
    borderRadius: '10px',
  },
  login: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
  },

  loginError: {
    color: 'red',
    fontWeight: 'bold',
  },
});


export default SignIn;