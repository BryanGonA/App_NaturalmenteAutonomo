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
            <ImageBackground source={require('../assets/backg.png')} style={styles.image}>
                <View style={styles.overlay}>
                    <View style={styles.logo}>
                        <Image source={require('../assets/log_blanck.png')} style={styles.log} />
                    </View>
                <View style={styles.btn}>
                    <Button
                    buttonStyle={{
                        backgroundColor: '#202b18',
                        width: 200,
                        borderRadius: 20,
                        height: 40,
                        
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
    ".cssbuttons-io-button": {
        background: "#A370F0",
        color: "white",
        fontFamily: "inherit",
        padding: "0.35em",
        paddingLeft: "1.2em",
        fontSize: "17px",
        fontWeight: 500,
        borderRadius: "0.9em",
        border: "none",
        letterSpacing: "0.05em",
        display: "flex",
        alignItems: "center",
        boxShadow: "inset 0 0 1.6em -0.6em #714da6",
        overflow: "hidden",
        position: "relative",
        height: "2.8em",
        paddingRight: "3.3em"
    },
    ".cssbuttons-io-button .icon": {
        background: "white",
        marginLeft: "1em",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "2.2em",
        width: "2.2em",
        borderRadius: "0.7em",
        boxShadow: "0.1em 0.1em 0.6em 0.2em #7b52b9",
        right: "0.3em",
        transition: "all 0.3s"
    },
    ".cssbuttons-io-button:hover .icon": { width: "calc(100% - 0.6em)" },
    ".cssbuttons-io-button .icon svg": {
        width: "1.1em",
        transition: "transform 0.3s",
        color: "#7b52b9"
    },
    ".cssbuttons-io-button:hover .icon svg": { transform: "translateX(0.1em)" },
    ".cssbuttons-io-button:active .icon": { transform: "scale(0.95)" }
});