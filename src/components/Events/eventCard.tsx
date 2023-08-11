import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Text, AlertDialog, Button, Box, Center } from 'native-base';

import eventCardStyles from './eventCardStyles';

export interface EventCardProps {
    title: string;
    image: any;
    description: string;
    endDate: string;
    startDate: string;
    time: string;
    onPressButton: () => void;
}

export default function EventCard({ title, image, description, time, startDate, endDate, onPressButton }: EventCardProps) {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
            <Image source={image} style={eventCardStyles.image} />
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
    );
}
