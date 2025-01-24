import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";



const HomeScreen = () => {

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
    const handleLogout = () => {
        // Aquí puedes limpiar el estado de autenticación si es necesario
        navigation.navigate('Login'); // Redirige al usuario a la pantalla de inicio de sesión
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido al Sistema</Text>
            <Text style={styles.subtitle}>Has iniciado sesión correctamente.</Text>
            <Button title="Cerrar Sesión" onPress={handleLogout} />
        </View>
    );

}

export default HomeScreen;