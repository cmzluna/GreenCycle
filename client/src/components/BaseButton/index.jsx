import React from 'react';
import {Pressable, Animated, Image, StyleSheet} from 'react-native';
import {TextComp} from './styles';

const BaseButton = ({title, onPress}) => {
  const animated = new Animated.Value(1);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPress={onPress} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View style={[styles.button, {opacity: animated}]}>
        <TextComp>{title}</TextComp>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 36,
  },
  button: {
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    borderRadius: 6,
  },
  buttonText: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default BaseButton;
