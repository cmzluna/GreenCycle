import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import LocationItem from '../LocationItem';
import {Container, Title} from './styles';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Title>Centros de GreenCycle</Title>
        <LocationItem />
        <LocationItem />
        <LocationItem />
        <LocationItem />
        <LocationItem />
      </Container>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
