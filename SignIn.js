import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Alert } from 'react-native';
const windowWidth = Dimensions.get('window').width;


const SignIn = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Temporary -- will eventually validate with usernames and passwords from database server.
  const validateSignIn = () => {
    if (username != "admin") {
      setUsername("");
      setPassword("");
      return console.log("Invalid Username");
    }
    else if (password != "password") {
      setPassword("");
      return console.log("Invalid Password");
    }
    else {
      //go to home page
      setUsername("");
      setPassword("");
      return console.log("Success!");
    }
  }

    return(
      <View style={styles.containerOuter}>
        <Text style={styles.head}>Sign In</Text>
        <View style={styles.containerInner}>
          <Text style={styles.head2}>Username</Text>
            <TextInput value={username} onChangeText={(userInput) => setUsername(userInput)} style={styles.userInput} placeholder=""></TextInput>
          <Text style={styles.head2}>Password</Text>
            <TextInput value={password} onChangeText={(userInput) => setPassword(userInput)} secureTextEntry={true} style={styles.userInput} placeholder=""></TextInput>
          <Pressable style={styles.forgotPassword}>
            <Text>Forgot password</Text>
          </Pressable>
          <TouchableOpacity style={styles.loginContainer} onPress={() => validateSignIn()}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
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

});


export default SignIn;