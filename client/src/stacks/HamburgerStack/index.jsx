import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';
import FAQs from '../../screens/Faqs';
import News from '../../screens/News';
import Contact from '../../screens/Contact';
import {Image, TouchableOpacity, View, Text} from 'react-native';

const CustomHeader = ({navigation, title}) => (
  <View
    style={{
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#ABE286',
      width: '80%',
      flex: 1,
      height: Platform.OS === 'ios' ? 100 : 70,
    }}>
    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
  </View>
);

const HamburgerStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'home',
          headerShown: true,
          tabBarIcon: ({color}) => <SwapIcon />,
          headerTitle: ({navigation}) => (
            <CustomHeader navigation={navigation} title="Tu Perfil" />
          ),
          headerStyle: {
            backgroundColor: '#ABE286',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'column',
          },
        }}
      />
      <Stack.Screen
        name="FAQs"
        component={FAQs}
        options={{
          tabBarLabel: 'home',
          headerShown: true,
          tabBarIcon: ({color}) => <SwapIcon />,
          headerTitle: ({navigation}) => (
            <CustomHeader navigation={navigation} title="FAQs" />
          ),
          headerStyle: {
            backgroundColor: '#ABE286',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'column',
          },
        }}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: 'home',
          headerShown: true,
          tabBarIcon: ({color}) => <SwapIcon />,
          headerTitle: ({navigation}) => (
            <CustomHeader navigation={navigation} title="Novedades" />
          ),
          headerStyle: {
            backgroundColor: '#ABE286',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'column',
          },
        }}
      />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default HamburgerStack;
