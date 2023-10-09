import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    LinearGradient,
} from 'react-native';
import { Button } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';
    
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    export default class LandingScreen extends Component {

    render() {
        return (
            
                <View style={styles.container}>
                    
                    <Image source={require('../assets/logo/log_blanck.png')} style={styles.log} />
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
            
        );
    }
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
    },
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
        marginTop: '50%',
    
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        bottom: -50,
    },
    footerText: {
        color: 'white',
        
    },
    log: {
        position: 'absolute',
        resizeMode: 'contain',
        borderRadius: 50,
        width:'50%',
        height:'50%',
        alignSelf: 'center',
        top: '15%',
        
    },
});