import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../components/lineas/Inicio';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    
} from 'react-native-popup-menu';


// Tab ICons...
import home from '../assets/home.png';
import search from '../assets/search.png';
import notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';

// Icons and Images...
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import logo from "../assets/logo/log.png";
import { HStack } from 'native-base';
import avatar from '../assets/images/avatar.png';

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

    //  Dropdown Menu...
    function DropdownMenu() {
        return (
            <Dropdown>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
    
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
                    <Image source={logo} style={{
                            top: 15,
                            resizeMode: 'contain',
                    }}></Image >
                        <Menu style={
                            {
                            backgroundColor: 'transparent',
                            
                            }}>
                            <MenuTrigger>
                                <Image source={notifications} style={{
                                width: 20,
                                height: 20,
                                top: 15,
                                }}></Image>
                            </MenuTrigger>   
                            <MenuOptions style={
                                {
                                backgroundColor: 'white',
                                borderRadius: 10,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.8,
                                shadowRadius: 2,  
                                elevation: 5,
                                }}>
                                <ScrollView style={{ maxHeight: 140 }}>
                                    <MenuOption onSelect={() => alert(`Notification 1`)} text='Notification 1' />
                                    <MenuOption onSelect={() => alert(`Notification 2`)} >
                                        <Text>Notification 2</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert(`Notification 3`)} text='Notification 3' />
                                    <MenuOption onSelect={() => alert(`Notification 4`)} text='Notification 4' />
                                    <MenuOption onSelect={() => alert(`Notification 5`)} text='Notification 5' />
                                    
                                    <MenuOption onSelect={() => alert(`Ver todas`)} style={
                                    {
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        
                                    }}>
                                        <Text style={{color: 'blue',}}>Ver más</Text>
                                    </MenuOption>
                                </ScrollView>
                            </MenuOptions>
                        </Menu>
                    
                    {
                    /*<TouchableOpacity onPress={DropdownMenu}>
                        <Image source={notifications} style={{
                        width: 20,
                        height: 20,
                        marginTop: 30,
                        }}></Image>
                    </TouchableOpacity>*/
                    }

                </HStack>
                {
                // End hamburger Menu Button, logo and notification button... 
                }

                
                {
                // Welcome Text and Name user
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
                        color: '#009870',
                    }}>Bienvenido/a, Nombre</Text>
                    

                </View>

                {
                // END Welcome Text and Name user
                }


                {
                // Description Text 
                }
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    top: 70,
                    marginTop: 10,
                }}>
                    
                    <Text style={{
                        fontSize: 15,
                        color: 'gray',
                        textAlign: "justify",
                        marginLeft: 20,
                        marginRight: 20,
                        
                    }}>Nuestro objetivo es fomentar la cultura del autocuidado y la salud integral, encaminada 
                    a la Promoción de la Salud (PS) física, mental y social de los miembros de la comunidad 
                    educativa y al reconocimiento del campus como un entorno saludable.</Text>
                    
                </View>

                {
                // END Description Text 
                }

                {
                // Components of the home
                }

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    top: 10,
                }}>
                    
                    <Inicio />

                </View>

                {
                // END Components of the home
                }


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