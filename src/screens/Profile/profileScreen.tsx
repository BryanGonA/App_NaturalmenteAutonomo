import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

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
  const [user, setUser] = useState<User>({ id: 0, name: 'Bryan Gonzalez', email: 'bgonzalez@uao.edu.co', avatar: '', tokens: 0 });
  const [newAvatar, setNewAvatar] = useState('');

  useEffect(() => {
    // Obtiene la información del usuario de la base de datos
    
    /*axios.get(`https://api.example.com/users/${userId}`).then((response) => {
      setUser(response.data);
    });*/
  }, []);

  const handleSelectAvatar = () => {
    // ...
  };

  const handleSaveAvatar = async () => {
    /*
    if (newAvatar) {
      const formData = new FormData();
      formData.append('avatar', {
        uri: newAvatar,
        type: 'image/jpeg',
        name: 'avatar.jpg',
      });
      try {
        const response = await fetch('https://your-api.com/users/update-avatar', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        });
        const result = await response.json();
        if (result.success) {
          Alert.alert('Foto de perfil actualizada');
          // Actualizar la imagen de perfil en la vista
          setAvatar(newAvatar);
        } else {
          Alert.alert('Error al actualizar la foto de perfil');
        }
      } catch (error) {
        Alert.alert('Error al actualizar la foto de perfil');
      }
    }
    setNewAvatar('');*/
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="chevron-left" size={25} color="#555" style={styles.backButtonIcon} />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleSelectAvatar}>
          <Image source={{ uri: newAvatar || avatar }} style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.tokens}>Puntos: {user.tokens}</Text>
        {newAvatar ? (
          <TouchableOpacity onPress={handleSaveAvatar} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};


export default ProfileScreen;