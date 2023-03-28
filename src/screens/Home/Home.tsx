import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppBar from "../../components/AppBar/AppBar1";
import Buttons from "../../components/ButtonsHome/buttonsLineas"
//import Photo from "../../assets/images/avatar.png";
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./HomeStyles";




export default function Home() {
    
    const navigation = useNavigation();
    
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
            drawerContent={props => <AppBar {...props} />}
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
                    borderBottomLeftRadius: 35,
                    borderBottomRightRadius: 35,
                    backgroundColor: '#F5FCFF',
                },
                

            }}
        >
            <Drawer.Screen 
                name="Home" 
                component={Buttons}
                
                />
        </Drawer.Navigator>
    );
}



