import React from 'react';
import {
  Container,
  UserInfo,
  PointsTitle,
  PointsNumber,
  TabLists,
  GrowthIndicator,
  GrowthTitle,
} from './styles';
import {Image} from 'react-native';

const ScoresInfo = ({currentPoints, currentLevel, icon}) => {
  console.log('icon', icon);
  return (
    <Container>
      <UserInfo>
        <PointsTitle>Tu puntaje</PointsTitle>
        <PointsNumber>{currentPoints}</PointsNumber>
      </UserInfo>

      <GrowthIndicator>
        <GrowthTitle>Tu crecimiento</GrowthTitle>
        <Image
          source={icon}
          style={{
            height: 45,
            width: 50,
            marginRight: 50,
          }}
        />
      </GrowthIndicator>
    </Container>
  );
};

export default ScoresInfo;
