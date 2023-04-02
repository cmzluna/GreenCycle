import {Dimensions} from 'react-native';

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
