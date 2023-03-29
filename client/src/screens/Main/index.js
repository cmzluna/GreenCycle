import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '../../stacks/MainStack';
import AuthStack from '../../stacks/AuthStack';

const Main = () => {
  const isLoggedIn = false;

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {isLoggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Main;
