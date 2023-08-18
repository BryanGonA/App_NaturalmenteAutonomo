import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Dropdown  } from 'react-native';
import { Card, FlatList, Text, Container, ScrollView, Fab, Icon, Button, Modal, FormControl, Input } from 'native-base';
import axios from 'axios';
import API_BASE_URL from '../../../../components/config/ApiConfig'
import { Picker } from '@react-native-picker/picker';

import styles from './styles';

const ProductScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]); // Arreglo de preguntas

  useEffect(() => {
    // Realizar la solicitud HTTP al montar el componente
    axios.get(API_BASE_URL + '/items')
      .then(response => {
        setProducts(response.data); // Actualizar el estado con los datos recibidos
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });

    // Obtener las preguntas desde la API
    axios.get(API_BASE_URL + '/requests/questions')
      .then(response => {
        setQuestions(response.data); // Actualizar el estado con las preguntas recibidas
        // Inicializar las respuestas con un objeto vacío
        const initialAnswers = {};
        response.data.forEach(question => {
          initialAnswers[question.id] = ''; // Cada pregunta empieza con una respuesta vacía
        });
        setAnswers(initialAnswers);
      })
      .catch(error => {
        console.error('Error al obtener las preguntas:', error);
      });
  }, []);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    const user = {
      id: 'AQUI_EL_ID_DEL_USUARIO', // Debe ser el ID del usuario logueado
      firstName: 'AQUI_EL_NOMBRE_DEL_USUARIO', // Debe ser el nombre del usuario logueado
      cedula: 'AQUI_LA_CEDULA_DEL_USUARIO', // Debe ser la cédula del usuario logueado
    };

    const responses = questions.map(question => ({
      answer: answers[question.id],
      question: {
        id: question.id,
      },
    }));

    const requestData = {
      user: user,
      responses: responses,
    };

    // Enviar el JSON a la API
    axios.post(API_BASE_URL + '/requests', requestData)
      .then(response => {
        // Manejar la respuesta de la API
        console.log('Respuesta de la API:', response.data);
        setModalVisible(false); // Cerrar el modal al enviar
      })
      .catch(error => {
        console.error('Error al enviar el formulario:', error);
      });
  };

   // Función para renderizar cada elemento de la lista
   const renderItem = ({ item }) => (
    <Card style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Productos</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.description}>
          Bienvenido a Comparte UAO. En este apartado podrás encontrar alimentos que desde la solidaridad, la comunidad autónoma ha dispuesto para ti.
        </Text>
        <View style={styles.productList}>
          {products.map(product => renderItem({ item: product }))}
        </View>
      </ScrollView>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Solicitar Donación</Modal.Header>
          <Modal.Body>
            {questions.map(question => (
              <FormControl key={question.id} mt="3">
                <FormControl.Label>{question.text}</FormControl.Label>
                {question.openEnded ? (
                  <Input
                    value={answers[question.id]}
                    onChangeText={value => handleAnswerChange(question.id, value)}
                  />
                ) : (
                  <Picker
                    selectedValue={answers[question.id]}
                    onValueChange={value => handleAnswerChange(question.id, value)}
                  >
                    {/* Aquí puedes mapear las opciones de la pregunta cerrada */}
                    {question.options.map(option => (
                      <Picker.Item key={option} label={option} value={option} />
                    ))}
                  </Picker>
                )}
              </FormControl>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={handleSubmit}>
              <Text>Enviar</Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.TextBt}>Solicitar Donación</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ProductScreen;

