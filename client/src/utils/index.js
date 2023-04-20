import {Dimensions} from 'react-native';
import Rosa from '/assets/levelsIcons/Rosa.png';
import Pasto from '/assets/levelsIcons/Pasto.png';

export const getScale = () => {
  const {width, height} = Dimensions.get('screen');
  const baseWidth = 360;
  const baseHeight = 720;

  const horizontalScale = size => Math.floor((width / baseWidth) * size);
  const verticalScale = size => Math.floor((height / baseHeight) * size);

  return {horizontalScale, verticalScale};
};

export const promiseWrapper = promise =>
  promise
    .then(data => [data, null])
    .catch(error => Promise.resolve([null, error]));

export const isValidJson = str => {
  try {
    JSON.parse(str);
  } catch (reason) {
    return false;
  }
  return true;
};

export const validateObject = obj => !!(obj && obj.constructor === Object);

export const validateString = str => !!(typeof str === 'string');

export const validateNumber = num =>
  typeof num === 'number' && !Number.isNaN(Number(num));

export const validateQr = data => {
  const qrData = isValidJson(data) && JSON.parse(data);
  const isValidQrData = validateObject(qrData) && !!Object.keys(qrData).length;

  if (!isValidQrData) false;

  const {location, points} = qrData;

  if (
    !(location && validateString(location) && points && validateNumber(points))
  )
    return false;

  return true;
};

export const steps = [
  {
    level: 9,
    label: 'Rosa',
    pointsNeeded: 100,
    icon: Rosa,
  },
  {
    level: 8,
    label: 'Pino',
    pointsNeeded: 80,
    icon: require('../../assets/levelsIcons/Pino.png'),
  },
  {
    level: 7,
    label: 'Girasol',
    pointsNeeded: 70,
    icon: require('../../assets/levelsIcons/Girasol.png'),
  },
  {
    level: 6,
    label: 'Cáctus',
    pointsNeeded: 60,
    icon: require('../../assets/levelsIcons/Cactus.png'),
  },
  {
    level: 5,
    label: 'Árbol',
    pointsNeeded: 50,
    icon: require('../../assets/levelsIcons/Arbol.png'),
  },
  {
    level: 4,
    label: 'Margarita',
    pointsNeeded: 40,
    icon: require('../../assets/levelsIcons/Margarita.png'),
  },
  {
    level: 3,
    label: 'Maceta',
    pointsNeeded: 30,
    icon: require('../../assets/levelsIcons/Maceta.png'),
  },
  {
    level: 2,
    label: 'Brote',
    pointsNeeded: 20,
    icon: require('../../assets/levelsIcons/Brote.png'),
  },
  {
    level: 1,
    label: 'Semilla',
    pointsNeeded: 10,
    icon: require('../../assets/levelsIcons/Semilla.png'),
  },
  {
    level: 0,
    label: 'Pasto',
    pointsNeeded: 0,
    icon: Pasto,
  },
];

export const getCurrentLevel = currentPoints => {
  const sortedSteps = steps.sort((a, b) => a.level - b.level);

  const currentLevel = sortedSteps.find(el => currentPoints <= el.pointsNeeded);

  if (!currentLevel) return steps[steps.length - 1];

  return currentLevel;
};

export const IS_ANDROID = Platform.OS === 'android';

export const DEFAULT_CENTER_COORDINATE = [-77.036086, 38.910233];
// Buenos Aires: [-58.5733822,-34.6157437]
