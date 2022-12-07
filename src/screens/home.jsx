import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
return (
    
    <View style={styles.container}>
        <ImageBackground>
            <Image
            source={require('../assets/log_blanck.png')}
            style={{ width: 200, height: 200, marginTop: 0, margin: 30}}
            resizeMode="contain"
            />
        </ImageBackground>

        <TouchableOpacity >
            <Image
            source={require('../assets/btn_nutri.png')}
            style={{ width: 450, height: 80, margin:10 ,alignItems:"center",justifyContent:"center" }}
            resizeMode="contain"
            />
            
        </TouchableOpacity>
        <TouchableOpacity >
            <Image
            source={require('../assets/btn_vida.png')}
            style={{ width: 450, height: 80, margin:10 ,alignItems:"center",justifyContent:"center" }}
            resizeMode="contain"
            />
            
        </TouchableOpacity>
        <TouchableOpacity >
            <Image
            source={require('../assets/btn_aliments.png')}
            style={{ width: 450, height: 80, margin:10 ,alignItems:"center",justifyContent:"center" }}
            resizeMode="contain"
            />
            
        </TouchableOpacity>
        <TouchableOpacity >
            <Image
            source={require('../assets/btn_fisic.png')}
            style={{ width: 450, height: 80, margin:10 ,alignItems:"center",justifyContent:"center" }}
            resizeMode="contain"
            />
            
        </TouchableOpacity>
        
    </View>
    
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#79d70f',
        alignItems: 'center',
        justifyContent:"center"
    },
    title: {
        color: 'white',
        fontSize:50,
    },
});