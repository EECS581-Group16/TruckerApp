import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Dimensions, Pressable } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const SignIn = () => {
    return(
      <View style={styles.containerOuter}>
        <Text style={styles.head}>Sign In</Text>
        <View style={styles.containerInner}>
          <Text style={styles.head2}>Username</Text>
          <TextInput style={styles.userInput} placeholder=""></TextInput>
          <Text style={styles.head2}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.userInput} placeholder=""></TextInput>
          <Pressable style={styles.forgotPassword}>
            <Text>Forgot password</Text>
          </Pressable>
          <Button color="#4257f5" title="Login"></Button>
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

});


export default SignIn;