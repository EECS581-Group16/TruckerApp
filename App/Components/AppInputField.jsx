import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../Styles/GlobalStyles';

function AppInputField({ placeholder, onChangeText }) {
    return (
        <TextInput style={styles.inputField} placeholder={placeholder} onChangeText={onChangeText} />
    );
}


const styles = StyleSheet.create({
    inputField: {
        flex: 1,
        width: "100%",
        height: "100%",
        borderRadius: 10,
        backgroundColor: colors.light,
        paddingLeft: 10,
        paddingRight: 10,
        color: colors.dark,
    },
});

export default AppInputField;