import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

const ItemContainer = styled.TouchableOpacity`
  padding: 20px;
  margin: 8px;
  border: 2px solid #6ac52d;
  border-radius: 14px;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const InnerWrapper = styled.View`
  display: flex;
  flex: 1;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
`;

const ItemPoints = styled.Text`
  font-size: 12px;
`;

export {Container, ItemContainer, Wrapper, ItemTitle, ItemPoints, InnerWrapper};
