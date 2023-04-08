import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookIcon from '../../components/Icons/BookIcon';
import SwapIcon from '../../components/Icons/SwapIcon';
import HomeIcon from '../../components/Icons/Home';
import LocationIcon from '../../components/Icons/LocationIcon';
import ScannerIcon from '../../components/Icons/Scanner';
import Home from '../../screens/Home';
import Locations from '../../screens/Locations';
import Map from '../../screens/Map';
import Scanner from '../../screens/Scanner';
import {View} from 'react-native';
import {promiseWrapper} from '../../utils';
import {BarCodeScanner} from 'expo-barcode-scanner/build/BarCodeScanner';
import SwapConfirm from '../../screens/SwapConfirm';
import MyDrawer from '../DrawerStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Swap from 'screens/Swap';
import DrawerStack from '../DrawerStack';

const requestPermission = async () => {
  const [data] = await promiseWrapper(BarCodeScanner.requestPermissionsAsync());

  return data?.status === 'granted';
};

const requestPermissionHandler = async ({navigate}) => {
  const [hasPermission] = await promiseWrapper(requestPermission());

  if (!hasPermission) return;

  navigate('Scannerscreen');
};

const ScannerBase = () => <View style={{flex: 1, backgroundColor: 'red'}} />;

const SwapStack = () => {
  const SwapStackNav = createNativeStackNavigator();

  return (
    <SwapStackNav.Navigator>
      <SwapStackNav.Screen
        name="SwapScreen"
        component={Swap}
        options={{
          tabBarLabel: 'home',
          headerShown: false,
          tabBarIcon: ({color}) => <SwapIcon />,
        }}
      />
      <SwapStackNav.Screen
        name="SwapConfirm"
        component={SwapConfirm}
        options={{
          tabBarLabel: 'home',
          headerShown: false,
          tabBarIcon: ({color}) => <SwapIcon />,
        }}
      />
    </SwapStackNav.Navigator>
  );
};

// const DrawerStack = () => {
//   const Drawer = createDrawerNavigator();

//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerStyle: {
//           backgroundColor: 'white',
//           zIndex: 100,
//         },
//         headerShown: false,
//         drawerPosition: 'right',
//       }}>
//       <Drawer.Screen name="Map" component={Map} />
//       <Drawer.Screen name="Swap" component={Swap} />
//     </Drawer.Navigator>
//   );
// };

const TabStack = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        labeled={false}
        shifting={true}
        barStyle={{
          backgroundColor: '#000',
          paddingBottom: 12,
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: Platform.OS === 'ios' ? 100 : 70,
        }}>
        <Tab.Group screenOptions={{tabBarColor: '000'}}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'home',
              tabBarIcon: ({color, focused}) => (
                <HomeIcon color={focused ? 'black' : 'white'} />
              ),
            }}
          />
          <Tab.Screen
            name="Swap"
            component={SwapStack}
            options={{
              tabBarLabel: 'home',

              headerShown: true,

              tabBarIcon: ({color, focused}) => (
                <SwapIcon color={focused ? 'black' : 'white'} />
              ),
            }}
          />
          <Tab.Screen
            name="Scanner"
            component={ScannerBase}
            options={{
              barStyle: {display: 'none'},
              tabBarLabel: 'scanner',
              tabBarIcon: ({color, focused}) => (
                <ScannerIcon color={focused ? 'black' : 'white'} />
              ),
            }}
            listeners={({navigation}) => ({
              tabPress: e => {
                e.preventDefault();
                requestPermissionHandler(navigation);
              },
            })}
          />
          <Tab.Screen
            name="DrawerStack"
            component={DrawerStack}
            options={{
              headerShown: true,
              tabBarIcon: ({color, focused}) => (
                <LocationIcon color={focused ? 'black' : 'white'} />
              ),
            }}
          />
          <Tab.Screen
            name="Locations"
            component={Locations}
            options={{
              tabBarLabel: 'book',
              tabBarIcon: ({color, focused}) => (
                <BookIcon color={focused ? 'black' : 'white'} />
              ),
            }}
          />
        </Tab.Group>
      </Tab.Navigator>
    </>
  );
};

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabStack"
        component={TabStack}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Scannerscreen"
        component={Scanner}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
