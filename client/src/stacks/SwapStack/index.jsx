import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Swap from '../../screens/Swap';
import SwapConfirm from '../../screens/SwapConfirm';

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

export default SwapStack;
