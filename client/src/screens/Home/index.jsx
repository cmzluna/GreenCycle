import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {Header, TitleHome, View,ProfileBtn,NavbarHome, DotsBtn} from './styles';
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
        <NavbarHome>
         <ProfileBtn><Text>T</Text></ProfileBtn>
        <TitleHome> Green Cycle </TitleHome>
          <DotsBtn><Text style={styles.fontText}>. . .</Text></DotsBtn>
        </NavbarHome>
        <Button onPress={onLogout} title={'Log Out'} />
        <Text>hola</Text>
      </Header>
    </View>
  );
};
const styles = StyleSheet.create({
  fontText: {
    fontSize:20,
    fontWeight:800,
    width:'80%',
    height:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  }
});

export default Home;
