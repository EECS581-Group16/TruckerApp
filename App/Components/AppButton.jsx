import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors } from '../Styles/GlobalStyles';

function AppButton({text, color = "primary", onPress = (() => console.log("Button handle not set"))}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
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
        width: "100%",
        height: "100%",
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