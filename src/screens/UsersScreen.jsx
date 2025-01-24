import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
        text: {
            fontSize: 20,
            marginBottom: 20,
        },
})

const UsersScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Users Screen</Text>

        </View>
    )
}

export default UsersScreen;