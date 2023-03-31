import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {Text,Image } from '@rneui/base';
import LoginForm from '../components/Login/LoginFormm';
    
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    export default function LoginScren ({navigation}) {

        return (
        <ImageBackground source={require('../assets/backg_white.jpg')} style={styles.image}>
            <View style={styles.overlay}>
                
            
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
        zIndex:-1,
        resizeMode: 'cover',
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
    },
    overlay: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'transparent',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    });