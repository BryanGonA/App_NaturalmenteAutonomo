import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import API_BASE_URL from "../../components/config/ApiConfig";
import { Text, AlertDialog, Button, Box, Center } from 'native-base';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import base64js from 'base64-js';

import eventCardStyles from './eventCardStyles';

export interface EventCardProps {
    title: string;
    image: string;
    eventId: number;
    description: string;
    endDate: string;
    startDate: string;
    time: string;
    onPressButton: () => void;
}

export default function EventCard({ title, eventId, description, time, startDate, endDate, onPressButton }: EventCardProps) {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const defaultProfileImage = require('../../assets/images/user.png');

    const [eventDetails, setEventDetails] = useState({
        profileImage: defaultProfileImage, // Imagen de perfil predeterminada
    });

    // Función para obtener la imagen del evento
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

    

    const handlePressButton = () => {
        setIsOpen(true);
    };

    const handleConfirm = () => {
        setIsSubscribed(!isSubscribed);
        onPressButton();
        setIsOpen(false);
    };

    const buttonText = isSubscribed ? 'Cancelar' : 'Inscribirse';

    const TextDialog = isSubscribed ? 'Cancelar la inscripción' : 'Inscribirse';

    const buttonStyle = {
        ...eventCardStyles.button,
        backgroundColor: isSubscribed ? 'red' : '#007AFF',
    };

    const confirmButtonColorScheme = isSubscribed ? 'danger' : 'green';

    const cancelRef = React.useRef(null);

    return (
        <View style={eventCardStyles.container}>
            {events.map((event, index) => (
                <View key={index}>
                    <Image style={eventCardStyles.image} source={{ uri: event.image }} />
                    <Text style={eventCardStyles.title}>{event.title}</Text>
                    <Text style={eventCardStyles.description}>{event.description}</Text>

                    <View style={eventCardStyles.detailsContainer}>
                        <View style={eventCardStyles.detailRow}>
                            <Text style={eventCardStyles.detailLabel}>Hora:</Text>
                            <Text style={eventCardStyles.detailValue}>{event.time}</Text>
                        </View>
                        <View style={eventCardStyles.detailRow}>
                            <Text style={eventCardStyles.detailLabel}>Fecha de inicio:</Text>
                            <Text style={eventCardStyles.detailValue}>{event.startDate}</Text>
                        </View>
                        <View style={eventCardStyles.detailRow}>
                            <Text style={eventCardStyles.detailLabel}>Fecha de finalización:</Text>
                            <Text style={eventCardStyles.detailValue}>{event.endDate}</Text>
                        </View>
                    </View>

                    <Button onPress={handlePressButton} style={buttonStyle}>
                        {buttonText}
                    </Button>

                    <AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)} leastDestructiveRef={cancelRef}>
                        <AlertDialog.Content>
                            <Box bg="white" p={4} rounded="md" shadow={4}>
                                <Text fontSize="lg" fontWeight="bold" mb={2}>
                                    {buttonText} Inscripción
                                </Text>
                                <Text fontSize="md">
                                    ¿Estás seguro de que desea {TextDialog.toLowerCase()} a este evento?
                                </Text>
                                <Center mt={4}>
                                    <Button.Group>
                                        <Button
                                            variant="outline"
                                            colorScheme="coolGray"
                                            onPress={() => setIsOpen(false)}
                                        >
                                            Cancelar
                                        </Button>
                                        <Button colorScheme={confirmButtonColorScheme} onPress={handleConfirm}>
                                            Confirmar
                                        </Button>
                                    </Button.Group>
                                </Center>
                            </Box>
                        </AlertDialog.Content>
                    </AlertDialog>
                </View>
            ))}
        </View>
    );
}
