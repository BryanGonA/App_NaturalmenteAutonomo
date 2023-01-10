import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Alimento({ navigation }) {

/* const [alimentos, setAlimentos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/alimentos')

            .then((response) => response.json())
            .then((json) => setAlimentos(json))
            .catch((error) => console.error(error))
    }, []);*/
    return (
        <View style={styles.container}>

        <TouchableOpacity >
            <Image
            source={require('../.././assets/btn_vida.png')}
            style={{ width: 450, height: 80, margin:1 ,alignItems:"center"}}
            resizeMode="contain"
            />
            
        </TouchableOpacity>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent:"center"
    },
    title: {
        color: 'white',
        fontSize:50,
    },
});