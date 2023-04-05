import React from 'react';
import {BoxPointsData, Container, DotsBtn, NavbarHome,ProfileBtn, TagsContainer, TicketsAviable, TitleHome,BoxTickets, ContainerGiftData} from './styles';
import { Text,StyleSheet,View,ScrollView,TouchableOpacity } from 'react-native';

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
          <Text style={pointsText.fontTextgrow}>Tu crecimiento</Text>
          <Text style={pointsText.fontTextgrow}>logo</Text>

          </View>
      </BoxPointsData>
      <TicketsAviable>
        <TagsContainer>
          < TouchableOpacity style={tagsAnimation.size}>
            <Text  style={tagsAnimation.fontDisplay}>Canjear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tagsAnimation.size}>
            <Text style={tagsAnimation.fontDisplay}>Donar</Text>
          </TouchableOpacity>
        </TagsContainer>
        <ScrollView style={viewStylesScroll.resize} showsVerticalScrollIndicator={false}  contentContainerStyle={{ alignItems:'center',justifyContent:'space-between',display:'flex',flexDirection:'column'}}>
        <BoxTickets>
        <ContainerGiftData><Text>Logo</Text></ContainerGiftData>
        <ContainerGiftData>
        <Text style={redeemPoint.title}>Bicicleta</Text>
        <Text style={redeemPoint.subTitle}>1150 puntos</Text>
        <TouchableOpacity style={redeemPoint.btnRedeem}><Text>Logo</Text></TouchableOpacity>
        </ContainerGiftData>
        </BoxTickets>
       
        <BoxTickets>
        <ContainerGiftData><Text>Logo</Text></ContainerGiftData>
        <ContainerGiftData>
        <Text style={redeemPoint.title}>Bicicleta</Text>
        <Text style={redeemPoint.subTitle}>1150 puntos</Text>
        <TouchableOpacity style={redeemPoint.btnRedeem}><Text>Logo</Text></TouchableOpacity>
        </ContainerGiftData>
        </BoxTickets>

        <BoxTickets>
        <ContainerGiftData><Text>Logo</Text></ContainerGiftData>
        <ContainerGiftData>
        <Text style={redeemPoint.title}>Bicicleta</Text>
        <Text style={redeemPoint.subTitle}>1150 puntos</Text>
        <TouchableOpacity style={redeemPoint.btnRedeem}><Text>Logo</Text></TouchableOpacity>
        </ContainerGiftData>
        </BoxTickets>
        <BoxTickets>
        <ContainerGiftData><Text>Logo</Text></ContainerGiftData>
        <ContainerGiftData>
        <Text style={redeemPoint.title}>Bicicleta</Text>
        <Text style={redeemPoint.subTitle}>1150 puntos</Text>
        <TouchableOpacity style={redeemPoint.btnRedeem}><Text>Logo</Text></TouchableOpacity>
        </ContainerGiftData>
        </BoxTickets>
        



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
    backgroundColor:'#6AC52D',
    alignItems:'center',
    borderRadius:10,
  },
  fontPoints:{
    fontSize:28,
    color:'white',
    fontWeight:600
  },
  fontTextPoints:{
    fontSize:16,
    color:'white',
    fontWeight:600
  },
  fontTextgrow:{
    fontSize:16,
    color:'#259E73',
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
const redeemPoint=StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:600,
    color:'black'
  },
  subTitle:{
    fontSize:14,
    color:'black'
  },
  btnRedeem:{
    width:'90%',
    height:'30%',
    backgroundColor:'#DADD33',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  }
})
export default Donate;
