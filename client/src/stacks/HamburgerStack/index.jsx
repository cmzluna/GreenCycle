import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';
import FAQs from '../../screens/Faqs';
import News from '../../screens/News';
import Contact from '../../screens/Contact';

const HamburgerStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default HamburgerStack;
