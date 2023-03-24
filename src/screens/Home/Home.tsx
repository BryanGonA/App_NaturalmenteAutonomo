import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppBar from "../../components/AppBar/AppBar";
import Buttons from "../ButtonsHome/buttonsLineas"
//import Photo from "../../assets/images/avatar.png";


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


    return (
        <View style={styles.container}>
            <View style={styles.appBarContainer}>
                <AppBar
                    onMenuPress={handleMenuPress}
                    onNotificationsPress={handleNotificationsPress}
                    onProfilePress={handleProfilePress}
                />
            </View>
            <View style={styles.content}>
                <Buttons navigation={navigation} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    appBarContainer: {
        height: "100%",
        zIndex: 1,
        alignContent: "flex-start",
        alignSelf: "flex-start",

    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        position: "absolute",
        
    },

});
