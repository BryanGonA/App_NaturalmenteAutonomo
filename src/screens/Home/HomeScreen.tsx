import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import SidebarMenu from "../../components/sideBar/SideBar";
import Buttons from "../../components/ButtonsHome/buttonsLineas"
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./HomeStyles";

import AlimenteHome from "../lineasDeAccion/alimente/alimenteHome";
import autoEnMov from "../lineasDeAccion/autonomosEnMov/autoEnMov";


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
                        <TouchableOpacity onPress={handleNotificationsPress} style={styles.NotificationIcon}>
                            <MaterialIcons name="notifications" type="font-awesome" size={24} color="black" />
                        </TouchableOpacity>
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
                name="Alimente"
                component={AlimenteHome}
            />
            <Drawer.Screen
                name="AEM"
                component={autoEnMov}
            />

        </Drawer.Navigator>
    );
}



