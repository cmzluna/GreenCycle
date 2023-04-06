import React from 'react';
import {
  Container,
  InnerWrapper,
  Button,
  PointsText,
  Title,
  SubTitle,
  ProfileCircle,
  InnerProfileCircle,
} from './styles';
import {Image} from 'react-native';
import {Provider, Portal, Modal} from 'react-native-paper';

const SwapConfirm = ({route, navigation}) => {
  const {points, entityName, entityId, icon, type} = route.params;
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false);
    return navigation.navigate('Home');
  };

  const handleOnPress = () => showModal(true);

  return (
    <Provider>
      <Container>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{
              width: 237,
              height: 237,
              position: 'relative',
              backgroundColor: '#f1f2b1',
              borderRadius: 8,
              alignSelf: 'center',
            }}>
            <ProfileCircle>
              <Image
                source={require('../../../assets/PersonProfileCircle.png')}
                style={{
                  height: 90,
                  width: 90,
                }}
              />
            </ProfileCircle>
            <Title>{type === 'Canjear' ? 'Canjeaste' : 'Donaste'}</Title>
            <PointsText>{points} puntos</PointsText>
            <SubTitle>¡Muchas gracias!</SubTitle>
          </Modal>
        </Portal>

        {!visible && (
          <>
            <Title>Estás a punto de {type}...</Title>
            <InnerWrapper>
              <Image source={icon} />
              <PointsText>{points} puntos</PointsText>
              <SubTitle>{entityName}</SubTitle>
              <Button title={type} onPress={handleOnPress} />
            </InnerWrapper>
          </>
        )}
      </Container>
    </Provider>
  );
};

export default SwapConfirm;
