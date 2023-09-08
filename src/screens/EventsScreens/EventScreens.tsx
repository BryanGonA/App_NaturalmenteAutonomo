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
import AsyncStorage from "@react-native-async-storage/async-storage";
import base64js from 'base64-js';
import { event } from "react-native-reanimated";


export default function EventScreens() {

    const navigation = useNavigation();

    const defaultProfileImage = require('../../assets/images/user.png');

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


    const fetchEvents = async () => {
        try {
            const token = await AsyncStorage.getItem('jwt');
            const response = await axios.get(API_BASE_URL+"/events/published", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    },
                });
                const events = response.data;

                try {
                    const EventsImage = await axios.get(API_BASE_URL+`/events/photo/${events.id}`, {
                        responseType: 'arraybuffer',
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    const byteArray = new Uint8Array(EventsImage.data);
                    const imageBase64 = base64js.fromByteArray(byteArray);

                    events.image = imageBase64;
                    
                    setEvents(events);
                } catch (error) {
                    setEvents(events);
                    
                }
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
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
                    {events.map((events, index) => (
                    <Events
                        key={index}
                        title={events.title}
                        image={events.image}
                        description={events.description}
                        endDate={events.endDate}
                        startDate={events.startDate}
                        time={events.time} 
                        onPressButton={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                    ))}
                    
                    
                </View>
            </ScrollView>
        </View>
    );
}