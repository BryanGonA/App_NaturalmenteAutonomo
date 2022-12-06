import React from 'react';

import Home from '../screens/home'

import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();
export default function AuthNav() {
return (
    <RootStack.Navigator>
    <RootStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
    />

    </RootStack.Navigator>
);
}