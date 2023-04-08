import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Drawer as DrawerComp} from 'react-native-paper';
import CustomDrawerContent from '../../components/DrawerContent';
import Map from '../../screens/Map';

const DrawerStack = () => {
  const Drawer = createDrawerNavigator();
  // const [active, setActive] = React.useState('');

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          zIndex: 100,
          width: '100%',
        },
        headerShown: false,
        drawerPosition: 'right',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* <DrawerComp.Section title="Some title">
        <DrawerComp.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <DrawerComp.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </DrawerComp.Section> */}
      <Drawer.Screen name="Map" component={Map} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
