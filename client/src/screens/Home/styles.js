import styled from 'styled-components/native';

const View = styled.View`
  display: flex;
  background-color: #dbe4c6;
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
  background-color: #ffffff;
  border: 1px solid #94af9f;
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
  background: gray;
  margin-left:5px ;
  display: flex;
  border-radius:30px ;
  justify-content: center;
  align-items:center;
  
`
const NavbarHome=styled.View`
  width: 100%;
  height: 50px;
  background: #989898;
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

export {View, Header, TitleHome,ProfileBtn,NavbarHome,DotsBtn};
