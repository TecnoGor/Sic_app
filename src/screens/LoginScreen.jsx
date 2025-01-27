import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });

           
            if (response.data.token) {
                login(response.data.token);
            }
        } catch (error) {
            Alert.alert('Error', error.response?.data?.error || 'An error occurred');
        }
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'grey',
        },
        loginContainer: {
            width: '30%',
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 9,
            alignSelf: 'center',
        },
        textInput: {
            width: '80%',
            fontSize: 20,
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'gray',
            marginVertical: 15,
        },
        textPrimary: {
            flexShrink: 1,
            fontFamily: 'Arial',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
        },
        textButton: {
            color: '#FFFFFF', // Color del texto
            fontSize: 16,
            fontWeight: 'bold',
        },
        buttonForm: {
            backgroundColor: '#007BFF', // Color de fondo
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8, // Bordes redondeados
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3, // Sombra en Android
            shadowColor: '#000', // Sombra en iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.textPrimary}>Sistema Integral de Carnetización Venezolano</Text>
                <TextInput
                    placeholder="Nombre de Usuario"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.textInput}
                />
                {/* <Button title="Iniciar Sesion" style={styles.buttonForm} onPress={handleLogin} /> */}
                <TouchableOpacity style={styles.buttonForm} onPress={handleLogin}>
                    <Text style={styles.textButton}>Iniciar Sesion</Text>
                </TouchableOpacity>
                {/* <Button
                    title="Ir al Registro"
                    style={styles.buttonForm}
                    onPress={() => navigation.navigate('Register')}
                /> */}
            </View>
        </View>
    );
};

export default LoginScreen;