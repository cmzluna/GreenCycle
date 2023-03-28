import React from 'react';
import {Header, Title, View} from './styles';
import {Button} from 'react-native';

const Login = ({navigation: {navigate}}) => {
  console.log('en login!!!');
  return (
    <View>
      <Header>
        <Title>Login Screen</Title>
      </Header>
      <Button title="Registrate" onPress={() => navigate('Register')} />
    </View>
  );
};

export default Login;
