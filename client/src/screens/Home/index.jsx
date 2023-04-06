import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {
  Header,
  TitleHome,
  View,
  ProfileBtn,
  NavbarHome,
  DotsBtn,
  BoxHomeTag,
  BoxUserPoints,
  CounterLevel,
  MapDisplay,
} from './styles';
import {useAuth0} from 'react-native-auth0';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../store/slices/user';
import ScoresInfo from '../../components/ScoresInfo';
import {getCurrentLevel} from '../../utils';

const Home = () => {
  const scores = useSelector(state => state.scores);
  const {currentPoints} = scores;
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
          <ProfileBtn>
            <Text>T</Text>
          </ProfileBtn>
          <TitleHome> Green Cycle </TitleHome>
          <DotsBtn>
            <Text style={styles.fontText}>. . .</Text>
          </DotsBtn>
        </NavbarHome>

        <BoxHomeTag style={userStyles.items}>
          <View style={textUser.container}>
            <Text style={textUser.welcome}>Hola Usuario</Text>
          </View>

          <ScoresInfo
            currentPoints={currentPoints}
            currentLevel={getCurrentLevel(currentPoints).label}
            icon={getCurrentLevel(currentPoints).icon}
          />
        </BoxHomeTag>
        <BoxHomeTag>
          <Text style={dataStyles.fontData}>Estadisticas</Text>
          <CounterLevel>
            <View style={dataStyles.boxValues}>
              <Text style={dataStyles.fontData}>Plasticos</Text>
              <View style={dataStyles.circleBox}>
                <Text>15grs</Text>
              </View>
            </View>
          </CounterLevel>
        </BoxHomeTag>
        <BoxHomeTag>
          <Text style={dataStyles.fontData}>Centros de reciclaje</Text>
          <MapDisplay></MapDisplay>
        </BoxHomeTag>
      </Header>
    </View>
  );
};
const styles = StyleSheet.create({
  fontText: {
    fontSize: 20,
    fontWeight: 800,
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
const userStyles = StyleSheet.create({
  items: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
const textUser = StyleSheet.create({
  welcome: {
    fontSize: 20,
    fontWeight: 700,
    height: '40%',
    width: '100%',
    color: 'black',
  },
  container: {
    height: '40%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const pointsText = StyleSheet.create({
  boxContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxContainerPoints: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6AC52D',
    borderRadius: 10,
  },
  fontPoints: {
    fontSize: 28,
    color: 'black',
    fontWeight: 600,
  },
  fontTextPoints: {
    fontSize: 16,
    color: 'black',
    fontWeight: 600,
  },
});
const dataStyles = StyleSheet.create({
  fontData: {
    fontWeight: 600,
    fontSize: 16,
    color: '#2E4A21',
  },
  boxValues: {
    width: '35%',
    height: '80%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  circleBox: {
    borderWidth: 8,
    borderColor: 'blue',
    height: 80,
    width: 80,
    borderRadius: 80,
  },
});
export default Home;
