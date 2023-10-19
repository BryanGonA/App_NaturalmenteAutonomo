import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const logo = require( "../../../../assets/logo/log_blanck.png");

const Information = () => {

    const navigation = useNavigation();

    const handleContinue = () => {
        navigation.navigate('ComparteUAO');
    }

    return (
            <View style={styles.container}>
            <View style={styles.titleBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                    name="ios-arrow-back"
                    size={30}
                    color="#52575D"
                    style={styles.arrow}
                />
                </TouchableOpacity>
                <Image source={logo} style={styles.logos} />
                <Text style={styles.title}> </Text>
            </View>
            <View style={styles.container2}>
                    <Text style={styles.title}>Cómo enviar una solicitud de almuerzo</Text>
                    <Text style={styles.subtitle}>
                    Para enviar una solicitud, sigue los siguientes pasos:
                    </Text>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNumber}>1.</Text>
                    <Text style={styles.stepText}>
                        Selecciona los alimentos que deseas solicitar
                    </Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNumber}>2.</Text>
                    <Text style={styles.stepText}>
                        Verifica la lista de los alimentos seleccionados y presiona el botón
                        "Continuar"
                    </Text>
                </View>
                <View>
                    <Text style={styles.note}>Nota:</Text>
                    <Text style={styles.stepText}>
                        Tienes una hora para acercarte al CEA para validar tu solicitud,
                        recuerda que una vez pasado este tiempo tu solicitud será rechazada
                        y tendrás que realizar una nueva solicitud. Recuerda también que las
                        solicitudes serán eliminadas automáticamente a las 2:00 p.m. de cada
                        día.
                    </Text>
                </View>

            </View>
                
            
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                    <Text style={styles.continueButtonText}>Ir a solicitar</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 30,
        marginTop: 100,
        width: '95%',
        height: '50%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 23,
        marginBottom: 20,
        textAlign: 'center'
    },
    note: {
        fontSize: 25,
        marginBottom: 2,
        textAlign: 'justify',
        color: '#FF6B6B',
        fontWeight: 'bold',
        marginTop: 10,
        
    },
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    stepNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 10,
        color: '#FF6B6B'
    },
    stepText: {
        fontSize: 20,
        flex: 1,
        textAlign: 'justify',
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        alignSelf: 'stretch',
        paddingHorizontal: 16,
        paddingTop: 40,
        marginBottom: 10,
    },
    logo: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    },
    logos: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    arrow: {
        width: 30, // Tamaño de la flecha
        height: 30,
    },
    continueButton: {
        backgroundColor: '#4caf50',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        position: 'absolute', 
        bottom: 50,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Information;
