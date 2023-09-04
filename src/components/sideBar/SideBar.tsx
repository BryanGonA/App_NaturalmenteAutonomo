import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState, useEffect,  useContext } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import API_BASE_URL from '../config/ApiConfig';
import base64js from 'base64-js';
import { LoginContext } from '../../../App'


import styles from './sideBarStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SidebarMenu(props: DrawerContentComponentProps) {

  const defaultProfileImage = require('../../assets/images/user.png');
  const { setUser } = useContext(LoginContext);

  const [userDetails, setUserDetails] = useState({
    name: 'Nombre del usuario',
    profileImage: defaultProfileImage, // Imagen de perfil predeterminada
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchUserDetails = async () => {

    try {
      const token = await AsyncStorage.getItem('jwt');
      const response = await axios.get(API_BASE_URL+'/users/me',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const userSummary = response.data;
      
      console.log('User details:', userSummary);

      const formattedName = capitalizeFirstLetter(userSummary.firstName) + ' ' + capitalizeFirstLetter(userSummary.lastName);

      try {
        const profileImageResponse = await axios.get(API_BASE_URL+`/users/photo/${userSummary.id}`, {
          responseType: 'arraybuffer',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        const byteArray = new Uint8Array(profileImageResponse.data);
        const imageBase64 = base64js.fromByteArray(byteArray);
  
        setUserDetails({
          name: formattedName,
          profileImage: { uri: `data:image/jpeg;base64,${imageBase64}` },
        });
      } catch (error) {
        // Si ocurre un error al cargar la imagen, solo establecemos el nombre
        setUserDetails({
          name: formattedName,
          profileImage: defaultProfileImage,
        });
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('jwt'); // Eliminar el token
      setUser();
      console.log("Token", AsyncStorage)
      props.navigation.navigate('Landing'); // Redirigir a la pantalla de inicio de sesión
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.exit}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <MaterialIcons name="close" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image style={styles.profile} source={userDetails.profileImage} />
        <Text style={styles.name}>{userDetails.name}</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
          <Text style={styles.textProfile}>Ver perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <DrawerItem
          label="Inicio"
          onPress={() => props.navigation.navigate('Home1')}
          activeBackgroundColor="#fff"
          activeTintColor="#000"
          labelStyle={styles.itemText}
          icon={() => <MaterialIcons name="home" size={24} color="white" />}
        />
        <DrawerItem
          label="Eventos"
          onPress={() => props.navigation.navigate('EventALL')}
          activeBackgroundColor="#fff"
          activeTintColor="#000"
          labelStyle={styles.itemText}
          icon={() => <MaterialIcons name="event" size={24} color="white" />}
        />
        <DrawerItem
          label="Ajustes"
          onPress={() => props.navigation.navigate('Settings')}
          activeBackgroundColor="#fff"
          activeTintColor="#000"
          labelStyle={styles.itemText}
          icon={() => <MaterialIcons name="settings" size={24} color="white" />}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="exit-to-app" size={24} color="black" style={styles.icon} />
          <Text style={styles.logout}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

