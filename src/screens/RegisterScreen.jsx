import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
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

    return (
        <View>
            <Text>Register</Text>
            <TextInput 
                placeholder='Ingrese su primer nombre'
                value={firstname}
                onChangeText={setFirstname}
            />
            <TextInput
                placeholder='Ingrese su segundo nombre'
                value={secondname}
                onChangeText={setSecondname}
            />
            <TextInput
                placeholder='Ingrese su Cedula'
                value={ci}
                onChangeText={setCi}
            />
            <TextInput
                placeholder='Ingrese su correo electronico'
                value={mail}
                onChangeText={setMail}
            />
            <TextInput
                placeholder='Ingrese su telefono'
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                placeholder="Ingrese el estatus"
                value={status}
                onChangeText={setStatus}
            />
            <TextInput
                placeholder='Ingrese su Rol (1 - 3)'
                value={rol}
                onChangeText={setRol}
            />
            <Button title="Register" onPress={handleRegister} />
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

export default RegisterScreen;