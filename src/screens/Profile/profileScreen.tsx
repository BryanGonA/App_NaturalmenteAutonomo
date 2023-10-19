import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Ionicons, Feather } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_BASE_URL from '../../components/config/ApiConfig';
import base64js from 'base64-js';
import * as ImagePicker from 'expo-image-picker';
import { LoginContext } from '../../../App';


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

  const [isHovered, setIsHovered] = useState(false);

  const defaultProfileImage = require('../../assets/images/user.png');

  const { user, setUser } = useContext(LoginContext);

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
          const blob = await fetch(selectedImage).then((r) => r.blob());

    const formData = new FormData();
    formData.append('file', blob, user.username + '.jpg');

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
          
        } catch (error) {
          console.error('Error al subir la imagen:', error);
        }
      } else {
        console.log('No se seleccionó ninguna imagen.');
      }
    };

useEffect(() => {
  if (selectedImage) {
    handleSaveAvatar();
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

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <View style={{ marginBottom: 50 }}>
            <Text style={[styles.title]}>Canjea tus puntos</Text>
              <Text style={[styles.descrip]}>Visualiza los productos disponibles para ser canjeados dando click en el siguiente botón.</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Products')}
              style={[
                styles.button,
                isHovered && styles.buttonHover,
              ]}
              onPressIn={() => setIsHovered(true)}
              onPressOut={() => setIsHovered(false)}
            >
              <Text style={[styles.buttonText, isHovered && styles.buttonTextHover]}>
                Ver productos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};


export default ProfileScreen;