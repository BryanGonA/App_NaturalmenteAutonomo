import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./styles";
import Events from "../../../components/Events/eventCard";
import { ScrollView } from "react-native-gesture-handler";
import SidebarMenu from "../../../components/sideBar/SideBar";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";


export default function csUaoHome() {
    const handlePressButton = () => {
        // ...
    };

    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Realiza la solicitud GET a la API de categorías
        axios
            .get("http://172.16.12.24:8080/api/categories")
            .then((response) => {
                setCategories(response.data); // Establece las categorías en el estado
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });

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
                <Image source={require('../../../assets/logo/con_sentido_uao.png')} style={styles.image} />
                <Text style={styles.title}>Con sentido UAO</Text>
            </View>
            <TouchableOpacity onPress={handlePressButton} style={styles.button}>
                <Text style={styles.buttonText}>Eventos</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.events}>
                <Text style={styles.description}>Sentirse bien a nivel psicológico implica estar a gusto contigo mismo y con tu forma de estar en el mundo. El bienestar emocional tiene gran impacto en tu vitalidad y te ayuda a adoptar actitudes positivas y vitales en el día a día.</Text>
                <Text style={styles.eventsTitle}>Próximos eventos</Text>
                <View style={styles.eventsContainer}>
                    {events
                        .filter((event) =>
                            event.categories.some((category) => category.name === "Alimente")
                        )
                        .map((event, index) => (
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