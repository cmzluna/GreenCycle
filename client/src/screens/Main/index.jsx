import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header, Title, View} from './styles';

const Main = () => {
  return (
    <SafeAreaView>
      <View>
        <Header>
          <Title>GreenCycle</Title>
        </Header>
      </View>
    </SafeAreaView>
  );
};

export default Main;
