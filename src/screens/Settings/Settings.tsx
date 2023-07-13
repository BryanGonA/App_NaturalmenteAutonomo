import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

//import { SettingsScreenProps } from '../../navigation/SettingsNavigator';
import styles from './settingsStyles';

const SettingsScreen = () => {
    const navigation = useNavigation();
    const settingsItems = [
        { label: 'Cuenta', iconName: 'user', onPress: () => console.log('Cuenta pressed') },
        { label: 'Notificaciones', iconName: 'bell', onPress: () => console.log('Notificaciones pressed') },
        { label: 'Apariencia', iconName: 'paint-brush', onPress: () => console.log('Apariencia pressed') },
        { label: 'Privacidad y seguridad', iconName: 'lock', onPress: () => console.log('Privacidad y seguridad pressed') },
        { label: 'Ayuda y soporte', iconName: 'question-circle', onPress: () => console.log('Ayuda y soporte pressed') },
        { label: 'Sobre nosotros', iconName: 'info-circle', onPress: () => console.log('Sobre nosotros pressed') },
    ];
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon name="chevron-left" size={25} color="#555"
                style={styles.backButtonIcon}
                />
            </TouchableOpacity>
            {settingsItems.map((item, index) => (
                
                <TouchableOpacity key={index} onPress={item.onPress} style={styles.itemContainer}>
                <Icon name={item.iconName} size={25} color="#555" style={styles.itemIcon} />
                <Text style={styles.itemLabel}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default SettingsScreen;