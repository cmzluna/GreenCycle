import React from 'react';
import {InnerContainer, Title, SubTitle} from './styles';
import {Image} from 'react-native';
import BaseButton from '../BaseButton';

const LocationsInfoSheet = ({selectedLocation}) => {
  const {id, name, address, city, coordinates, openingTimes} = selectedLocation;

  return (
    <InnerContainer>
      <Image
        source={require('/assets/GreenMapMarker.png')}
        style={{width: 35, height: 50}}
      />
      <Title>{name}</Title>
      <SubTitle>{address}</SubTitle>

      <BaseButton
        title="Quizás, mas tarde"
        onPress={() => console.log('hola')}></BaseButton>
    </InnerContainer>
  );
};

export default LocationsInfoSheet;
