import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import BaseButton from '../BaseButton';
import {Container, InnerContainer, Title, SubTitle} from './styles';

const BottomSheetComp = ({children}) => {
  // ref
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);
  // callbacks

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  return (
    <Container>
      {children}
      <BottomSheet ref={sheetRef} snapPoints={snapPoints}>
        <BottomSheetView>
          <InnerContainer>
            <Image
              source={require('/assets/GreenMapMarker.png')}
              style={{width: 35, height: 50}}
            />
            <Title>Para una mejor experiencia</Title>
            <SubTitle>
              Si nos das acceso a tu ubicación actual, podemos recomendarte los
              Centros más cercanos.
            </SubTitle>
            <BaseButton
              title="Quizás, mas tarde"
              onPress={() => handleClosePress()}
            />
          </InnerContainer>
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomSheetComp;
