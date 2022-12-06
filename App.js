import React, {
  useState,
  createContext,
} from 'react';

//Components

import AuthNav from './src/navigation/authNav';

import GenNav from './src/navigation/genNav';
//Navigation

//Dependencies
import { NavigationContainer } from '@react-navigation/native';

export const LoginContext = createContext();
export default function Mystack() {
  const [user, setUser] = useState('');

  return (
    <NavigationContainer>
      <LoginContext.Provider value={{ setUser: setUser, user }}>
        {user ? <AuthNav /> : <GenNav />}
      </LoginContext.Provider>
    </NavigationContainer>
  );
}

