import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SidebarMenu(props: DrawerContentComponentProps) {
  const [showNotification, setShowNotification] = useState(false);
  const [readNotificationsCount, setReadNotificationsCount] = useState(0);
  const notificationsCount = 3 - readNotificationsCount; // Reemplaza esto con el número total de notificaciones

  const handleReadNotifications = () => {
    setReadNotificationsCount(3); // Reemplaza esto con el número total de notificaciones
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo/logo_uao.png')} />
      </View>
      <View style={styles.itemContainer}>
        <DrawerItem
          label="Pantalla 1"
          onPress={() => props.navigation.navigate('Pantalla1')}
        />
        <DrawerItem
          label="Pantalla 2"
          onPress={() => props.navigation.navigate('Pantalla2')}
        />
        {/* Agrega más opciones de menú aquí */}
      </View>
      <TouchableOpacity style={styles.notifications} onPress={() => {setShowNotification(true); handleReadNotifications()}}>
        <View style={styles.notificationIconContainer}>
          <MaterialIcons name="notifications" type="font-awesome" size={24} color="black" />
          {notificationsCount > 0 && (
            <View style={styles.notificationCountContainer}>
              <Text style={styles.notificationCountText}>{notificationsCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <Modal
        visible={showNotification}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowNotification(false)}
      >
        {/* Agrega el contenido de la notificación emergente aquí */}
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationTitle}>Notificaciones</Text>
          <Text style={styles.notificationText}>Tienes una nueva notificación.</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowNotification(false)}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 50,
  },
  itemContainer: {
    flex: 1,
  },
  notifications: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#eee',
  },
  notificationIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCountContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCountText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  notificationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  notificationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});