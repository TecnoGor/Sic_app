import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StackScreen = () => {

    const styles = StyleSheet.create({
        title: {
            fontSize: 24,
            textAlign: 'center',
            marginTop: '20%'
        }
    })

    return (

        <View>
            <Text style={styles.title}>Stack Screen</Text>
        </View>

    )

}

export default StackScreen;