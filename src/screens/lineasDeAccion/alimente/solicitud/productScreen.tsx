import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'native-base';
import axios from 'axios';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realizar la solicitud HTTP al montar el componente
    axios.get('http://172.16.12.24:8080/api/items')
      .then(response => {
        setProducts(response.data); // Actualizar el estado con los datos recibidos
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <View>
      {products.map(product => (
        <Card key={product.id}>
          <Text>{product.name}</Text>
        </Card>
      ))}
    </View>
  );
};

export default ProductScreen;
