import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import ButtonText from './button-text';
import {sizeScale} from '../../utils';

const ButtonTextSmall = styled(ButtonText)`
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
`;

export default ButtonTextSmall;
