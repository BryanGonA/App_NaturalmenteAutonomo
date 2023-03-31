import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";

import Home1 from '../screens/Home/HomeScreen'
import alimenteHome from '../screens/lineasDeAccion/alimente/alimenteHome'
import AutonomosEnMov from '../screens/lineasDeAccion/autonomosEnMov/autoEnMov'
import Settings from '../screens/Settings/Settings';

const RootStack = createStackNavigator();
export default function AuthNav() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={Home1}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Alimente"
                component={alimenteHome}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="AEM"
                component={AutonomosEnMov}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />
            

        </RootStack.Navigator>
    );
}