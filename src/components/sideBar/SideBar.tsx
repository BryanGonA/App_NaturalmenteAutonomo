import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import API_BASE_URL from '../config/ApiConfig';


import styles from './sideBarStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SidebarMenu(props: DrawerContentComponentProps) {

  const defaultProfileImage = require('../../assets/images/user.png');

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

      // Obtener la imagen de perfil usando el ID del usuario
      if (userSummary.hasProfileImage) {
        // Obtener la imagen de perfil y establecerla en userDetails
        const profileImageResponse = await axios.get(API_BASE_URL+`/users/photo/${userSummary.id}`, { responseType: 'arraybuffer' });
        const profileImageBase64 = Buffer.from(profileImageResponse.data).toString('base64');

        setUserDetails({
          name: capitalizeFirstLetter(userSummary.firstName) + ' ' + capitalizeFirstLetter(userSummary.lastName),
          profileImage: { uri: `data:image/jpeg;base64,${profileImageBase64}` },
        });
      } else {
        // Usar la imagen predeterminada si no hay imagen de perfil
        setUserDetails({
          name: capitalizeFirstLetter(userSummary.firstName) + ' ' + capitalizeFirstLetter(userSummary.lastName),
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
          onPress={() => props.navigation.navigate('Pantalla2')}
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
        <TouchableOpacity style={styles.logoutButton}>
          <MaterialIcons name="exit-to-app" size={24} color="black" style={styles.icon} />
          <Text style={styles.logout}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

