import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const styles = StyleSheet.create({
    containerCarnet: {
        height: '450px',
        width: '300px',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5
    },
    headerCarnet: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        padding: 5,
    },
    logoIposCarnet: {
        height: '100%',
        width: '50%',
        resizeMode: 'contain'
    },
    centralCarnet: {
        height: '60%',
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
        height: '20%',
        width: '100%',
        padding: 5,
    }
})

const CarnetDesignScreen = () => {
    return(
        <View style={styles.containerCarnet}>
            <View style={styles.headerCarnet}>
                <Image style={styles.logoIposCarnet} source={require('../../assets/ipostel.png')} />
                <Image style={styles.logoIposCarnet} source={require('../../assets/logo-gmtv-150.png')} />
            </View>
            <View style={styles.centralCarnet}>
                <Image style={styles.imageProfile} source={require('../../assets/John_doe.jpg')} />
            </View>
            <View style={styles.footerCarnet}>
                <Text>Carne de Carnet</Text>
            </View>
        </View>
    )
}

export default CarnetDesignScreen;