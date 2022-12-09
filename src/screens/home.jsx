import React, {  } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Alimento from '../components/lineas/alimento';
import Fisic from '../components/lineas/fisic';
import Nutrition from '../components/lineas/nutricion';
import Vida from '../components/lineas/vidaArmonia';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {

/*const [alimentos, setAlimentos] = useState([]);

/*handleClick = (name) => {
    switch (name) {
        case 'ali':
            this.Alimento({showTheThing: true})
            this.Fisic({showTheThing: false})
            this.Vida({showTheThing: false})
            this.Nutrition({showTheThing: false})
            break;
        case 'fis':
            this.Alimento({showTheThing: false})
            this.Fisic({showTheThing: true})
            this.Vida({showTheThing: false})
            this.Nutrition({showTheThing: false})
            break;
        case 'vid':
            this.Alimento({showTheThing: false})
            this.Fisic({showTheThing: false})
            this.Vida({showTheThing: true})
            this.Nutrition({showTheThing: false})
            break;
        case 'ntr':
            this.Alimento({showTheThing: false})
            this.Fisic({showTheThing: false})
            this.Vida({showTheThing: false})
            this.Nutrition({showTheThing: true})
            break;
    }
}*/
function HomeScreen() {
        return (
        <View style={styles.container}>
            <View style={styles.overlay}>
            
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#79d70f' }}>
            <Text>Settings!</Text>
        </View>
        );
    }
function ProfileScreen() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#79d70f' }}>
            <Text>Profile!</Text>
        </View>
        );
    }
function EventsScreen() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#79d70f' }}>
            <Text>Events!</Text>
        </View>
        );
}

const Tab = createBottomTabNavigator();


return (
    

    <ImageBackground style={styles.image}>
        <View style={styles.container}>
            <View style={styles.overlay}>
                
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Inicio') {
                            return (
                            <Ionicons name={focused ? 'ios-apps' : 'ios-apps-outline'} size={size} color={color} />
                            );
                        } else if (route.name === 'Ajustes') {
                            return (
                            <Ionicons name={focused ? 'ios-settings' : 'ios-settings-outline'} size={size} color={color} />
                            );
                        } else if (route.name === 'Perfil') {
                            return (
                            <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={size} color={color} backgroundColor="#79d70f"/>
                            );
                        } else if (route.name === 'Eventos') {
                            return (
                            <Ionicons name={focused ? 'ios-calendar' : 'ios-calendar-outline'} size={size} color={color} />
                            );
                        }
                        
                        },
                        tabBarStyle: { 
                            backgroundColor: '#edf4f2',
                            borderTopColor: '#79d70f',
                            borderTopWidth: 0,
                            height: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: 5,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 30,   
                            overflow:'hidden',
                            left: 0,
                            bottom: 0,
                            right: 0,  
                            padding:5,       
                            borderRadius:50,                            
                        },
                        
                        tabBarActiveTintColor: '#f5a31a',
                        tabBarInactiveTintColor: '#79d70f',
                        
                    })}
                    tabBarOptions={{
                        
                    }}
                >
                    <Tab.Screen name="Inicio" component={HomeScreen} options={{
                        headerStatusBarHeight:   13,
                        headerStyle:{
                            borderRadius: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                        }
                    }} />
                    <Tab.Screen name="Perfil" component={ProfileScreen} options={{
                        headerStatusBarHeight:   13,
                        headerStyle:{
                            borderRadius: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                        }
                    }}/>
                    <Tab.Screen name="Eventos" component={EventsScreen} options={{
                        headerStatusBarHeight:   13,
                        headerStyle:{
                            borderRadius: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                        }
                    }}/>
                    <Tab.Screen name="Ajustes" component={SettingsScreen} options={{
                        headerStatusBarHeight:   13,
                        headerStyle:{
                            borderRadius: 1,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,                                             
                        }
                    }}/>
                </Tab.Navigator>
            </View>
        </View>
    </ImageBackground>
    
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#79d70f',
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
        backgroundColor: '#79d70f',
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
        alignItems: 'center',
        margin: 10,
    },
    navigator: {
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 30,
    },
});