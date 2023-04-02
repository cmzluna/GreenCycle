import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookIcon from '../../components/Icons/BookIcon';
import DonateIcon from '../../components/Icons/DonateIcon';
import HomeIcon from '../../components/Icons/Home';
import LocationIcon from '../../components/Icons/LocationIcon';
import ScannerIcon from '../../components/Icons/Scanner';
import Donate from '../../screens/Donate';
import Home from '../../screens/Home';
import Locations from '../../screens/Locations';
import Map from '../../screens/Map';
import Scanner from '../../screens/Scanner';
import {View} from 'react-native';
import {promiseWrapper} from '../../utils';
import {BarCodeScanner} from 'expo-barcode-scanner/build/BarCodeScanner';

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

const TabStack = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        activeColor="#DBE5DD"
        inactiveColor="#fff"
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
              tabBarIcon: ({color}) => <HomeIcon />,
            }}
          />
          <Tab.Screen
            name="Donate"
            component={Donate}
            options={{
              tabBarLabel: 'home',
              tabBarIcon: ({color}) => <DonateIcon />,
            }}
          />
          <Tab.Screen
            name="Scanner"
            component={ScannerBase}
            options={{
              barStyle: {display: 'none'},
              tabBarLabel: 'scanner',
              tabBarIcon: ({color}) => <ScannerIcon />,
            }}
            listeners={({navigation}) => ({
              tabPress: e => {
                e.preventDefault();
                requestPermissionHandler(navigation);
              },
            })}
          />
          <Tab.Screen
            name="Location"
            component={Map}
            options={{
              tabBarLabel: 'location',
              tabBarIcon: ({color}) => <LocationIcon />,
            }}
          />
          <Tab.Screen
            name="Locations"
            component={Locations}
            options={{
              tabBarLabel: 'book',
              tabBarIcon: ({color}) => <BookIcon />,
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
          headerShown: false,
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
