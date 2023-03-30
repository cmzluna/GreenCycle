import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '../../stacks/MainStack';
import AuthStack from '../../stacks/AuthStack';
import {useAuth0} from 'react-native-auth0';
import {AuthContextProvider} from '../../AuthContext';
import {useDispatch, useSelector} from 'react-redux';
import store from '../../store';

const Main = () => {
  const idTokenExists = useSelector(state => state.user.idToken);

  const {user} = useAuth0();

  const isLoggedIn = user !== undefined && user !== null;
  const dispatch = useDispatch();
  const [auth, setAuth] = React.useState(() => store.getState().auth);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setAuth(store.getState().user.isLoggedIn);
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthContextProvider>
        <NavigationContainer>
          {!auth ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
      </AuthContextProvider>
    </SafeAreaView>
  );
};

export default Main;
