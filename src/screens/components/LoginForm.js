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
import useUser from '../../hooks/useUser';

export default function LoginForm(props) {
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();
  const { control, handleSubmit, errors, setValue, getValues } = useForm();

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
      props.nav.push('Home');
    }
  }, [isLogged, props.nav]);

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
            placeholder="Email"
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
      {errors.Username && (
        <Text style={styles.textError}>{errors.Username.message}</Text>
      )}

      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Input
            placeholder="Password"
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
      {errors.Password && (
        <Text style={styles.textError}>{errors.Password.message}</Text>
      )}

      <View style={styles.button}>
        <Button
          buttonStyle={{
            backgroundColor: 'white',
            width: 200,
            marginTop: 20,
          }}
          titleStyle={{
            color: '#d32626',
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
    marginTop: 20,
  },
  textError: {
    color: 'white',
  },
});
