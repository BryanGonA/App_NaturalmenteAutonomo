import React from 'react';
import { View, Text, Switch, Image } from 'react-native';

import styles from './settingsStyles';

interface SettingsScreenProps {}

export default function SettingsScreen(props: SettingsScreenProps) {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

    const toggleNotificationsSwitch = () => {
        setNotificationsEnabled(previousState => !previousState);
    };

    const toggleDarkModeSwitch = () => {
        setDarkModeEnabled(previousState => !previousState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/images/avatar1.jpg')} style={styles.image} />
                <Text style={styles.title}>Nombre del usuario</Text>
                {/*Tokens*/}
            </View>
            <View style={styles.settingsGroup}>
                <Text style={styles.settingsGroupTitle}>Notificaciones</Text>
                <Switch
                value={notificationsEnabled}
                onValueChange={toggleNotificationsSwitch}
                style={styles.switch}
                />
            </View>
            <View style={styles.settingsGroup}>
                <Text style={styles.settingsGroupTitle}>Modo oscuro</Text>
                <Switch
                value={darkModeEnabled}
                onValueChange={toggleDarkModeSwitch}
                style={styles.switch}
                />
            </View>
        </View>
    );
}


