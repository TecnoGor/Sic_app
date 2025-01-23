import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = () => {

    const styles = StyleSheet.create({
        title: {
            fontSize: 24,
            textAlign: 'center',
            marginTop: '20%'
        }
    })

    return (

        <View>
            <Text style={styles.title}>Settings Screen</Text>
        </View>

    )

}

export default SettingsScreen;