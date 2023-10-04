import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Button, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import API_BASE_URL from "../../../../components/config/ApiConfig";
import axios from "axios";

import styles from "./styles";

const ProductCard = ({ item}) => {
  return (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.quntity}</Text>
      </View>
    </View>
  );
};

const ProductScreen = () => {
  const [products, setProducts] = useState();
  const [selectedProducts, setSelectedProducts] = useState([]);

  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_BASE_URL + '/items');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSelectProduct = (product) => {
    const itemId = product.id;

    // Creamos un nuevo objeto JSON para el producto
    const productJson = {
      itemId,
    };

    setSelectedProducts([...selectedProducts, productJson]);
  };

  const renderProductItem = ({ item }) => (
    <ProductCard item={item}/>
  );

  const onPressContinueButton = () => {


    // Enviamos el JSON al servidor
    axios.post(API_BASE_URL + "/request/create", selectedProducts)
      .then((response) => {
        // ...
      })
      .catch((error) => {
        // ...
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;



