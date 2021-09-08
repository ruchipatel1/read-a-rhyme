import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from "./src/navigation/AppNavigator";
import {AuthContext} from "./src/navigation/AuthContext";

export default function App() {
  const [hasUser, setUser] = useState(false);

  return (
      <AuthContext.Provider value={{hasUser, setUser}}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthContext.Provider>
  );
}


