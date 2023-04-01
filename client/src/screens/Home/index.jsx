import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {Header, TitleHome, View,ProfileBtn,NavbarHome, DotsBtn,BoxHomeTag,BoxUserPoints} from './styles';
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
      <BoxHomeTag style={userStyles.items }>
      <View style={textUser.container}>
        <Text style={textUser.welcome}>Hola Usuario</Text>
      </View>
        <BoxUserPoints>
          <View style={pointsText.boxContainer} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text>Tu crecimiento</Text>
          </View>
        </BoxUserPoints>
      </BoxHomeTag>
      <BoxHomeTag>
        <Text>Estadisticas</Text>
      </BoxHomeTag>
      <BoxHomeTag>
      <Text>mini mapa</Text>

      </BoxHomeTag>
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
const userStyles=StyleSheet.create({
  items:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  }
})
const textUser=StyleSheet.create({
  welcome:{
    fontSize:20,
    fontWeight:700,
    height:'40%',
    width:'100%',
    color:'black'
  },
  container:{
    height:'40%',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})
const pointsText=StyleSheet.create({
  boxContainer:{
    width:'50%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around'
  },
  fontPoints:{
    fontSize:28,
    color:'black',
    fontWeight:600
  },
  fontTextPoints:{
    fontSize:16,
    color:'black',
    fontWeight:600
  }
})
export default Home;
