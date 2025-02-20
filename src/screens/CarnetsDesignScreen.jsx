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
        top: 20,
        height: 90,
        padding: 5,
        zIndex: 50
    },
    logoIposCarnet: {
        height: '100%',
        width: '40%',
    },
    banderaContainerMW: {
        height: 20,
        width: '100%',
        flexDirection: 'column',
    },
    banderaMW: {
        marginTop: '-60px',
        marginLeft: '-20px',
        height: '120px',
        width: '360px',
        position: 'absolute',
        resizeMode: 'stretch',
    },
    gerenciaTarget: {
        zIndex: -1,
        position: 'absolute',
        marginLeft: '-260px',
        top: '-145px',
    },
    centralCarnet: {
        height: '55%',
        width: '100%',
        justifyContent: 'flex-end',
        padding: 5,
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'black',
    },
    imageProfile: {
        height: '60%',
        width: '40%',
        resizeMode: 'contain',
        position: 'absolute',
        top: 5,
        right: 70,
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
        resizeMode: 'contain',
    },
    contTextCarnet: {
        zIndex: -1,
        width: '245px',
        padding: 0,
        right: -24,
    },
    textCarnet: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textCargo: {
        // zIndex: -1,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        padding: 5,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#aaaaaa',
        // right: -21,
    },
    textGer: {
        color: '#ffffff',
        zIndex: 50,
        position: 'absolute',
        transform: 'rotate(90deg)',
        width: 300,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        top: -85,
        left: -175,
    },
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

    const abrevName = (name) => {
        const words = name.split(" ");
        if (words.length > 1) {
            words[1] = words[1].charAt(0) + ".";
        }
        const nameAbreviated = words.join(" ");
        return nameAbreviated;
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
                            <Image style={styles.gerenciaTarget} source={require('../../assets/carnetDesign/CARNET-06.png')} />
                            <Image style={styles.imageProfile} source={require('../../assets/John_doe.jpg')} />
                            {empleado && (

                            <View style={styles.contTextCarnet}>

                                <Text style={styles.textGer} > {empleado.denger} </Text>
                                <Text style={styles.textCarnet} > {abrevName(empleado.nomper)} {abrevName(empleado.apeper)} </Text>
                                <Text style={styles.textCarnet} > {empleado.cedper} </Text>

                                <Text style={styles.textCargo} > {empleado.carantper} </Text>
                            
                            </View>
                            
                            )}

                        </View>
                        <View style={styles.footerCarnet}>
                            {/* {empleado && (
                                <>
                                    <ImageBackground
                                        source={require('../../assets/3-02.png')}
                                        style={styles.imageFooter}Prueba
                                    >

                                    </ImageBackground>
                                </>
                            )} */}

                            <Image style={styles.imageFooter} source={require('../../assets/carnetDesign/CARNET-05.png')} />

                        </View>
                    {/* </View> */}
                </ImageBackground>
        </View>
    )
}

export default CarnetDesignScreen;