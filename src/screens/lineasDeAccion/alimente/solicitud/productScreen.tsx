import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // Agrega la ruta de la imagen para cada producto
  availableQuantity: number; // Agrega la cantidad disponible
}

const products: Product[] = [
  { id: 1, name: 'Producto 1', price: 10, image: 'ruta_imagen_1', availableQuantity: 5 },
  { id: 2, name: 'Producto 2', price: 15, image: 'ruta_imagen_2', availableQuantity: 8 },
  { id: 3, name: 'Producto 3', price: 20, image: 'ruta_imagen_3', availableQuantity: 3 },
  // Agrega más productos según tus necesidades
];

const ProductScreen: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
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
      style={styles.productItem}
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
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
        <Text>Selecciona los productos que deseas comprar:</Text>
        <TouchableOpacity onPress={handleCheckout}>
          <Icon name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity
        onPress={handleCheckout}
        style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', padding: 16 }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Realizar solicitud</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    margin: 8,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  productQuantity: {
    fontSize: 14,
    color: 'gray',
  },
  productCheckIcon: {
    marginTop: 8,
  },
});

export default ProductScreen;



