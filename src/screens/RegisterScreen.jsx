import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
    const [firstname, setFirstname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [ci, setCi] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [rol, setRol] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', {
                firstname,
                secondname,
                ci,
                mail,
                phone,
                username,
                password,
                status,
                rol
            });
            Alert.alert('Success', 'User registered successfully');
            navigation.navigate('Login');
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


                <Text>Register</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Ingrese su primer nombre'
                    value={firstname}
                    onChangeText={setFirstname}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Ingrese su segundo nombre'
                    value={secondname}
                    onChangeText={setSecondname}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Ingrese su Cedula'
                    value={ci}
                    onChangeText={setCi}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Ingrese su correo electronico'
                    value={mail}
                    onChangeText={setMail}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Ingrese su telefono'
                    value={phone}
                    onChangeText={setPhone}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese el estatus"
                    value={status}
                    onChangeText={setStatus}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Ingrese su Rol (1 - 3)'
                    value={rol}
                    onChangeText={setRol}
                />
                {/* <Button title="Register" onPress={handleRegister} /> */}
                <TouchableOpacity style={styles.buttonForm} onPress={handleRegister}>
                    <Text style={styles.textButton}>Registrar</Text>
                </TouchableOpacity>
                {/* <Button
                    title="Go to Login"
                    onPress={() => navigation.navigate('Login')}
                /> */}

            </View>
        </View>
    );
};

export default RegisterScreen;