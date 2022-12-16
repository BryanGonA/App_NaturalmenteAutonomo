import React from 'react';

import Home from '../screens/home'

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../components/lineas/alimente/Alimente_home';

const RootStack = createStackNavigator();
export default function AuthNav() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={Home}
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