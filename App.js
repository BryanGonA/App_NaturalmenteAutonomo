import React, {
  useState,
  createContext, 
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Animated, Image, SafeAreaView, TouchableOpacity, View  } from 'react-native';


import AuthNav from './src/navigation/authNav';
import { NativeBaseProvider, Text, Box } from "native-base";
import GenNav from './src/navigation/genNav';
import { MenuProvider } from 'react-native-popup-menu';

export const LoginContext = createContext();
export default function Mystack() {
  const [user, setUser] = useState('');


  return (
        <MenuProvider>
          <NavigationContainer style={styles.nav}>
            <NativeBaseProvider>   
                <LoginContext.Provider value={{ setUser: setUser, user }}>
                  {user ? <AuthNav /> : <GenNav />}
                </LoginContext.Provider>
            </NativeBaseProvider>
          </NavigationContainer>
        </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      resizeMode: 'contain',
      zIndex: -1,
  },
  title: {
      color: 'white',
      fontSize:50,
  },
  nav: {
      backgroundColor: 'transparent',
      position: 'absolute',
  },
});