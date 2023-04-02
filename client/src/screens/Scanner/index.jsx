import React, {useState} from 'react';
import {BarCodeScanner} from 'expo-barcode-scanner/build/BarCodeScanner';
import {
  Wrapper,
  CameraWrapper,
  ScannerWrapper,
  Overlay,
  TopPadding,
  MiddleWrapper,
  MiddlePadding,
  BottomPadding,
  ViewFinder,
} from './styles';
import {
  isValidJson,
  validateNumber,
  validateString,
  validateObject,
} from '../../utils';

const Scanner = ({navigation: {navigate}}) => {
  const [scanned, setScanned] = useState(false);
  const [viewFinder, setViewFinder] = useState({
    w: 0,
    h: 0,
    offsetX: 0,
    offsetY: 0,
  });

  const validateQr = data => {
    const qrData = isValidJson(data) && JSON.parse(data);
    const isValidQrData =
      validateObject(qrData) && !!Object.keys(qrData).length;

    if (!isValidQrData) false;

    const {location, points} = qrData;

    if (
      !(
        location &&
        validateString(location) &&
        points &&
        validateNumber(points)
      )
    )
      return false;

    return true;
  };

  const handleOnBarCodeScanned = scannedValue => {
    if (!scannedValue) return null;
    setScanned(true);

    const {data} = scannedValue;
    const qrIsValid = validateQr(data);
    console.log('qrIsValid  = ', qrIsValid);

    if (!qrIsValid) return console.log('invalid QR');

    return navigate('Home');
  };

  const handleCloseCamera = () => {
    navigate('Home');
  };

  // animationType in case of switching back to modal
  return (
    <Wrapper animationType="slide" onRequestClose={handleCloseCamera}>
      <ScannerWrapper>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleOnBarCodeScanned}
          style={{flex: 1}}
        />
      </ScannerWrapper>

      <Overlay>
        <TopPadding />
        <MiddleWrapper>
          <MiddlePadding />
          <ViewFinder
            onLayout={event =>
              event.target.measure((x, y, w, h, offsetX, offsetY) =>
                setViewFinder({w, h, offsetX, offsetY}),
              )
            }
            testID="viewFinder"
          />
          <MiddlePadding />
        </MiddleWrapper>
        <BottomPadding />
      </Overlay>
    </Wrapper>
  );
};

export default Scanner;
