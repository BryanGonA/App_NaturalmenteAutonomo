import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from '../assets/profile.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio, { inicio } from '../components/lineas/Inicio';
// Tab ICons...

import home from '../assets/home.png';
import search from '../assets/search.png';
import notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';
// Menu
import menu from '../assets/menu.png';
import close from '../assets/close.png';

// Photo
import photo from '../assets/photo.jpg';
import logo from "../assets/log.png";
import { HStack } from 'native-base';
import avatar from '../assets/avatar.png';
import { Tab } from '@rneui/base';

const TopBar = createBottomTabNavigator();


export default function Home3() {
    const [currentTab, setCurrentTab] = useState("Home");

    // To get the curretn Status of menu ...
    const [showMenu, setShowMenu] = useState(false);


    // Animated Properties...

    const offsetValue = useRef(new Animated.Value(0)).current;
    // Scale Intially must be One...
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    

    return (
        <SafeAreaView style={styles.container}>

        <View style={{ justifyContent: 'flex-start', padding: 15 , top:15}}>
            <Image source={avatar} style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
            top: 15,
            }}></Image>

            <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20
            }}>Karla Gonzalez</Text>

            <TouchableOpacity>
            <Text style={{
                marginTop: 6,
                color: 'white'
            }}>Perfil</Text>
            </TouchableOpacity>

            <View style={{ flexGrow: 1, marginTop: 50 }}>
            {
                // Tab Bar Buttons....
            }

            {TabButton(currentTab, setCurrentTab, "Inicio", home)}
            {TabButton(currentTab, setCurrentTab, "Buscar", search)}
            {TabButton(currentTab, setCurrentTab, "Notificaciones", notifications)}
            {TabButton(currentTab, setCurrentTab, "Ajustes", settings)}

            </View>

            <View>
            {TabButton(currentTab, setCurrentTab, "Cerrar Sesión", logout)}
            </View>

        </View>

        {
            // Over lay View...
        }

        <Animated.View style={{
            flexGrow: 1,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: showMenu ? 15 : 0,
            // Transforming View...
            transform: [
            { scale: scaleValue },
            { translateX: offsetValue }
            ]
        }}>

            {
            // Menu Button...
            }
            
            <Animated.View style={{
            transform: [{
                translateY: closeButtonOffset
            }]
            }}>
                {
                // hamburger Menu Button, logo and notification button... 
                }
                <HStack  space={3} justifyContent="space-between"
                    style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    top: 15,
                    }}>
                    <TouchableOpacity onPress={() => {
                        // Do Actions Here....
                        // Scaling the view...
                        Animated.timing(scaleValue, {
                        toValue: showMenu ? 1 : 0.88,
                        duration: 300,
                        useNativeDriver: true
                        })
                        .start()
                        Animated.timing(offsetValue, {
                        // YOur Random Value...
                        toValue: showMenu ? 0 : 230,
                        duration: 300,
                        useNativeDriver: true
                        })
                        .start()
                        Animated.timing(closeButtonOffset, {
                        // YOur Random Value...
                        toValue: !showMenu ? -30 : 0,
                        duration: 300,
                        useNativeDriver: true
                        })
                        .start()
                        setShowMenu(!showMenu);
                    }}>
                        <Image source={showMenu ? close : menu} style={{
                        width: 20,
                        height: 20,
                        tintColor: 'black',
                        marginTop: 30,
                        }}></Image>
                    </TouchableOpacity>
                    <Image source={logo} style={{
                            top: 15,
                            resizeMode: 'contain',
                    }}></Image>
                    <TouchableOpacity>
                        <Image source={notifications} style={{
                        width: 20,
                        height: 20,
                        marginTop: 30,
                        }}></Image>
                    </TouchableOpacity>
                </HStack>
                {
                // End hamburger Menu Button, logo and notification button... 
                }
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    top: 70,
                }}>
                    
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>Bienvenido/a, NAME</Text>
                    

                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    top: 70,
                    marginTop: 10,
                }}>
                    
                    <Text style={{
                        fontSize: 15,
                        color: 'black',
                        textAlign: 'justify',
                    }}>Nuestro objetivo es fomentar la cultura del autocuidado y la salud integral, encaminada 
                    a la Promoción de la Salud(PS)física, mental y social de los miembros de la comunidad 
                    educativa y al reconocimiento del campus como un entorno saludable .</Text>
                    
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    top: 10,
                }}>
                    
                    <Inicio />

                </View>
            </Animated.View>
            
            
            
            

        </Animated.View>

        

        </SafeAreaView>
    );
    }

    // For multiple Buttons...
    const TabButton = (currentTab, setCurrentTab, title, image) => {
    return (

        <TouchableOpacity onPress={() => {
        if (title == "Cerrar Sesión") {
            // Do your Stuff...
        } else {
            setCurrentTab(title)
        }
        }}>
        <View style={{
            flexDirection: "row",
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: currentTab == title ? 'white' : 'transparent',
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            marginTop: 15
        }}>
            
            <Image source={image} style={{
            width: 25, height: 25,
            tintColor: currentTab == title ? "#00C15E" : "white"
            }}></Image>

            <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "#00C15E" : "white"
            }}>{title}</Text>

        </View>
        </TouchableOpacity>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00C15E',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});