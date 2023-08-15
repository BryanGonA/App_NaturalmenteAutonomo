import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

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
  const [user, setUser] = useState<User>({
    id: 0,
    name: "Bryan Gonzalez",
    email: "bgonzalez@uao.edu.co",
    avatar: "",
    tokens: 0,
  });
  const [newAvatar, setNewAvatar] = useState("");

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
              source={require("../../assets/photo.jpg")}
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
            Alejandra 
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
            Estudiante
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Puntos</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
          </ScrollView>
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