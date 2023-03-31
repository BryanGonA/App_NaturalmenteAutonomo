import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


//import logos
const ali = require("../../assets/logo/Alimente.png");
const senti = require("../../assets/logo/con_sentido_uao.png");
const vida = require("../../assets/logo/vida_uao.png");
const fisic = require("../../assets/logo/autonomos_en_movimiento.png");

// import styles
import styles from "./buttonsLineasStyles";

export default function ButtonsLineas() {
  const navigation = useNavigation();

  const handleAlimente = () => {
    navigation.navigate('Alimente');
  }
  const handleAEM = () => {
    navigation.navigate('AEM');
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.TextBienvenida}>
          <Text style={styles.Title}>Bienvenido/a </Text>
          <Text style={styles.parraf}>Nuestro objetivo es fomentar la cultura del autocuidado y la salud integral, encaminada a la Promoción de la Salud física, mental y social de los miembros de la comunidad educativa y al reconocimiento del campus como un entorno saludable .</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button1} onPress= {handleAlimente}>
              <Image source={ali} style={styles.logos} />
              <Text style={styles.buttonText}>Alimente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} >
              <Image source={senti} style={styles.logos} />
              <Text style={styles.buttonText}>Con{"\n"}sentido UAO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Image source={require('../../assets/logo/log_blanck.png')} style={styles.logo} />
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button3}>
              <Image source={vida} style={styles.logos} />
              <Text style={styles.buttonText}>Vida UAO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4} onPress= {handleAEM}>
              <Image source={fisic} style={styles.logos} />
              <Text style={styles.buttonText}>Autónomos en movimiento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
