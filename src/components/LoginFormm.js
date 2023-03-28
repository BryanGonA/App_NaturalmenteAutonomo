/* The above code is a login-form that uses react-hook-form to validate. 
*/
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";
import useUser from '../hooks/useUser';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@rneui/base';
import HomeScreen from '../screens/Home/Home';
import lock from '../assets/icons/lock.svg';
import eye from '../assets/icons/eye.svg';
import eyeSlash from '../assets/icons/eye-slash.svg';

export default function LoginFormm(props) {
    
    const {login, isLogged } = useUser();
    const { control, handleSubmit, formState: { errors }, getValues, setValue } = useForm();

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

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior='position'
        keyboardVerticalOffset={230}>
            <View>
                <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <TextInput
                    style={styles.input}
                    left={
                        <TextInput.Icon
                        name={() => <Icon name="user" size={20} color="gray" />}
                        />
                    }
                    onChangeText={(value) => setValue("Username", value)}
                    value={value}
                    placeholder="Usuario"
                    />
                )}
                name="Username"
                rules={{
                    required: { value: true, message: "Por favor, digita el usuario" },
                    pattern: {
                    message: "No es un usuario válido",
                    },
                }}
                defaultValue=""
                />
                {errors.Username && <Text style={styles.errors}>Introduce un usuario.</Text>}
                <Controller
                control={control}
                render={({ value, pressed }) => (
                    <TextInput
                    style={styles.input}
                    right={
                        <Icon name={pressed ? eye : eyeSlash} size={20} color="grey" 
                        onPress={() => secureTextEntry ? setSecureTextEntry(false) : setSecureTextEntry(true)}/>
                        
                        
                    }
                    left={
                        <Icon source={lock} size={20} color="grey" />
                    }
                    onChangeText={(value) => setValue("Password", value)}
                    value={value}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    />
                )}
                name="Password"
                rules={{
                    required: { value: true, message: "La contraseña es requerida" },
                }}
                defaultValue=""
                />
                {errors.Password && <Text style={styles.errors}>Introduce una contraseña.</Text>}
                    <View style={styles.button} >
                    <Button 
                        buttonStyle={{
                            backgroundColor: '#35B67F',
                        }}
                        onPress={handleSubmit(onSubmit)}
                        title="Iniciar Sesión"
                            
                    />
                    </View>
            </View>
        </KeyboardAvoidingView>  
    );
    
}
const styles = StyleSheet.create({
    
        label: {
        color: 'white',
        margin: 20,
        marginLeft: 10,
        },
        input: {
            backgroundColor: 'transparent',
            borderColor: 'gray',
            borderWidth: 1,
            justifyContent: 'center',
            height: 40,
            padding: 10,
            borderRadius: 10,
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            top: 170,
            },
        button: {
            color: 'white',
            height: 40,
            backgroundColor: '#35B67F',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: 150,
            top:200
        },
        
        Textt: {
        color: 'white',      
        
        },
        errors: {
        color: 'red',
        top: 170,
        marginLeft: 30,
        },
});
