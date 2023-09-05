import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import Events from  "../../components/Events/eventCard"
import { ScrollView } from "react-native-gesture-handler";
import SidebarMenu from "../../components/sideBar/SideBar";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import API_BASE_URL from "../../components/config/ApiConfig";
import styles from "./EventStyles"; 


export default function EventScreens() {

    const navigation = useNavigation();

    const handlePressButton = () => {
        navigation.navigate("Alimente");
    };

    const handlePressBtCSU = () => {
        navigation.navigate("ConSentido");
    };

    const handlePressAEM = () => {
        navigation.navigate("AEM");
    };

    const handlePressBtVU = () => {
        navigation.navigate("Vida");
    };

    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Realiza la solicitud GET a la API de eventos
        axios
            .get(API_BASE_URL+"/events")
            .then((response) => {
                setEvents(response.data); // Establece los eventos en el estado
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo/all.png')} style={styles.image} />
                <Text style={styles.title}>Todos los eventos</Text>
            </View>
            <ScrollView>
                <View style={styles.MenuButtons}>
                    <TouchableOpacity onPress={handlePressButton} style={styles.button}>
                        <Text style={styles.buttonText}>Alimente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePressBtVU} style={styles.button}>
                        <Text style={styles.buttonText}>Vida UAO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePressAEM} style={styles.button}>
                        <Text style={styles.buttonText}>Autónomo en movimiento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePressBtCSU} style={styles.button}>
                        <Text style={styles.buttonText}>Con Sentido UAO</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView contentContainerStyle={styles.events}>
                <View style={styles.eventsContainer}>
                    {events.map((event, index) => (
                        <Events
                            key={index}
                            title={event.title}
                            image={event.image}
                            description={event.description}
                            endDate={format(parseISO(event.eventEnd), "PP", { locale: es })}
                            startDate={format(parseISO(event.eventStart), "PP", { locale: es })}
                            time={format(parseISO(event.eventStart), "h:mm a")}
                            onPressButton={handlePressButton}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}