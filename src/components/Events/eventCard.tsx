import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import eventCardStyles from './eventCardStyles';


export interface EventCardProps {
    title: string;
    image: any;
    description: string;
    endDate: string;
    time: string;
    onPressButton: () => void;
}

export default function EventCard({ title, image, description, time, endDate, onPressButton }: EventCardProps) {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handlePressButton = () => {
        setIsSubscribed(!isSubscribed);
        onPressButton();
    };

    const buttonText = isSubscribed ? 'Cancelar' : 'Inscribirse';

    return (
        <View style={eventCardStyles.container}>
            <Image source={image} style={eventCardStyles.image} />
            <Text style={eventCardStyles.title}>{title}</Text>
            <Text style={eventCardStyles.description}>{description}</Text>
            <Text style={eventCardStyles.time}>Hora: {time}</Text>
            <Text style={eventCardStyles.endDate}>Fecha de finalización: {endDate}</Text>
            <TouchableOpacity onPress={handlePressButton} style={eventCardStyles.button}>
            <Text style={eventCardStyles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}