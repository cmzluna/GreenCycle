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

const ScoresInfo = ({currentPoints, currentLevel}) => {
  console.log('scores', currentPoints);
  return (
    <Container>
      <UserInfo>
        <PointsTitle>Tu puntaje</PointsTitle>
        <PointsNumber>{currentPoints}</PointsNumber>
      </UserInfo>

      <GrowthIndicator>
        <GrowthTitle>Tu crecimiento</GrowthTitle>
        <GrowthTitle>Icon</GrowthTitle>
      </GrowthIndicator>
    </Container>
  );
};

export default ScoresInfo;
