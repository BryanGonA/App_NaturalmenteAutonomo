import React, { useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native-gesture-handler";
import useUser from '../hooks/useUser';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import Icon from 'react-native-vector-icons/FontAwesome';


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
        <View>
            <Controller
                control={control}
                
                render={({ onChange, onBlur, value  }) => (
                
                <TextInput
                    style={styles.input}
                    
                    onChangeText={(value) => setValue('Username', value)}
                    value={value}
                    placeholder="Usuario"
                />
                )}
                name="Username"
                rules={{
                    required:{ value: true, message: 'Por favor, digita el usuario' },
                    pattern: {
                        message: 'No es un usuario válido',
                    },
                }}
                defaultValue=""
            />
            {errors.Username && <Text>Introduce un usuario.</Text>}
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                
                <TextInput
                    style={styles.input}
                    
                    onChangeText={(value) => setValue('Password', value)}
                    value={value}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                />
                )}
                name="Password"
                rules={{
                    required: { value: true, message: 'La contraseña es requerida' }
                }}
                defaultValue=""
            />
            {errors.Password && <Text>Introduce una contraseña.</Text>}
                
            
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.Textt}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    );
    
}
const styles = StyleSheet.create({
        label: {
        color: 'white',
        margin: 20,
        marginLeft: 10,
        },
        button: {
        color: 'white',
        height: 40,
        backgroundColor: '#202b18',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 150,
        margin: 10,
        marginTop: 50,
        
        },
        container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 80,
        padding: 8,
        backgroundColor: '#0e101c',
        },
        input: {
        backgroundColor: 'white',
        borderColor: 'none',
        height: 40,
        padding: 10,
        borderRadius: 4,
        margin: 10,
        },
        Textt: {
        color: 'white',
        },
});
