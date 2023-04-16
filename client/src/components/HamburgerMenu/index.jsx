import * as React from 'react';
import Profile from '../Icons/Profile';
import {Drawer} from 'react-native-paper';
import {StyleSheet, View, Image} from 'react-native';

const HamburgerMenu = ({navigation}) => {
  const [active, setActive] = React.useState('');

  return (
    <>
      <View style={styles.logoContainer}>
        <Image source={require('/assets/Icons/GreenCycleCircleLogo.png')} />
      </View>
      <Drawer.Section style={styles.section}>
        <Drawer.CollapsedItem
          focusedIcon={Profile}
          unfocusedIcon={Profile}
          label="Perfil"
          style={styles.item}
          active={active === 'first'}
          onPress={() => {
            setActive('first');
            navigation.navigate('HamburgerStack', {screen: 'Profile'});
            // navigation.navigate('Profile');
          }}
        />
        <Drawer.CollapsedItem
          focusedIcon={Profile}
          unfocusedIcon={Profile}
          label="FAQs"
          style={styles.item}
          active={active === 'second'}
          onPress={() => {
            setActive('second');
            navigation.navigate('HamburgerStack', {screen: 'FAQs'});
            // navigation.navigate('Profile');
          }}
        />

        <Drawer.CollapsedItem
          focusedIcon={Profile}
          unfocusedIcon={Profile}
          label="Novedades"
          style={styles.item}
          active={active === 'second'}
          onPress={() => {
            setActive('second');
            navigation.navigate('HamburgerStack', {screen: 'News'});
            // navigation.navigate('Profile');
          }}
        />

        <Drawer.CollapsedItem
          focusedIcon={Profile}
          unfocusedIcon={Profile}
          label="Contáctanos"
          style={styles.item}
          active={active === 'second'}
          onPress={() => {
            setActive('second');
            navigation.navigate('HamburgerStack', {screen: 'Contact'});
            // navigation.navigate('Profile');
          }}
        />
      </Drawer.Section>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 90,
    paddingBottom: 90,
  },
  logoContainer: {
    display: 'flex',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#ABE286',
  },
  item: {
    margin: 5,
    backgroundColor: '#fff',
  },
});

export default HamburgerMenu;
