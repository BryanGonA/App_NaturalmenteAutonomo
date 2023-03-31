import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./alimenteStyles";
import Events from "../../../components/Events/eventCard";
import { ScrollView } from "react-native-gesture-handler";


//Images
const event1 = require('../../../assets/events/agricult.jpg');
const event2 = require('../../../assets/events/cafeUAO.jpg');

export default function AlimenteHome() {
    const navigation = useNavigation();

    const handlePressButton = () => {
        

    };

    const events = [
        {
            title: 'Evento 1',
            image: event1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            endDate: '2023-12-12',
            time: '12:00'
        },
        {
            title: 'Evento 2',
            image: event2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            endDate: '2023-12-12',
            time: '12:00'
        },
        {
            title: 'Evento 3',
            image: event1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            endDate: '2023-12-12',
            time: '12:00'
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo/Alimente.png')} style={styles.image} />
                <Text style={styles.title}>Alimente</Text>
            </View>
            <TouchableOpacity onPress={handlePressButton} style={styles.button}>
                <Text style={styles.buttonText}>Eventos</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.events}>
            <Text style={styles.description}>La alimentación es un derecho humano fundamental, que debe ser garantizado por el Estado y la sociedad. La Universidad Autónoma de Occidente, a través de su programa de Alimente, busca contribuir a la construcción de una sociedad más justa, equitativa y solidaria, a través de la garantía de la alimentación de los estudiantes de la Institución.</Text>
                <Text style={styles.eventsTitle}>Próximos eventos</Text>
                <View style={styles.eventsContainer}>
                    {events.map((event, index) => (
                        <Events
                            key={index}
                            title={event.title}
                            image={event.image}
                            description={event.description}
                            endDate={event.endDate}
                            time={event.time}
                            onPressButton={handlePressButton}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}