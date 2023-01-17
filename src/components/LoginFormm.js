/* The above code is a login-form that uses react-hook-form to validate. 
*/
import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";
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
    /* Hook que se utiliza para realizar efectos secundarios en un componente de función. Es un sustituto cercano
    de `componentDidMount`, `componentDidUpdate` y `componentWillUnmount`.*/
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
                
                left={
                    <TextInput.Icon
                    name={() => <Icon name="lock" size={20} color="grey" />}
                right={
                    <TextInput.Icon
                    name={() => <Icon name={pressed ? 'eye' : 'eye-slash'} size={20} color="grey" />}
                    onPress={() => secureTextEntry ? setSecureTextEntry(false) : setSecureTextEntry(true)}
                    />
                }
                />
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
            
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(onSubmit)}>
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
        flex:-1,
        color: 'white',
        height: 40,
        backgroundColor: '#35B67F',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 150,
        marginTop:400
        
        
        },
        container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,       
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
        top: 370,
        },
        Textt: {
        color: 'white',      
        
        },
        errors: {
        color: 'red',
        top: 370,
        marginLeft: 30,
        },
});
