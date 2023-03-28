import React from 'react';


import Home1 from '../screens/Home/Home'


import { createStackNavigator } from "@react-navigation/stack";


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
                component={Home1}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
}