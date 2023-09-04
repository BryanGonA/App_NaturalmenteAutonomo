import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

import AsyncStorage from '@react-native-async-storage/async-storage';
import API_BASE_URL from '../../components/config/ApiConfig';
import ImagePicker from 'react-native-image-picker';
import base64js from 'base64-js';

import styles from './profileStyles'

interface Props {
  name: string;
  email: string;
  avatar: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  tokens: number;
}



const ProfileScreen: React.FC<Props> = ({ name, email, avatar }) => {
  const navigation = useNavigation();
  
  const [selectedImage, setSelectedImage] = useState<ImagePicker.ImagePickerResponse | null>(null);

  const defaultProfileImage = require('../../assets/images/user.png');

  

  const [userDetails, setUserDetails] = useState({
    name: 'Nombre del usuario',
    profileImage: defaultProfileImage, // Imagen de perfil predeterminada
    userTypes: 'N/A',
    points: 0,
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

      const response2 = await axios.get(API_BASE_URL+`/users/${userSummary.id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const userTypes = response2.data;

      console.log("Points", userTypes.points);

      // Obtener la imagen de perfil usando el ID del usuario

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
          name: capitalizeFirstLetter(userSummary.firstName) + ' ' + capitalizeFirstLetter(userSummary.lastName),
          profileImage: { uri: `data:image/jpeg;base64,${imageBase64}` },
          userTypes: userTypes.userType,
          points: userTypes.points,

        });
      } catch (error) {
        // Si ocurre un error al cargar la imagen, solo establecemos el nombre
        setUserDetails({
          name: capitalizeFirstLetter(userSummary.firstName) + ' ' + capitalizeFirstLetter(userSummary.lastName),
          profileImage: defaultProfileImage,
          userTypes: userTypes.userType,
          points: userTypes.points,
        });
      }

    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleSelectAvatar = () => {
    const options: ImagePicker.ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.5,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.errorCode) {
        setSelectedImage(response);
      }
    });
  };

  const handleSaveAvatar = async () => {

    if (selectedImage) {
      try {
        const token = await AsyncStorage.getItem('jwt');
        const res = await axios.get(API_BASE_URL + '/users/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const user = res.data;

        const formData = new FormData();

        const blob = await fetch(selectedImage.assets[0].uri).then((response) => response.blob());
        formData.append('file', blob, 'profile.jpg'); // Agregar el Blob directamente

        const response = await axios.post(
          `${API_BASE_URL}/users/photo/${user.id}`,
          formData,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log('Imagen subida con éxito:', response.data);
        // Actualizar la imagen en userDetails si es necesario
        // ...
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    } else {
      console.log('No se seleccionó ninguna imagen.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={30} color="#52575D" />
          </TouchableOpacity>
          <Feather name="more-vertical" size={30} color="#52575D" />
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={userDetails.profileImage}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
          {/*
          <View style={styles.dm}>
            <MaterialIcons
              name="chat"
              size={15}
              color="#DFD8C8"
            ></MaterialIcons>
          </View>*/}
          
          <View style={styles.active}></View>
          
          <View style={styles.add}>
          <TouchableOpacity onPress={handleSelectAvatar}>
              <Ionicons
                name="ios-add"
                size={25}
                color="#DFD8C8"
                style={{ marginTop: 1, marginLeft: 2 }}
              ></Ionicons>
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            {userDetails.name}
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
            {userDetails.userTypes}
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>{userDetails.points}</Text>
            <Text style={[styles.text, styles.subText]}>Puntos</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          {/**<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../../assets/photo.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../../assets/profile.png")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../../assets/photo.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
        </ScrollView>**/}
        </View>
        <Text style={[styles.subText, styles.recent]}>Actividad reciente</Text>
        <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
              >
                Te inscribiste al evento{" "}
                <Text style={{ fontWeight: "400" }}>Recetas saludables</Text> hace{" "}
                <Text style={{ fontWeight: "400" }}>2 minutos.</Text>
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={styles.activityIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
              >
                Haz ganado 15 puntos por participar en{" "}
                <Text style={{ fontWeight: "400" }}>Caminantes UAO</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default ProfileScreen;