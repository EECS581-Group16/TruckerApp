import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors } from '../Styles/GlobalStyles';

function AppButton({text, color}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]}>
            <Text style={styles.title}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        flex: 1,
        width: "90%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        margin: "10px",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.white
    },
});

export default AppButton