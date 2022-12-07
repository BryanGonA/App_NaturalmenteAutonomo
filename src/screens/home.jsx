import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Alimento from '../components/lineas/alimento';
import Fisic from '../components/lineas/fisic';
import Nutrition from '../components/lineas/nutricion';
import Vida from '../components/lineas/vidaArmonia';

export default function HomeScreen({ navigation }) {

/*const [alimentos, setAlimentos] = useState([]);

/*handleClick = (name) => {
    switch (name) {
        case 'ali':
            this.Alimento({showTheThing: true})
            this.Fisic({showTheThing: false})
            this.Vida({showTheThing: false})
            this.Nutrition({showTheThing: false})
            break;
        case 'fis':
            this.Alimento({showTheThing: false})
            this.Fisic({showTheThing: true})
            this.Vida({showTheThing: false})
            this.Nutrition({showTheThing: false})
            break;
        case 'vid':
            this.Alimento({showTheThing: false})
            this.Fisic({showTheThing: false})
            this.Vida({showTheThing: true})
            this.Nutrition({showTheThing: false})
            break;
        case 'ntr':
            this.Alimento({showTheThing: false})
            this.Fisic({showTheThing: false})
            this.Vida({showTheThing: false})
            this.Nutrition({showTheThing: true})
            break;
    }
}*/
return (
    

    <ImageBackground style={styles.image}>
        <View style={styles.container}>
            <View style={styles.overlay}>
                <View style={styles.logo}>
                    
                        <Image 
                        source={require('../assets/log_blanck.png')}
                        style={{ width: 200, height: 200, margin: 30}}
                        resizeMode="contain"
                        />
                        <Nutrition nav={navigation}/>
                        <Vida nav={navigation}/>
                        <Alimento nav={navigation}/>
                        <Fisic nav={navigation}/>
                </View>
            </View>
        </View>
    </ImageBackground>
    
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
    overlay: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#79d70f',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
});