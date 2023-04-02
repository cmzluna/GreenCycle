import styled from 'styled-components/native';
import {getScale} from '../../utils';

const {horizontalScale, verticalScale} = getScale();

const Wrapper = styled.View`
  flex: 1;
  position: relative;
`;

const ScannerWrapper = styled.View`
  flex: 1;
`;

const Overlay = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TopPadding = styled.View`
  flex: 1.5;
  background-color: black;
`;

const MiddleWrapper = styled.View`
  flex: 2.5;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
`;

const MiddlePadding = styled.View`
  background-color: black;
  height: ${verticalScale(328)}px;
  width: ${horizontalScale(17)}px;
`;

const BottomPadding = styled.View`
  flex: 1.5;
  background-color: black;
`;

const ViewFinder = styled.View`
  background-color: black;
  height: ${verticalScale(327)}px;
  width: ${horizontalScale(328)}px;
  opacity: 0.4;
`;
export {
  Wrapper,
  ScannerWrapper,
  Overlay,
  TopPadding,
  MiddleWrapper,
  MiddlePadding,
  BottomPadding,
  ViewFinder,
};
