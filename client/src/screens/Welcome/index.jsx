import * as React from 'react';
import {Title, Container} from './styles';
import {Button} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth0, {useAuth0} from 'react-native-auth0';
import jwtDecode from 'jwt-decode';
import config from '../../../auth0-configuration';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../store/slices/user';

const Welcome = () => {
  const {authorize, clearSession, user} = useAuth0();
  const isLoggedIn = user !== undefined && user !== null;
  const idTokenExists = useSelector(state => state.user.idToken);
  const {navigate} = useNavigation();

  const dispatch = useDispatch();

  const auth0 = new Auth0({
    domain: config.domain,
    clientId: config.clientId,
  });

  React.useEffect(() => {
    if (idTokenExists) navigate('Home');
  }, [idTokenExists]);

  const onLogin = async () => {
    try {
      const user_auth = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      const user_details = jwtDecode(user_auth.idToken);
      console.log('user_details ==> ', user_details);
      console.log('user_auth.idToken = ', user_auth.idToken);
      dispatch(signIn({payload: user_auth.idToken}));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Button title="SALTAR" onPress={() => onLogin()} />

      <Container>
        <Title>Dirígete a tu centro de reciclaje más cercano</Title>
      </Container>
    </>
  );
};

export default Welcome;
