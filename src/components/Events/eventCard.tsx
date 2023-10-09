import React, { useState, useEffect } from 'react';
import { Animated, Image, View } from 'react-native';
import API_BASE_URL from "../../components/config/ApiConfig";
import { Text, AlertDialog, Button, Center } from 'native-base';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import base64js from 'base64-js';

import eventCardStyles from './eventCardStyles';
import styles from './eventCardStyles';

export interface EventCardProps {
    title: string;
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
    const fetchEventData = async () => {
        try {
            const token = await AsyncStorage.getItem('jwt');
            
            const ImageResponse = await axios.get(API_BASE_URL+`/events/images/${eventId}`, {
                responseType: 'arraybuffer',
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });


            const byteArray = new Uint8Array(ImageResponse.data);
            const imageBase64 = base64js.fromByteArray(byteArray);


            setEventDetails({
              profileImage: { uri: `data:image/jpeg;base64,${imageBase64}` },
            });

        } catch (error) {
            console.error('Error al obtener la imagen:', error);
            setEventDetails({
                profileImage: defaultProfileImage,
            });
        }
    };

    useEffect(() => {
        fetchEventData();
    }, []);

    

    const handlePressButton = () => {
        setIsOpen(true);
    };

    const handleConfirm = async () => {
        try {
            // Paso 1: Obtener el ID del usuario que inició sesión
            const token = await AsyncStorage.getItem('jwt');
            const userResponse = await axios.get(API_BASE_URL + '/users/me', {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            const userId = userResponse.data; // Suponiendo que el ID está en userResponse.data
            
            // Paso 2: Hacer la solicitud POST
            const responseEvento = await axios.post(
                `${API_BASE_URL}/events/${eventId}/participants/${userId.id}`,
                null,
                {
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                });
            
            setIsSubscribed(!isSubscribed);
            onPressButton();
            setIsOpen(false);
            console.log('Inscripción aprobada');
          } catch (error) {
            console.error('Error al confirmar inscripción:', error);
            // Manejar el error si es necesario
          }

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
            <View  style={eventCardStyles.containerImage}>
                <Image style={eventCardStyles.image} source={eventDetails.profileImage}/>
            </View>
            <Text style={eventCardStyles.title}>{title}</Text>
            <Text style={eventCardStyles.description}>{description}</Text>

            <View style={eventCardStyles.detailsContainer}>
                <View style={eventCardStyles.detailRow}>
                    <Text style={eventCardStyles.detailLabel}>Hora:</Text>
                    <Text style={eventCardStyles.detailValue}>{time}</Text>
                </View>
                <View style={eventCardStyles.detailRow}>
                    <Text style={eventCardStyles.detailLabel}>Fecha de inicio:</Text>
                    <Text style={eventCardStyles.detailValue}>{startDate}</Text>
                </View>
                <View style={eventCardStyles.detailRow}>
                    <Text style={eventCardStyles.detailLabel}>Fecha de finalización:</Text>
                    <Text style={eventCardStyles.detailValue}>{endDate}</Text>
                </View>
            </View>

            <Button onPress={handlePressButton} style={buttonStyle}>
                {buttonText}
            </Button>

            <AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)} leastDestructiveRef={cancelRef}>
                <AlertDialog.Content>
                    <Animated.View style={styles.box}>
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
                    </Animated.View>
                </AlertDialog.Content>
            </AlertDialog>
        </View>
    );
}
