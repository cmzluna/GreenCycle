import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';
import FAQs from '../../screens/Faqs';
import News from '../../screens/News';
import Contact from '../../screens/Contact';
import {Image, TouchableOpacity, View, Text} from 'react-native';

const CustomHeader = ({navigation}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      backgroundColor: '#ABE286',
      width: '100%',
      flex: 1,
      height: Platform.OS === 'ios' ? 100 : 70,
    }}>
    <Image source={require('../../../assets/Icons/tabbaricon.png')} />

    <View style={{width: 24}} />
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
            <CustomHeader navigation={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#ABE286',
          },
          headerLeft: ({navigation}) => (
            <View
              style={{
                width: 100,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                backgroundColor: '#ABE286',
                height: Platform.OS === 'ios' ? 100 : 70,
              }}>
              <Image source={require('../../../assets/Icons/back.png')} />
            </View>
          ),
        }}
      />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default HamburgerStack;
