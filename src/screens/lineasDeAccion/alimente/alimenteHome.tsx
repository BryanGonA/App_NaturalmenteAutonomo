import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./alimenteStyles";
import Events from "../../../components/Events/eventCard";
import { ScrollView } from "react-native-gesture-handler";
import SidebarMenu from "../../../components/sideBar/SideBar";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import API_BASE_URL from '../../../components/config/ApiConfig'


//Images
const event1 = require('../../../assets/events/agricult.jpg');
const event2 = require('../../../assets/events/cafeUAO.jpg');
const logo = require( "../../../assets/logo/log_blanck.png");

export default function AlimenteHome() {

    const navigation = useNavigation();


    const handlePressButton = () => {
        navigation.navigate("Alimente");
    };

    const handlePressBtComparte = () => {
        navigation.navigate("info");
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

        // Solitud get para comprobar si el usuario está inscrito en el evento
        
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
                <Image source={require('../../../assets/logo/Alimente.png')} style={styles.image} />
                <Text style={styles.title}>Alimente</Text>
            </View>
            <View style={styles.MenuButtons}>
                <TouchableOpacity onPress={handlePressButton} style={styles.button}>
                    <Text style={styles.buttonText}>Eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressBtComparte} style={styles.button}>
                    <Text style={styles.buttonText}>Comparte UAO</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.events}>
                <Text style={styles.description}>Una alimentación saludable consiste en ingerir una variedad de alimentos que te brinden los nutrientes que necesitas para mantenerte sana, sentirte bien y tener energía. Estos nutrientes incluyen las proteínas, los carbohidratos, las grasas, el agua, las vitaminas y los minerales. La nutrición es importante para todos.</Text>
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
                                eventId={event.id}
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

