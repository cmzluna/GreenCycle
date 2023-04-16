import React from 'react';
import {Container, TabLists} from './styles';
import {useSelector} from 'react-redux';
import SwipeableTabs from '../../components/SwipeableTabs';
import UserInfoForm from './components/UserInfoForm';
import UserPoints from './components/UserPoints';
import MyGrowth from './components/MyGrowth';
import UserInfoHeader from './components/UserInfoHeader';

const Profile = () => {
  const scores = useSelector(state => state.scores);
  const {currentPoints, currentBottles, currentWeight} = scores;

  const dataArray = [
    {
      key: 1,
      Component: UserInfoForm,
      title: 'Mis Datos',

      currentPoints,
      // callback:
    },
    {
      key: 2,
      Component: UserPoints,
      title: 'Mi puntaje',

      currentPoints,
      // callback:
    },
    {
      key: 3,
      Component: MyGrowth,
      title: 'Mi crecimiento',
      currentPoints,
      // callback:
    },
    {
      key: 4,
      Component: UserPoints,
      title: 'Movimientos',
      currentPoints,
      // callback:
    },
  ];

  return (
    <Container>
      <UserInfoHeader name="Claudio" />
      <TabLists>
        <SwipeableTabs data={dataArray} />
      </TabLists>
    </Container>
  );
};

export default Profile;
