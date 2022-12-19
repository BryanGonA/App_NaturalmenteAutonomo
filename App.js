import React, {
  useState,
  createContext, 
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet  } from 'react-native';


import AuthNav from './src/navigation/authNav';

import GenNav from './src/navigation/genNav';




export const LoginContext = createContext();
export default function Mystack() {
  const [user, setUser] = useState('');

  /*async function  componentDidMount () {
    await Expo.Font.loadAsync({
        Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
  });
}*/

  return (
      
        <NavigationContainer style={styles.nav}>          
          <LoginContext.Provider value={{ setUser: setUser, user }}>
            {user ? <AuthNav /> : <GenNav />}
          </LoginContext.Provider>
        </NavigationContainer>
    
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