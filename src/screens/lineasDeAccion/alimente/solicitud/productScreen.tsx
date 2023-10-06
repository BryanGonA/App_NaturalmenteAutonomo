import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Button, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import API_BASE_URL from "../../../../components/config/ApiConfig";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const ProductCard = ({ item, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(false); // Asegurarse de que isSelected esté en falso cuando se monta el componente
  }, [item.id]); // Restablecer isSelected si el ID del producto cambia

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    onSelect(item, isSelected); // Pasar isSelected en lugar de !isSelected
  };

  return (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>Disponibles: {item.quantity}</Text>
        <View style={styles.buttonAdd}>
          <TouchableOpacity
            style={[
              styles.addButton,
              isSelected ? { backgroundColor: "red" } : null, // Cambiar el color a rojo cuando isSelected sea true
            ]}
            onPress={toggleSelection}
          >
            <Ionicons
              name={isSelected ? "remove-circle-outline" : "add-circle-outline"} // Cambiar el nombre del icono según isSelected
              size={28}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const SelectedProducts = ({ selectedProducts }) => {

  console.log(selectedProducts);
    
  if (selectedProducts.length === 0) {
    return null;
  }

  const productNames = selectedProducts.map((item) => item.name).join(', ');

  return (
    <View style={styles.selectedProductsContainer}>
      <Text style={styles.selectedProductsText}>Seleccionados: {productNames}</Text>
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
      <Image source={require("../../../../assets/logo/log_blanck.png")} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
        <Ionicons name="cart-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};


const ProductScreen = () => {
  const [products, setProducts] = useState();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigation = useNavigation();

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

  const onPressContinueButton = () => {
    // Enviamos el JSON al servidor
    axios.post(API_BASE_URL + "/request/create", selectedProducts)
      .then((response) => {

        
      })
      .catch((error) => {
        // ...
      });
  };


  return (
    <View style={styles.container}>
      <HeaderBar />
      <FlatList
        data={products}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
      <SelectedProducts selectedProducts={selectedProducts} />
      <TouchableOpacity style={styles.continueButton} onPress={onPressContinueButton}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ProductScreen;



