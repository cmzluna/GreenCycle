import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Welcome from '../../screens/Welcome';
import Register from '../../screens/Register';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Welcome" component={Welcome} />
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={{
        headerShown: false,
      }}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
