import React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import {Text,Image } from '@rneui/base';
import LoginForm from './components/LoginForm'
    const image = {
    uri: '../assets/splash.png', //foto de fondo App_Bienestar\src\assets
    };
    export default function LoginScren ({navigation}) {

        return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.overlay}>
            <View style={styles.logo}>
                <Image
                source={require('../assets/log_blanck.png')}
                style={{ width: 180, height: 180, resizeMode: 'contain' }}
                />
            </View>
            
            <LoginForm nav={navigation}/>
            
            </View>
        </ImageBackground>
        );
    
    }

    const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:"center"
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#79d70f',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    });