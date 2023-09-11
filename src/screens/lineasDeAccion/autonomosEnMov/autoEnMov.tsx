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
import API_BASE_URL from '../../../components/config/ApiConfig'

//Images
const event1 = require('../../../assets/events/agricult.jpg');
const event2 = require('../../../assets/events/cafeUAO.jpg');


export default function AlimenteHome() {

    const navigation = useNavigation();

    const handlePressButton = () => {};
    
    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Realiza la solicitud GET a la API de categorías
        axios
            .get(API_BASE_URL+"/categories")
            .then((response) => {
                setCategories(response.data); // Establece las categorías en el estado
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });

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
                <Image source={require('../../../assets/logo/autonomos_en_movimiento.png')} style={styles.image} />
                <Text style={styles.title}>Autónomos en movimiento</Text>
            </View>
            <TouchableOpacity onPress={handlePressButton} style={styles.button}>
                <Text style={styles.buttonText}>Eventos</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.events}>
            <Text style={styles.description}>La actividad física tiene importantes beneficios para la salud del corazón, el cuerpo y la mente. La actividad física reduce los síntomas de depresión y ansiedad. Las personas que son insuficientemente activas tienen un 20% a 30% más de riesgo de contraer enfermedades en comparación con las personas que son suficientemente activas.</Text>
                <Text style={styles.eventsTitle}>Próximos eventos</Text>
                <View style={styles.eventsContainer}>
                    {events
                        .filter((event) =>
                            event.categories.some((category) => category.name === "Autónomos en movimiento")
                        )
                        .map((event, index) => (
                            <Events
                                key={index}
                                eventId={event.id}
                                title={event.title}
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