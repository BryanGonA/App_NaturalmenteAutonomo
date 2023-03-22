import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, } from 'react-native';


const logout = require('../../assets/logout.png');

// Icons and Images...
const menu = require('../../assets/menu.png');
const close = require('../../assets/close.png');
const settings = require('../../assets/settings.png'); 
const home = require('../../assets/home.png');
const event = require('../../assets/icons/event.png');

import { HStack } from 'native-base';



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
                <Image source={require('../../assets/images/avatar.png')} style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginTop: 8,
                top: 15,
                }}
                />
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
                {TabButton(currentTab, setCurrentTab, "Eventos", event)}
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
                    top: 10,
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
                    <Image source={require("../../assets/logo/logo_uao.png")} style={{
                            top: 15,
                            resizeMode: 'contain',
                    }}></Image >
                </HStack>
                {/* End hamburger Menu Button, logo and notification button... */}
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
            // Actions Here...
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
        zIndex: -1,
        backgroundColor: '#00C15E',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        
    },


});