import React from 'react';
import {
  Container,
  Title,
  InnerWrapper,
  LocationWrapper,
  TextComp,
  BoldText,
  OpeningsTimeWrapper,
  OpenText,
  Circle,
} from './styles';
import {Image} from 'react-native';

const LocationItem = ({item}) => {
  return (
    <Container>
      <Title>Centro GreenCycle</Title>
      <InnerWrapper>
        <Image
          source={require('/assets/GreenMapMarker.png')}
          style={{width: 35, height: 50, marginRight: 15}}
        />
        <LocationWrapper>
          <TextComp>Juramento, Mariano Acha &, Buenos Aires</TextComp>
          <BoldText>
            Ubicado en: <TextComp>Plaza Zapiola</TextComp>
          </BoldText>
        </LocationWrapper>
      </InnerWrapper>
      <OpeningsTimeWrapper>
        <Circle />
        <OpenText>Abierto</OpenText>
        <TextComp>11:00 - 14:30</TextComp>
      </OpeningsTimeWrapper>
    </Container>
  );
};

export default LocationItem;
