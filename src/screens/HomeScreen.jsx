import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        title: {
            fontSize: 24,
            textAlign: 'center',
            marginTop: '20%'
        }
    })

    return (

        <View>
            <Text style={styles.title}>Inicio</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Stack')}
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    marginTop: "20%",
                    borderRadius: 10,
                    width: "50%",
                    alignSelf: "center"
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >Go to Stack Screen</Text>
            </TouchableOpacity>
        </View>

    )

}

export default HomeScreen;