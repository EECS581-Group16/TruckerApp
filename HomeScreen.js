import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Pressable, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>This is the HomeScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;