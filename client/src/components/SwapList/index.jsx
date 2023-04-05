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
import {useNavigation} from '@react-navigation/native';

const Item = ({item, onPress, type, navigate}) => {
  console.log('navigate???', navigate);

  const handleOnPress = () => {
    // navigate to SwapConfirmation screen
    console.log('pressed! - navigate! ', item);
    navigate('SwapConfirm');
  };

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
          <Button title={type} onPress={handleOnPress} />
        </InnerWrapper>
      </Wrapper>
    </ItemContainer>
  );
};

const SwapList = ({data, type}) => {
  const [selectedId, setSelectedId] = useState();
  const {navigate} = useNavigation();

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
        navigate={navigate}
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
