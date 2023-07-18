import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import Home1 from '../screens/Home/HomeScreen'

const RootStack = createStackNavigator();

export default function RootStackScreen() {

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={Home1}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );

}