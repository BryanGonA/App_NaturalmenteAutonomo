import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { Input, Icon, Text, Item, Button } from '@rneui/base';
import useUser from '../hooks/useUser';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';

export default function LoginForm(props) {
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();
  const { control, handleSubmit, setError, setValue, getValues } = useForm();
  const back = createStackNavigator();

  const onSubmit = async (data) => {
    //Quitar hasta efectuar validaciones
    /*
            TEST USER 
            {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
     */
    const username = getValues('Username');
    const password = getValues('Password');

    login({ username, password });
  };

useEffect(() => {
    if (isLogged === true) {
      <back.Navigator>
        <back.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
        />
      </back.Navigator>
    }
  }, [isLogged]);

  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const lost = () => {
    console.log('¿Olvidaste tu contraseña?');
  };

  return (
    <View style={styles.logincontainer}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            placeholder="Correo institucional"
            placeholderTextColor="white"
            
            onChangeText={(value) => setValue('Username', value)}
            value={value}
            inputContainerStyle={{
              borderBottomWidth: 1,
              borderBottomColor: 'white',

            }}
          />
        )}
        name="Username"
        rules={{
          required: { value: true, message: 'Por favor, digita el nombre' },
          pattern: {
            value: EMAIL_REGEX,
            message: 'No es un correo válido',
          },
        }}
        defaultValue=""
      />
      {setError.Username && (
        <Text style={styles.textError}>{setError.Username.message}</Text>
      )}

      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Input
            placeholder="Contraseña"
            placeholderTextColor="white"
            onChangeText={(value) => setValue('Password', value)}
            value={value}
            secureTextEntry
            inputContainerStyle={{
              borderBottomWidth: 1,
              borderBottomColor: 'white',
            }}
          />
        )}
        name="Password"
        rules={{ required: { value: true, message: 'La contraseña es requerida' } }}
        defaultValue=""
      />
      {setError.Password && (
        <Text style={styles.textError}>{setError.Password.message}</Text>
      )}

      <View style={styles.button}>
        <Button
          buttonStyle={{
            backgroundColor: 'white',
            width: 200,
            marginTop: 20,
          }}
          titleStyle={{
            color: '#79d70f',
          }}
          title="Iniciar sesión"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logincontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: 10,
  },
  textError: {
    color: 'white',
  },
  btn: {
        flexDirection: 'column',
        height: 150,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        bottom: -50,
    },
});
