import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";

import Home1 from '../screens/Home/HomeScreen'
import Settings from '../screens/Settings/Settings';
import ProfileScreen from '../screens/Profile/profileScreen';

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
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />
            {<RootStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            }
            
            
        </RootStack.Navigator>
    );
}