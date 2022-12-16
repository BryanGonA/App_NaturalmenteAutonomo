import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from './alimente/Alimente_home';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function Alimento({ navigation }) {

    navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress= {() => {navigation.navigate('Alimente')}}>   
                <Image name = "Nutrition"
                source={require('../.././assets/btn_aliments.png')}
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
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent:"center"
    },
    title: {
        color: 'white',
        fontSize:50,
    },
});
