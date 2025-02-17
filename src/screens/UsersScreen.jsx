import React, { useState } from "react";
import { Alert, Modal, Pressable, TextInput, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TableUsers from "../components/TableUsers";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

const UsersScreen = () => {

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

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');
  
  return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text>Registrar</Text>
                      <View style={ styles.inputView }>

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

                      </View>

                      <View style={ styles.inputView }> 

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
                        
                      </View>

                      <View style={ styles.inputView }>

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

                      </View>

                      <View style={ styles.inputView }>

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

                      </View>

                      <View style={ styles.inputView }>

                        {/* <TextInput
                            style={styles.textInput}
                            placeholder='Ingrese su Rol (1 - 3)'
                            value={rol}
                            onChangeText={setRol}
                        /> */}
                        <Text>Selecciona una opción:</Text>
                        <Picker
                          selectedValue={selectedValue}
                          onValueChange={(itemValue) => setSelectedValue(itemValue)}
                          style={styles.picker}
                        >
                          <Picker.Item label="Opción 1" value="option1" />
                          <Picker.Item label="Opción 2" value="option2" />
                          <Picker.Item label="Opción 3" value="option3" />
                        </Picker>
                        <Text>Seleccionaste: {selectedValue}</Text>

                      </View>

                        {/* <Button title="Register" onPress={handleRegister} /> */}
                        <TouchableOpacity style={styles.buttonForm} onPress={handleRegister}>
                            <Text style={styles.textButton}>Registrar</Text>
                        </TouchableOpacity>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Cerrar</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Registrar Usario</Text>
              </Pressable>
            </SafeAreaView>

            {/* <Text>Users Screen</Text> */}
            <TableUsers />

        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      marginHorizontal: 30,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      width: 800,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    inputView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    textInput: {
      width: '49%',
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
    },
    picker: {
      height: 50,
      width: '100%',
    },
  });

export default UsersScreen;