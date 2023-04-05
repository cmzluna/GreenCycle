import React, {useState} from 'react';
import {
  Container,
  Wrapper,
  ItemContainer,
  InnerWrapper,
  ItemTitle,
  ItemPoints,
} from './styles';
import {FlatList} from 'react-native';

const Item = ({item, onPress, textColor}) => (
  <ItemContainer onPress={onPress}>
    <Wrapper>
      <InnerWrapper>
        <ItemTitle>{item.title}</ItemTitle>
      </InnerWrapper>
      <InnerWrapper>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPoints>{item.points}</ItemPoints>
      </InnerWrapper>
    </Wrapper>
  </ItemContainer>
);

const SwapList = ({data}) => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </Container>
  );
};

export default SwapList;
