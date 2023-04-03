import styled from 'styled-components/native';

const View = styled.View`
  display: flex;
  background-color: #fff;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:column ;
  height: 100%;
  width: 100%;
  background-color: #FBFDF9;
  
`;

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
const NavbarHome=styled.View`
  width: 100%;
  height: 50px;
  background: green;
  display: flex;
  align-items:center;  
  flex-direction:row;
  
`
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
`
const BoxHomeTag=styled.View`
  width: 90%;
  height: 30%;
`
const BoxUserPoints=styled.View`
  width: 100%;
  height: 60%;
  border: 1px solid grey;
  border-radius: 10px ;
  display: flex;
  flex-direction:column ;
`
const CounterLevel=styled.View`
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction:row ;
  align-items:center;
  justify-content:center;
`
const MapDisplay=styled.View`
 display: flex;
  width: 100%;
  height: 80%;
  flex-direction:row ;
  align-items:center;
  justify-content:center;
  border: 2px solid black;
  margin-top:4px ;
  border-radius: 10px ;
`

export {View, Header, 
  TitleHome,ProfileBtn,
  NavbarHome,DotsBtn,
  BoxHomeTag,BoxUserPoints,
  CounterLevel,MapDisplay};
