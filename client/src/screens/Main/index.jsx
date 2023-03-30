import React from 'react';
import {SafeAreaView, Text} from 'react-native';
// import {CircularProgress} from './CircularProgress';
import {Header, Title, View} from './styles';



const Main = () => {
  return (
    <SafeAreaView>
      <Text>
          <Text>{`Hola `}</Text>
          <Text >ANA</Text>
        </Text>
      <View> 
        <Header>
          <Text>{`Tu puntaje `}</Text>
          <Text >1.300</Text>
          </Header>

        <Header>
          <Text>Estadisticas</Text>
         <Text> 
          <Text>PLASTICO </Text>
          {/* <CircularProgress /> */}

          <Text> VIDRIO</Text>
          </Text>
      
          {/* <Title>GreenCycle</Title>
          <Text>This is the home screen</Text> */}
        </Header>
        <Text>Centros de reciclaje</Text>
        
      </View>
    </SafeAreaView>
  );
};


export default Main;
