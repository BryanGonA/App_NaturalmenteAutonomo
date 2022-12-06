import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';
import { Button } from '@rneui/base';
    const image = {
    uri: '../assets/splash.png',
    };

    export default class LandingScreen extends Component {

    render() {
        return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.overlay}>
            <View style={styles.logo}>
                <Image source={require('../assets/log_blanck.png')} style={styles.log} />
            </View>

            <View style={styles.btn}>
                <Button
                buttonStyle={{
                    backgroundColor: 'white',
                    width: 200,
                }}
                titleStyle={{
                    color: '#79d70f',
                }}
                onPress={() => this.props.navigation.navigate('Login')}
                title="Comenzar"
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Terminos y condiciones</Text>
                <Text style={styles.footerText}>Privacidad</Text>
            </View>
            </View>
        </ImageBackground>
        );
    }
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
    },
    btn: {
        flexDirection: 'column',
        height: 150,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        bottom: -50,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        bottom: -50,
    },
    footerText: {
        color: 'white',
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
    log: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        height: 200,
        width: 200,
        borderRadius: 50,
        overflow: 'hidden',
        

    },
});