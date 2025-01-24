import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username,
                password,
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
            <Button title="Register" onPress={handleRegister} />
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

export default RegisterScreen;