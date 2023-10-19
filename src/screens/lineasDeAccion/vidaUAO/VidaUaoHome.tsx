import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import Events from "../../../components/Events/eventCard";
import { ScrollView } from "react-native-gesture-handler";
import SidebarMenu from "../../../components/sideBar/SideBar";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import API_BASE_URL from '../../../components/config/ApiConfig'

const logo = require( "../../../assets/logo/log_blanck.png");

export default function vidaUaoHome() {

    const navigation = useNavigation();

    const handlePressButton = () => {
        // ...
    };

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
            <View style={styles.titleBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={30} color="#52575D" style={styles.arrow}/>
                </TouchableOpacity>
                <Image source={logo} style={styles.logos} />
                <Text style={styles.title}>     </Text>
            </View>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo/vida_uao.png')} style={styles.image} />
                <Text style={styles.title}>Vida UAO</Text>
            </View>
            <ScrollView contentContainerStyle={styles.events}>
                <Text style={styles.description}>Una vida saludable significa poder desempeñarse adecuadamente en las actividades diarias, tener energía suficiente y ser la mejor versión de nosotros mismos. Por lo tanto, estos hábitos deben de ir en la misma dirección para poder hacer todo esto posible.</Text>
                <Text style={styles.eventsTitle}>Próximos eventos</Text>
                <View style={styles.eventsContainer}>
                    {events
                        .filter((event) =>
                            event.categories.some((category) => category.name === "Vida UAO")
                        )
                        .map((event, index) => (
                            <Events
                                key={index}
                                title={event.title}
                                eventId={event.id}
                                description={event.description}
                                endDate={format(parseISO(event.eventEnd), "PP", { locale: es })}
                                startDate={format(parseISO(event.eventStart), "PP", { locale: es })}
                                time={format(parseISO(event.eventStart), "h:mm a")}
                            />
                        ))}
                </View>
            </ScrollView>
        </View>
    );
}