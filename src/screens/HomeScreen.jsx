import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = () => {

    const { logout }= useContext(AuthContext);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        subtitle: {
            fontSize: 16,
            marginBottom: 20,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido al Sistema</Text>
            <Text style={styles.subtitle}>Has iniciado sesión correctamente.</Text>
            <Button title="Cerrar Sesión" onPress={logout} />
        </View>
    );

}

export default HomeScreen;