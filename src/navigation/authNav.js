import React from 'react';

import Home from '../screens/home'
import Home1 from '../components/lineas/Inicio'
import Home3 from '../screens/home3'

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../components/lineas/alimente/Alimente_home';
import Settings from '../screens/Settings';

const RootStack = createStackNavigator();
export default function AuthNav() {
    return (
        <RootStack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        
        >

            <RootStack.Screen
                name="Home"
                component={Home3}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Alimente"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
}