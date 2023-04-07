import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

const InnerContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 21px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 21px;
`;

const SubTitle = styled.Text`
  font-size: 18px;
`;
export {Container, InnerContainer, Title, SubTitle};
