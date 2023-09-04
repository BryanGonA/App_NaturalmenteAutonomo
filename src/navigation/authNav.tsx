import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";

import Home1 from '../screens/Home/HomeScreen'
import Settings from '../screens/Settings/Settings';
import ProfileScreen from '../screens/Profile/profileScreen';
import AlimenteHome from '../screens/lineasDeAccion/alimente/alimenteHome';
import AEM from "../screens/lineasDeAccion/autonomosEnMov/autoEnMov";
import VidaUaoHome from '../screens/lineasDeAccion/vidaUAO/VidaUaoHome';
import CsUaoHome from '../screens/lineasDeAccion/conSentidoUAO/CsUaoHome';
import ComparteUAO from '../screens/lineasDeAccion/alimente/solicitud/productScreen';
import EventALL from '../screens/EventsScreens/EventScreens';

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
            <RootStack.Screen
                name="Profile"
                component={ProfileScreen}
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
            <RootStack.Screen
                name="Vida"
                component={VidaUaoHome}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="ConSentido"
                component={CsUaoHome}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="ComparteUAO"
                component={ComparteUAO}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="EventALL"
                component={EventALL}
                options={{ headerShown: false }}
            />
            
        </RootStack.Navigator>
    );
}