import React, {
  useState,
  createContext,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNav from './src/navigation/authNav';

import GenNav from './src/navigation/genNav';


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

