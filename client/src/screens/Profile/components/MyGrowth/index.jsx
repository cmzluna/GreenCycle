import React from 'react';
import {
  Container,
  Box,
  BoxLabel,
  InnerWrapper,
  PointsTitle,
  PointsNumber,
  ListTitle,
  Separator,
} from './styles';
import {getCurrentLevel} from 'utils';
import {Image} from 'react-native';
import {steps} from 'utils';
import LevelsList from '../LevelsList';

const MyGrowth = ({data}) => {
  const {
    scores: {currentPoints, currentBottles},
  } = data;

  const {icon, level} = getCurrentLevel(currentPoints);
  const sortedSteps = steps.sort((a, b) => a.level - b.level);

  const filteredSortedSteps = sortedSteps;
  console.log('currentPoints ==', currentPoints);
  console.log('level ==', level);

  return (
    <Container>
      <Image
        source={icon}
        style={{
          height: 55,
          width: 55,
          marginTop: 25,
          marginBottom: 10,
        }}
      />
      <PointsNumber>{currentBottles}</PointsNumber>
      <PointsTitle>Botellas recicladas</PointsTitle>
      <Separator />
      <ListTitle>Tu jardín</ListTitle>
      <LevelsList
        data={sortedSteps}
        currentLevel={level}
        currentPoints={currentPoints}
      />
    </Container>
  );
};

export default MyGrowth;
