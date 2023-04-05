import React from 'react';
import {Container, TabLists} from './styles';
import {useSelector} from 'react-redux';
import ScoresInfo from '../../components/ScoresInfo';
import SwapList from '../../components/SwapList';
import SwipeableTabs from '../../components/SwipeableTabs';

const SwapData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    points: 10,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    points: 15,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item',
    points: 20,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Forth Item',
    points: 20,
  },
];

const DonateData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Donate First Item',
    points: 10,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Donate Second Item',
    points: 15,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Donate Third Item',
    points: 20,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Donate Forth Item',
    points: 20,
  },
];

const Swap = () => {
  const scores = useSelector(state => state.scores);
  const {currentPoints, currentBottles, currentWeight} = scores;

  // implement useSelector of SwapList's DATA
  // 1. swap list
  // 2. donation list

  const steps = [
    {
      level: 4,
      label: 'Sequoia',
      pointsNeeded: 60,
    },
    {
      level: 3,
      label: 'Árbol',
      pointsNeeded: 40,
    },
    {
      level: 2,
      label: 'Brote',
      pointsNeeded: 20,
    },
    {
      level: 1,
      label: 'Semilla',
      pointsNeeded: 10,
    },
    {
      level: 0,
      label: 'En proceso...',
      pointsNeeded: 0,
    },
  ];

  const getCurrentLevel = () => {
    const currentLevel = steps.find(el => currentPoints >= el.pointsNeeded);

    if (!currentLevel) return steps[steps.length - 1];

    return currentLevel;
  };

  const dataArray = [
    {
      key: 1,
      Component: SwapList,
      title: 'Canjear',
      data: SwapData,
    },
    {
      key: 2,
      Component: SwapList,
      title: 'Donar',
      data: DonateData,
    },
  ];

  return (
    <Container>
      <ScoresInfo
        currentPoints={currentPoints}
        currentLevel={getCurrentLevel().label}
      />
      <TabLists>
        <SwipeableTabs data={dataArray} />
      </TabLists>
    </Container>
  );
};

export default Swap;
