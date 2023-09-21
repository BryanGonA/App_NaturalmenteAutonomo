import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import API_BASE_URL from '../../../../components/config/ApiConfig';

const logo = require( "../../../../assets/logo/log_blanck.png");

import styles from './styles';
import axios from 'axios';
interface Product {
  id: number;
  name: string;
  image: string; // Agrega la ruta de la imagen para cada producto
  availableQuantity: number; // Agrega la cantidad disponible
}



const ProductScreen: React.FC = () => {


  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation();

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        return prevSelectedProducts.filter((id) => id !== productId);
      } else {
        return [...prevSelectedProducts, productId];
      }
    });
  };

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

  const handleCheckout = () => {
    // Crear el JSON de detalles del carrito a partir de los productos seleccionados
    const detailsCart = selectedProducts.map((productId) => ({
      itemId: productId,
      cafeteriaId: 1,
    }));

    // Enviar el JSON a la API o realizar la navegación a la pantalla de solicitud
    console.log(JSON.stringify({ detailsCart }));

    // Navegar a la pantalla de solicitud (ajusta el nombre de la pantalla según tu configuración)
    navigation.navigate('Solicitud');
  };

  const renderItem = ({ item }: { item: Product }) => (
    
      <TouchableOpacity
        onPress={() => toggleProductSelection(item.id)}
        style={styles.productCard}
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productQuantity}>Disponibles: {item.availableQuantity}</Text>
        {selectedProducts.includes(item.id) && (
          <Icon name="check-circle" size={24} color="green" style={styles.productCheckIcon} />
        )}
      </TouchableOpacity>
    
  );

  return (
    <View style={styles.container}>
        <View style={styles.titleBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={30} color="#52575D" style={styles.arrow}/>
            </TouchableOpacity>
            <Image source={logo} style={styles.logos} />
            <TouchableOpacity onPress={handleCheckout}>
              <Icon name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <View style={styles.container1}>
            <FlatList
              data={products}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              numColumns={2}
            />
        </View>
        <TouchableOpacity
          onPress={handleCheckout}
          style={styles.fab}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Realizar solicitud</Text>
        </TouchableOpacity>
    </View>
    
  );
};

export default ProductScreen;



