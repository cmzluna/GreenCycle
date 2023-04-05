import React, {useState} from 'react';
import {
  Container,
  Wrapper,
  ItemContainer,
  InnerWrapper,
  ItemTitle,
  ItemPoints,
  Button,
} from './styles';
import {FlatList, Image} from 'react-native';

const Item = ({item, onPress, textColor, type}) => {
  console.log('item type', item.type);
  return (
    <ItemContainer onPress={onPress}>
      <Wrapper>
        <InnerWrapper>
          <Image source={item.icon} />
        </InnerWrapper>
        <InnerWrapper>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPoints>{item.points} puntos</ItemPoints>
          <Button title={type} onPress={() => console.log('pressed! ')} />
        </InnerWrapper>
      </Wrapper>
    </ItemContainer>
  );
};

const SwapList = ({data, type}) => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        type={type}
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
