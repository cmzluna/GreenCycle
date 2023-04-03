import React from 'react';
import {BoxPointsData, Container, DotsBtn, NavbarHome,ProfileBtn, TagsContainer, TicketsAviable, TitleHome} from './styles';
import { Text,StyleSheet,View,ScrollView } from 'react-native';

const Donate = () => {
  return (
    <Container>
      <NavbarHome>
        <ProfileBtn>
        <Text>T</Text>
        </ProfileBtn>
        <TitleHome>
          GreenCycle
        </TitleHome>
        <DotsBtn><Text style={styles.fontText}>. . . </Text></DotsBtn>
      </NavbarHome>
      <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>
      <TicketsAviable>
        <TagsContainer>
          <View  style={tagsAnimation.size}>
            <Text  style={tagsAnimation.fontDisplay}>Canjear</Text>
          </View>
          <View  style={tagsAnimation.size}>
            <Text style={tagsAnimation.fontDisplay}>Donar</Text>
          </View>
        </TagsContainer>
        <ScrollView style={viewStylesScroll.resize}  contentContainerStyle={{ alignItems:'center'}}>

        <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>
      <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>
      <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>
      <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>
      <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>
      <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>
      <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>

       <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>
      <BoxPointsData>
      <View style={pointsText.boxContainerPoints} >
          <Text style={pointsText.fontTextPoints}>Puntaje acumulado</Text>
          <Text style={pointsText.fontPoints}>1400</Text>
          </View>
          <View style={pointsText.boxContainer}>
          <Text style={pointsText.fontTextPoints}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextPoints}>logo</Text>

          </View>
      </BoxPointsData>

        </ScrollView>

      </TicketsAviable>
    </Container>
  );
};
const styles = StyleSheet.create({
  fontText: {
    fontSize:20,
    fontWeight:800,
    width:'80%',
    height:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    }
});
const pointsText=StyleSheet.create({
  boxContainer:{
    width:'100%',
    height:'50%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
  },
  boxContainerPoints:{
    width:'100%',
    height:'50%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'green',
    alignItems:'center',
    borderRadius:10,
  },
  fontPoints:{
    fontSize:28,
    color:'black',
    fontWeight:600
  },
  fontTextPoints:{
    fontSize:16,
    color:'black',
    fontWeight:600
  }
})
const tagsAnimation=StyleSheet.create({
  size:{
    width:'40%',
    height:'60%',
    borderBottomWidth:2,
    borderBottomColor:'blue',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    
  },
  fontDisplay:{
    fontSize:20,
    fontWeight:200,
    color:'black'
  }
})
const viewStylesScroll=StyleSheet.create({
  resize:{
    width:'100%',
    height:'75%',
  }
})
export default Donate;
