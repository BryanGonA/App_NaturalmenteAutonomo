import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import Home1 from '../screens/Home/HomeScreen'
import AlimenteHome from '../screens/lineasDeAccion/alimente/alimenteHome';
import AEM from "../screens/lineasDeAccion/autonomosEnMov/autoEnMov";

const RootStack = createStackNavigator();

export default function RootStackScreen() {

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={Home1}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Alimente"
                component={AlimenteHome}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="AEM"
                component={AEM}
                options={{ headerShown: false }}
            />

        </RootStack.Navigator>
    );

}