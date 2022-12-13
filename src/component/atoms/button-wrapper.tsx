import styled from 'styled-components/native';
import {s} from 'react-native-size-matters';
import {sizeScale} from '../../utils';

const ButtonWrapper = styled.View`
  padding-left: ${sizeScale(s(16), 'px')};
  padding-right: ${sizeScale(s(16), 'px')};
  max-width: 540px;
  align-self: center;
  width: 100%;
  z-index: 1;
  padding-bottom: 5px;
`;

export default ButtonWrapper;
