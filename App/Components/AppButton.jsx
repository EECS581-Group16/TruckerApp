import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors } from '../Styles/GlobalStyles';

function AppButton({text, color = "primary", width, onPress = (() => console.log("Button handle not set"))}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color], width: width}]} onPress={onPress}>
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
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        maxHeight: 75,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.white
    },
});

export default AppButton