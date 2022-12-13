import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {getColorFromTheme} from '../../../utils';

export const MoImage = styled(FastImage)`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  background-color: transparent;
`;
