import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useQuery, useMutation } from 'react-query';
import ImageResizer from 'react-native-image-resizer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import API_BASE_URL from '../../components/config/ApiConfig';
import base64js from 'base64-js';
import * as ImagePicker from 'expo-image-picker';


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
  
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultProfileImage = require('../../assets/images/user.png');

  

  const [userDetails, setUserDetails] = useState({
    name: 'Nombre del usuario',
    profileImage: defaultProfileImage, // Imagen de perfil predeterminada
    userTypes: 'N/A',
    points: 0,
  });

  function capitalizeFirstLetter(string: string) {
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

      if (userTypes.points === null) {
        userTypes.points = 0;
      }

      // Obtener la imagen de perfil usando el ID del usuario

      try {
        const profileImageResponse = await axios.get(API_BASE_URL+`/users/photo/${userSummary.id}`, {
          responseType: 'arraybuffer',
          headers: {
            'Authorization': `Bearer ${token}`,
            
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

  const handleSelectAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
    base64: false,
    //aspect: [4, 3],
  });

    

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        setSelectedImage(result?.assets[0]?.uri); // Establecer el URI en el estado
        console.log('Imagen seleccionada:', result.assets[0].uri);
        
      } else {
        alert('No se pudo obtener la imagen.');
      }
    }

    
};


const handleSaveAvatar = async (selectedImage: string) => {
  // Validar la imagen seleccionada
  if (!selectedImage) {
    throw new Error('No se seleccionó ninguna imagen.');
  }

  // Obtener el token del usuario
  const token = await AsyncStorage.getItem('jwt');

  // Obtener el ID del usuario
  const { data: user } = await axios.get(API_BASE_URL + '/users/me', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  // Redimensionar la imagen
  const resizedImage = await ImageResizer.createResizedImage(selectedImage, 300, 300, 'JPEG', 100);

  const blob = await fetch(resizedImage.uri).then((r) => r.blob());

  // Crear un formulario con la imagen redimensionada
  const formData = new FormData();
  formData.append('file', blob, 'profile.jpg');

  // Subir la imagen al servidor
  const { mutate } = useMutation('uploadAvatar', async () => {
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

    return response.data;
  });

  // Subir la imagen al servidor
  mutate();
};

useEffect(() => {
  if (selectedImage) {
    handleSaveAvatar(selectedImage);
  }
}, [selectedImage]);

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