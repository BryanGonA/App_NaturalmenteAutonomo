import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './sideBarStyles';


export default function SidebarMenu(props: DrawerContentComponentProps) {

  return (
    <DrawerContentScrollView {...props}
      style={styles.container}
    >
      <View style={styles.exit}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <MaterialIcons name="close" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image style={styles.profile} source={require('../../assets/images/avatar1.jpg')} />
        <Text style={styles.name}>Nombre del usuario</Text>
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
          icon={() => <MaterialIcons name="home" type="font-awesome" size={24} color="white" />}
        />
        <DrawerItem
          label="Eventos"
          onPress={() => props.navigation.navigate('Pantalla2')}
          activeBackgroundColor="#fff"
          activeTintColor="#000"
          labelStyle={styles.itemText}
          icon={() => <MaterialIcons name="event" type="font-awesome" size={24} color="white" />}
        />
        <DrawerItem
          label="Ajustes"
          onPress={() => props.navigation.navigate('Settings')}
          activeBackgroundColor="#fff"
          activeTintColor="#000"
          labelStyle={styles.itemText}
          icon={() => <MaterialIcons name="settings" type="font-awesome" size={24} color="white" />}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton}>{/*Aqui va el boton de cerrar sesion, Agregar acción*/}
          <MaterialIcons name="exit-to-app" size={24} color="black" style={styles.icon}/>
          <Text style={styles.logout}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
      
    </DrawerContentScrollView>
  );
}
