import styled from 'styled-components/native';

const Fields = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
  height: 100%;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid red;
`;

const ActionsContainer = styled.View`
  display: flex;
  margin: 8px;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: #fff;
`;

const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

const TextComp = styled.Text`
  color: #000;
  font-size: 14px;
`;

const Link = styled(TextComp)`
  font-size: 20px;
  font-weight: bold;
`;
export {Fields, ActionsContainer, Title, Link, TextComp};
