import React, {
  useState,
  createContext,
  useMemo,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet  } from 'react-native';

import AuthNav from './src/navigation/authNav';
import { NativeBaseProvider } from "native-base";
import GenNav from './src/navigation/genNav';

export const LoginContext = createContext({
  setUser: () => {},
  user: null,
});

export default function Mystack() {

  const [user, setUser] = useState(null);
  const contextValue = useMemo(() => ({ setUser, user }), [user]);

  return (
          <NavigationContainer style={styles.nav}>
            <NativeBaseProvider>   
                <LoginContext.Provider value={contextValue}>
                  {user ? <AuthNav /> : <GenNav />}
                </LoginContext.Provider>
            </NativeBaseProvider>
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