import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
} from 'react-native';
import { Button } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';
    
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    export default class LandingScreen extends Component {

    render() {
        return (
            <ImageBackground source={require('../assets/backg_white.jpg')} style={styles.image}>
                <View style={styles.overlay}>
                    <View style={styles.btn}>
                        <Button
                        buttonStyle={{
                            backgroundColor: '#35B67F',
                            width: 200,
                            borderRadius: 20,
                            height: 40,
                            marginTop: 420,
                            
                        }}
                        titleStyle={{
                            color: 'white',
                            fontWeight: 'normal',
                            fontSize: 14,
                        }}
                        onPress={() => this.props.navigation.navigate('Login')}
                        title="Comenzar"
                        
                        />
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
        
        zIndex:-1,
        resizeMode: 'cover',
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
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
        backgroundColor: 'transparent',
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
        
    },
});