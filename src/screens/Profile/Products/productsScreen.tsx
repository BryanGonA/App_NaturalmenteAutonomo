import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Button, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import API_BASE_URL from "../../../components/config/ApiConfig";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import base64js from 'base64-js';

import styles from "./Stylesproducts";


const ProductCard = ({ item, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const defaultProfileImage = require('../../../assets/images/wall.jpg');

    const [eventDetails, setEventDetails] = useState({
        profileImage: defaultProfileImage, // Imagen de perfil predeterminada
    });

    // Función para obtener la imagen del evento
    const fetchEventData = async () => {
        try {
            const token = await AsyncStorage.getItem('jwt');
            
            const ImageResponse = await axios.get(API_BASE_URL+`/products/img/${item.id}`, {
                responseType: 'arraybuffer',
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
            
            const byteArray = new Uint8Array(ImageResponse.data);
            const imageBase64 = base64js.fromByteArray(byteArray);


            setEventDetails({
              profileImage: { uri: `data:image/jpeg;base64,${imageBase64}` },
            });

        } catch (error) {
            console.error('Error al obtener la imagen:', error);
            
            setEventDetails({
                profileImage: defaultProfileImage,
            });
        }
    };

    useEffect(() => {
        fetchEventData();
    }, []);




  useEffect(() => {
    setIsSelected(false); // Asegurarse de que isSelected esté en falso cuando se monta el componente
  }, [item.id]); // Restablecer isSelected si el ID del producto cambia

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    onSelect(item, isSelected); // Pasar isSelected en lugar de !isSelected
  };




  return (
    <View style={styles.productCard}>
      <View>
        <Image source={eventDetails.profileImage} style={styles.productImage} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice2}>Precio: {item.price} puntos</Text>
        <Text style={styles.productPrice}>Disponibles: {item.quantity}</Text>
      </View>
    </View>
  );
};

const HeaderBar = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image source={require("../../../assets/logo/log_blanck.png")} style={styles.logo} />
      <Text>     </Text>
    </View>
  );
};


const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigation = useNavigation();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_BASE_URL + '/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSelectProduct = (product, isSelected) => {
    const itemId = product.id;
    const productName = product.name;
  
    if (isSelected) {
      // Eliminar el producto de selectedProducts
      const updatedProducts = selectedProducts.filter(
        (item) => item.itemId !== itemId
      );
      setSelectedProducts(updatedProducts);
    } else {
      // Agregar el producto a selectedProducts
      const productJson = {
        itemId,
        name: productName,
      };
      setSelectedProducts([...selectedProducts, productJson]);
    }
  };

  const renderProductItem = ({ item }) => (
    <ProductCard item={item} onSelect={handleSelectProduct} />
  );

  return (
    <View style={styles.container}>
      <HeaderBar />
        <View style={styles.container2}>
            <Text style={styles.productName}>Porductos disponibles:</Text>
            <Text style={styles.productDescription}>A continuación podrás observar los productos que hay disponibles para ser canjeados por los puntos que tengas. 
            Para poder reclamar uno de estos productos, debes dirigirte a CASA, de la Universidad Autónoma de Occidente, y revisar si la cantidad de puntos que tengas, 
            son los suficientes para reclamar un producto </Text>
        </View>
      <FlatList
        data={products}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
    </View>
  );
};

export default ProductScreen;