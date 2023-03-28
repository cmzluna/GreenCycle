import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/Home';
import Map from '../../screens/Map';

const Tab = createMaterialBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
};

export default MainStack;
