import React from 'react';
import {Header, Title, Container} from './styles';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Header>
        <Title>Register Screen with form</Title>
      </Header>
      <Button
        title="Continuar"
        onPress={() => navigate('MainStack', {screen: 'Home'})}
      />
    </Container>
  );
};

export default Register;
