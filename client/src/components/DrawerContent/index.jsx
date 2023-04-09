import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import LocationItem from '../LocationItem';
import {Container, Title} from './styles';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import BaseButton from '../BaseButton';

const CustomDrawerContent = ({navigation, ...props}) => {
  const locations = useSelector(state => state.locations.list);

  const handleToggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const handlePress = item => {
    console.log('pressed!', item.name);
    handleToggleDrawer();
  };

  const renderItem = ({item}) => {
    return (
      <BaseButton title="SALTAR" onPress={() => handlePress(item)}>
        <LocationItem data={item} {...props} />
      </BaseButton>
    );
  };

  return (
    <Container>
      <Title>Centros de GreenCycle</Title>

      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default CustomDrawerContent;
