import React, {useState} from 'react';
import {Container, TabLists} from './styles';
import {useSelector} from 'react-redux';
import ScoresInfo from '../../components/ScoresInfo';
import SwapList from '../../components/SwapList';
import SwipeableTabs from '../../components/SwipeableTabs';
import ModalComponent from '../../components/Modal';

const SwapData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1 Pasaje',
    points: 10,
    icon: require('../../../assets/Icons/ticket.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Alquiler de bici',
    points: 15,
    icon: require('../../../assets/Icons/ticket.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Cena para dos',
    points: 20,
    icon: require('../../../assets/Icons/ticket.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Box gift',
    points: 20,
    icon: require('../../../assets/Icons/ticket.png'),
  },
];

const DonateData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Greenpeace',
    points: 50,
    icon: require('../../../assets/Icons/donateHand.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'El cambio posible',
    points: 15,
    icon: require('../../../assets/Icons/donateHand.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Hogar sin techo',
    points: 20,
    icon: require('../../../assets/Icons/donateHand.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Caritas',
    points: 20,
    icon: require('../../../assets/Icons/donateHand.png'),
  },
];

const steps = [
  {
    level: 4,
    label: 'Sequoia',
    pointsNeeded: 60,
    icon: require('../../../assets/levelsIcons/brote.png'),
  },
  {
    level: 3,
    label: 'Árbol',
    pointsNeeded: 40,
    icon: require('../../../assets/levelsIcons/brote.png'),
  },
  {
    level: 2,
    label: 'Brote',
    pointsNeeded: 20,
    icon: require('../../../assets/levelsIcons/brote.png'),
  },
  {
    level: 1,
    label: 'Semilla',
    pointsNeeded: 10,
    icon: require('../../../assets/levelsIcons/semilla.png'),
  },
  {
    level: 0,
    label: 'En proceso...',
    pointsNeeded: 0,
    icon: require('../../../assets/levelsIcons/semilla.png'),
  },
];

export const getCurrentLevel = currentPoints => {
  const currentLevel = steps.find(el => currentPoints >= el.pointsNeeded);

  if (!currentLevel) return steps[steps.length - 1];

  return currentLevel;
};

const Swap = () => {
  const [showModal, setShowModal] = useState(false);
  const scores = useSelector(state => state.scores);
  const {currentPoints, currentBottles, currentWeight} = scores;

  // implement useSelector of SwapList's DATA
  // 1. swap list
  // 2. donation list

  const dataArray = [
    {
      key: 1,
      Component: SwapList,
      title: 'Canjear',
      data: SwapData,
      // callback:
    },
    {
      key: 2,
      Component: SwapList,
      title: 'Donar',
      data: DonateData,
      // callback:
    },
  ];

  return (
    <Container>
      <ScoresInfo
        currentPoints={currentPoints}
        currentLevel={getCurrentLevel(currentPoints).label}
        icon={getCurrentLevel(currentPoints).icon}
      />
      <TabLists>
        <SwipeableTabs data={dataArray} />
      </TabLists>

      {/*  Not implemented yet */}
      <ModalComponent
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        onBackButtonPress={() => setShowModal(false)}>
        <ScoresInfo
          currentPoints={currentPoints}
          currentLevel={getCurrentLevel(currentPoints).label}
          icon={getCurrentLevel(currentPoints).icon}
        />
      </ModalComponent>
    </Container>
  );
};

export default Swap;
