/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { useAuth } from '../hooks/auth/useAuth';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';

export type StackProps = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
};

const Stack = createStackNavigator();

function Provider(): React.JSX.Element {
  const { currentUser } = useAuth();
  const { status } = currentUser;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {status === 'authenticated' ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Provider;
