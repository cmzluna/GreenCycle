import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:column ;
  height: 100%;
  width: 100%;
  background-color: #FBFDF9;
`;


const NavbarHome=styled.View`
  width: 100%;
  height: 50px;
  background: green;
  display: flex;
  align-items:center;  
  flex-direction:row;
  justify-content:space-around;
`
const ProfileBtn=styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background: yellow;
  margin-left:5px ;
  display: flex;
  border-radius:30px ;
  justify-content: center;
  align-items:center;
`
const TitleHome = styled.Text`
  color: #000000;
  font-size: 24px;
  width: 150px;
  text-align:center;
  height: auto;
  display: flex;
  margin :auto;
  justify-content: space-between;
`;
const DotsBtn=styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: transparent;
  color: black;
  transform:rotate(90deg);
  display: flex;
  justify-content:center;
  align-items:center;
  margin-right:5px;  
`;
const BoxPointsData=styled.View`
  height: 20%;
  width: 90%;
  border: 2px solid black;
  margin-top:20px;
`
const TicketsAviable=styled.View`
  width: 90%;
  height: 65% ;
  border: 2px solid black;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
const TagsContainer=styled.View`
    width: 90%;
    height: 20%;
    display: flex;
    flex-Direction:row;
    align-Items:center;
    justify-Content:space-around;
`

export {Container, NavbarHome
        ,ProfileBtn,TitleHome
        ,DotsBtn,BoxPointsData
        ,TicketsAviable,TagsContainer};
