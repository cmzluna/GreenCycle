import * as React from 'react';
import {Title, Container} from './styles';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Welcome = ({navigation: {navigate}}) => {
  const isLogged = false;

  return (
    <>
      <Button title="SALTAR" onPress={() => navigate('Login')} />

      <Container>
        <Title>Dirígete a tu centro de reciclaje más cercano</Title>
      </Container>
    </>
  );
};

export default Welcome;
