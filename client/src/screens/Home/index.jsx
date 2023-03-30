import React from 'react';
import {Button, Text} from 'react-native';
import {Header, Title, View} from './styles';
import {useAuth0} from 'react-native-auth0';
import {useDispatch} from 'react-redux';
import {signOut} from '../../store/slices/user';

const Home = () => {
  console.log('en HOME !!!');
  const {authorize, clearSession, user, getCredentials, error} = useAuth0();
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(signOut());
    await clearSession({federated: true}, {localStorageOnly: false});
  };

  return (
    <View>
      <Header>
        <Title>GreenCycle Home Screen</Title>
        <Button onPress={onLogout} title={'Log Out'} />
      </Header>
    </View>
  );
};

export default Home;
