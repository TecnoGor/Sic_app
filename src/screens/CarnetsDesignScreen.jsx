import React, { useEffect, useState } from "react";
import { Text, TextInput, Button, StyleSheet, View, Image, ImageBackground } from "react-native";
import axios from "axios";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    infoContainer: {
        marginTop: 20,
    },
    containerCarnet: {
        height: '450px',
        width: '300px',
        marginTop: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5
    },
    headerCarnet: {
        flexDirection: 'row-reverse',
        width: '100%',
        height: 90,
        padding: 5,
    },
    logoIposCarnet: {
        height: '100%',
        width: '40%',
    },
    banderaContainerMW: {
        height: 50,
        width: '100%',
        flexDirection: 'column',
    },
    banderaMW: {
        marginTop: '-60px',
        marginLeft: '-40px',
        width: '390px',
        position: 'absolute',
        resizeMode: 'stretch',
    },
    centralCarnet: {
        height: '50%',
        width: '100%',
        padding: 5,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    imageProfile: {
        height: '100%',
        width: '40%',
        resizeMode: 'contain',
    },
    footerCarnet: {
        height: '30%',
        width: '100%',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    imageFooter: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'static',
        resizeMode: 'contain',
    },
    textCarnet: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    }
})

const CarnetDesignScreen = () => {
    const [ced, setCed] = useState('');
    const [empleado, setEmpleado] = useState('');
    const [error, setError] = useState('');

    const buscarEmpleado = async () => {
        try {
            const response = await axios.get(`http://localhost:5001/empleado/${ced}`);
            setEmpleado(response.data);
            setError('');
        } catch (err) {
            setEmpleado(null);
            setError('Empleado no encontrado.');
        }
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingrese la cedula del empleado"
                value={ced}
                onChangeText={setCed}
                keyboardType="numeric"
            />
            <Button title="Buscar" onPress={buscarEmpleado} />
                <ImageBackground
                    source={require('../../assets/carnetDesign/CARNET-01.png')}
                    style={styles.containerCarnet}
                >
                    {/* <View style={styles.containerCarnet}> */}
                        <View style={styles.headerCarnet}>
                            <Image style={styles.logoIposCarnet} source={require('../../assets/carnetDesign/Logos_Ipostel-04.png')} />
                            <Image style={styles.logoIposCarnet} source={require('../../assets/carnetDesign/Logos_Ipostel-03.png')} />
                        </View>
                        <View style={styles.banderaContainerMW} >
                            <Image style={styles.banderaMW} source={require('../../assets/carnetDesign/CARNET-03.png')} />
                        </View>
                        <View style={styles.centralCarnet}>
                            <Image style={styles.imageProfile} source={require('../../assets/John_doe.jpg')} />
                        </View>
                        {/* <View style={}> */}
                            {empleado && (
                                <View style={styles.footerCarnet}>
                                    <ImageBackground
                                        source={require('../../assets/3-02.png')}
                                        style={styles.imageFooter}
                                    >

                                        <Text style={styles.textCarnet} > {empleado.nomper} {empleado.apeper} </Text>
                                        <Text style={styles.textCarnet} > {empleado.cedper} </Text>
                                        <Text style={styles.textCarnet} > {empleado.carantper} </Text>

                                    </ImageBackground>
                                </View>
                            )}
                        {/* </View> */}
                    {/* </View> */}
                </ImageBackground>
        </View>
    )
}

export default CarnetDesignScreen;