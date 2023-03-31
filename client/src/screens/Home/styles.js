import styled from 'styled-components/native';

const View = styled.View`
  display: flex;
  background-color: #fff;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: flex-end;
  height: 100px;
  width: 80%;
  background-color: #dbe4c6;
  border: 1px solid #94af9f;
`;

const Title = styled.Text`
  color: #000;
  color: #94af9f;
  font-size: 32px;
`;

export {View, Header, Title};
