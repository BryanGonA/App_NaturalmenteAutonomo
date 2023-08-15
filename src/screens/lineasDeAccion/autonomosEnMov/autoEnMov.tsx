import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios"; // Importa axios
import styles from "./aemStyles";
import Events from "../../../components/Events/eventCard";
import { ScrollView } from "react-native-gesture-handler";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";


//Images
const event1 = require('../../../assets/events/agricult.jpg');
const event2 = require('../../../assets/events/cafeUAO.jpg');


export default function AlimenteHome() {

    const navigation = useNavigation();

    const handlePressButton = () => {};
    
        const [events, setEvents] = useState([]);

        useEffect(() => {
            // Realiza la solicitud GET a la API de eventos
            axios
            .get("http://172.16.12.24:8080/api/events")
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
                <Image source={require('../../../assets/logo/autonomos_en_movimiento.png')} style={styles.image} />
                <Text style={styles.title}>Autónomos en movimiento</Text>
            </View>
            <TouchableOpacity onPress={handlePressButton} style={styles.button}>
                <Text style={styles.buttonText}>Eventos</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.events}>
            <Text style={styles.description}>La Actividad física .............................</Text>
                <Text style={styles.eventsTitle}>Próximos eventos</Text>
                <View style={styles.eventsContainer}>
                    {events.map((event, index) => (
                        <Events
                            key={index}
                            title={event.title}
                            image={event.image}
                            description={event.description}
                            endDate={format(parseISO(event.eventEnd), "PP", { locale: es })} // Formatea la fecha
                            startDate={format(parseISO(event.eventStart), "PP", { locale: es })} // Formatea la fecha
                            time={format(parseISO(event.eventStart), "h:mm a")} // Formatea la hora
                            onPressButton={handlePressButton}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}