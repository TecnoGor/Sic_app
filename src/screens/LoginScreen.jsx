import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });
            if (response.data.message === 'Login successful') {
                setIsAuthenticated(true); // Actualiza el estado de autenticación
            }
        } catch (error) {
            Alert.alert('Error', error.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <View>
            <Text>Login</Text>
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
            <Button title="Login" onPress={handleLogin} />
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    );
};

export default LoginScreen;