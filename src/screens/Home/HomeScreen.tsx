import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SidebarMenu from "../../components/sideBar/SideBar";
import Buttons from "../../components/ButtonsHome/buttonsLineas"
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./HomeStyles";

import AlimenteHome from "../lineasDeAccion/alimente/alimenteHome";
import AutoEnMov from "../lineasDeAccion/autonomosEnMov/autoEnMov";
import CsUaoHome from "../lineasDeAccion/conSentidoUAO/CsUaoHome";
import VidaUaoHome from "../lineasDeAccion/vidaUAO/VidaUaoHome";


import { Pressable, Menu, HamburgerIcon } from "native-base";


export default function Home() {
    
    
    const handleMenuPress = () => {
          // Aquí puedes abrir el menú lateral de la aplicación
    };
    
    const handleNotificationsPress = () => {
          // Aquí puedes abrir la pantalla de notificaciones de la aplicación
    };

    const handleProfilePress = () => {
            // Aquí puedes abrir la pantalla de perfil de la aplicación
    };
    const Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();

    const TabNavigator = () => (
        <Tab.Navigator>
            <Tab.Screen name="Alimente" component={props => <AlimenteHome {...props} />} />
            <Tab.Screen name="AEM" component={props => <AutoEnMov {...props} />} />
            <Tab.Screen name="CSUAO" component={props => <CsUaoHome {...props} />} />
            <Tab.Screen name="VidaUAO" component={props => <VidaUaoHome {...props} />} />
        </Tab.Navigator>
    );

    
return (
    
        <Drawer.Navigator 
            drawerContent={props => <SidebarMenu {...props} />}
            screenOptions={{
                headerTitle: () => {
                    return (
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={handleProfilePress} style={styles.logo}>
                            <Image source={require('../../assets/logo/logo_uao.png')} style={styles.logo} />
                        </TouchableOpacity>
                    </View>
                    );
                },
                headerTitleAlign: 'center',
                headerRight: () => {
                    return (
                    <View style={{ flexDirection: 'row' }}>
                        <Menu shadow={2} w="190" trigger={triggerProps => {
                            return <Pressable accessibilityLabel="More options menu" {...triggerProps} style={styles.NotificationIcon}>
                                    <MaterialIcons name="notifications" type="font-awesome" size={24} color="black" />
                                    </Pressable>;
                            }}>
                                <Menu.Item>Te has inscripto exitosamente</Menu.Item>
                                <Menu.Item>Hay un nuevo evento</Menu.Item>
                                <Menu.Item isDisabled>Ejemplo Bloqueo</Menu.Item>
                                <Menu.Item>Ver más...</Menu.Item>
                            </Menu>
                    </View>
                    );
                },
                headerRightContainerStyle: {
                    marginRight: 10
                },
                headerStyle: {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    backgroundColor: '#FFFFFF',
                    elevation: 1,
                    shadowOpacity: 0.1,
                    shadowColor: '#000000',
                    shadowRadius: 1,
                    shadowOffset: {
                        height: 10,
                        width: 10,
                        
                    },
                    
                },
                
            }}
        >
            <Drawer.Screen 
                name="Home1" 
                component={Buttons}
            />
            <Drawer.Screen
                name="TabNavigator"
                component={TabNavigator}
            />
            
        </Drawer.Navigator>
    );
}



