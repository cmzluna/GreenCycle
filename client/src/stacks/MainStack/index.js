import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import BookIcon from '../../components/Icons/BookIcon';
import SwapIcon from '../../components/Icons/SwapIcon';
import HomeIcon from '../../components/Icons/Home';
import LocationIcon from '../../components/Icons/LocationIcon';
import ScannerIcon from '../../components/Icons/Scanner';
import Swap from '../../screens/Swap';
import Home from '../../screens/Home';
import Locations from '../../screens/Locations';
import Map from '../../screens/Map';
import Scanner from '../../screens/Scanner';

const Tab = createMaterialBottomTabNavigator();

const MainStack = () => {
  return (
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
          name="Swap"
          component={Swap}
          options={{
            tabBarLabel: 'home',
            tabBarIcon: ({color}) => <SwapIcon />,
          }}
        />

        <Tab.Screen
          name="Scanner"
          component={Scanner}
          options={{
            tabBarLabel: 'scanner',
            tabBarIcon: ({color}) => <ScannerIcon />,
          }}
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
  );
};

export default MainStack;
