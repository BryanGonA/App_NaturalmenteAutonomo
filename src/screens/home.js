import React, {  } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Alimento from '../components/lineas/alimento';
import Fisic from '../components/lineas/fisic';
import Nutrition from '../components/lineas/nutricion';
import Vida from '../components/lineas/vidaArmonia';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/AntDesign';


export default function HomeScreen({ navigation }) {
function HomeScreen() {
        return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Nutrition nav={navigation}/>
                <Vida nav={navigation}/>
                <Alimento nav={navigation}/>
                <Fisic nav={navigation}/> 
            
            </View>
        </View>
        );
    }
function SettingsScreen() {
        return (
        <View style={styles.container}>
            <Text>Settings!</Text>
        </View>
        );
    }
function ProfileScreen() {
        return (
            <View style={styles.container}>
            <Text>Profile!</Text>
        </View>
        );
    }
function EventsScreen() {
        return (
            <View style={styles.container}>
            <Text>Events!</Text>
        </View>
        );
}

const Tab = createBottomTabNavigator();


return (
    /*barra de navegación, esta es la que se ve en la parte inferior de la pantalla
    y que permite cambiar de pantalla a través de los botones de la barra de navegación.
    Se hizo de esta manera para facilitar al usuario la navegación por la aplicación.
    
    */
    <ImageBackground style={styles.image}>
        <View style={styles.container}>
            <View style={styles.overlay}>
                
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Inicio') {
                            return (
                            <Ionicons name={focused ? 'home' : 'home'} size={size} color={color} />
                            );
                        } else if (route.name === 'Ajustes') {
                            return (
                            <Ionicons name={focused ? 'setting' : 'setting'} size={size} color={color} />
                            );
                        } else if (route.name === 'Perfil') {
                            return (
                            <Ionicons name={focused ? 'user' : 'user'} size={size} color={color} />
                            );
                        } else if (route.name === 'Eventos') {
                            return (
                            <Ionicons name={focused ? 'calendar' : 'calendar'} size={size} color={color} />
                            );
                        }
                        
                        },
                        tabBarStyle: { 
                            backgroundColor: 'white',
                            borderTopColor: 'transparent',
                            borderTopWidth: 0,
                            height: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 5,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 20,   
                            overflow:'hidden',
                            left: 0,
                            bottom: 0,
                            right: 0,  
                            padding:5,       
                            borderRadius:0,                            
                        },
                        
                        tabBarActiveTintColor: '#5AA469',
                        tabBarInactiveTintColor: 'gray',
                        
                    })}
                >
                    <Tab.Screen name="Inicio" component={HomeScreen} options={{
                        
                        headerTitle: 'Naturalmente Autónomo', 
                        headerStatusBarHeight:   13,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            
                        },
                        headerStyle:{
                            borderRadius: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Ionicon name={"arrow-back-ios"} size={28} alignItems={'center'}/>
                            </TouchableOpacity>
                        ),
                        
                    
                    }} />
                    <Tab.Screen name="Eventos" component={EventsScreen} options={{
                        headerTitle: 'Naturalmente Autónomo',
                        headerStatusBarHeight:   13,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            name:'invisible'
                            
                        },
                        headerStyle:{
                            borderRadius: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Ionicon name={'arrow-back-ios'} size={28} alignItems={'center'}/>
                            </TouchableOpacity>
                        ),
                    }}/>
                    <Tab.Screen name="Ajustes" component={SettingsScreen} options={{
                        headerTitle: 'Naturalmente Autónomo',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            
                        },
                        headerStatusBarHeight:   13,
                        headerStyle:{
                            borderRadius: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,                                             
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Ionicon name={'arrow-back-ios'} size={28} alignItems={'center'} />
                            </TouchableOpacity>
                        ),
                    }}/>
                    <Tab.Screen name="Perfil" component={ProfileScreen} options={{
                        headerTitle: 'Naturalmente Autónomo',
                        headerStatusBarHeight:   13,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            
                            
                        },
                        headerStyle:{
                            borderRadius: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Ionicon name={'arrow-back-ios'} size={28} alignItems={'center'}/>
                            </TouchableOpacity>
                        ),
                    }}
                        centerComponent={{ text: 'Naturalmente Autónomo', style: { color: '#79d70f' } }}
                    />
                </Tab.Navigator>
            </View>
        </View>
    </ImageBackground>
    
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000',
        alignItems: 'center',
        justifyContent:"center"
    },
    title: {
        color: 'white',
        fontSize:50,
    },
    overlay: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'transparent',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        width: '100%',
        margin: 50,
        marginTop:120,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    navigator: {
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 30,
    },
});