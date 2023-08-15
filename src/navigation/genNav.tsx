import React from 'react';

import LandingPage from '../screens/Landing';
import LoginPage from '../screens/Login';
import Home1 from '../screens/Home/HomeScreen'

import { createStackNavigator } from '@react-navigation/stack';

const Gentack = createStackNavigator();

export default function GenNav() {
return (
    <Gentack.Navigator>
        <Gentack.Screen
            name="Landing"
            component={LandingPage}
            options={{ headerShown: false }}
        />
        <Gentack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
        />
        
    </Gentack.Navigator>
);
}