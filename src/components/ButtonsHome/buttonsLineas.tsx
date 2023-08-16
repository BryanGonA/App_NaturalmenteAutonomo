import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

//import logos
const ali = require("../../assets/logo/Alimente.png");
const senti = require("../../assets/logo/con_sentido_uao.png");
const vida = require("../../assets/logo/vida_uao.png");
const fisic = require("../../assets/logo/autonomos_en_movimiento.png");

//import styles
import styles from "./buttonsLineasStyles";

export default function ButtonsLineas() {
  const navigation = useNavigation();

  const handleAlimente = () => {
    navigation.navigate('Alimente');
  };
  const handleAEM = () => {
    navigation.navigate('AEM');
  };

  const handleVida = () => {
    navigation.navigate('Vida');
  };

  const handleConSentido = () => {
    navigation.navigate('ConSentido');
  };

  return (
    <View style={styles.background}>
      <View >
        <View style={styles.TextBienvenida}>
          <Text style={styles.Title}>Bienvenido/a </Text>
          <Text style={styles.parraf}>
            Nuestro objetivo es fomentar la cultura del autocuidado y la salud
            integral, encaminada a la Promoción de la Salud física, mental y
            social de los miembros de la comunidad educativa y al reconocimiento
            del campus como un entorno saludable.
          </Text>
        </View>
        <View style={styles.buttonContainer1}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={handleAlimente}>
              <Image source={ali} style={styles.logos1} />
              <Text style={styles.buttonText1}>Alimente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleConSentido}>
              <Image source={senti} style={styles.logos1} />
              <Text style={styles.buttonText1}>Con sentido UAO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Image 
              source={require("../../assets/logo/log_blanck.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button3} onPress={handleVida}>
              <Image source={vida} style={styles.logos1} />
              <Text style={styles.buttonText1}>Vida UAO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4} onPress={handleAEM}>
              <Image source={fisic} style={styles.logos1}/>
              <Text style={styles.buttonText1}>Autónomos en movimiento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
