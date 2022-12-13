import styled from 'styled-components/native';
import {s, ms} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';

export const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  max-width: 540px;
  padding-left: ${sizeScale(s(16), 'px')};
  padding-right: ${sizeScale(s(16), 'px')};
`;

export const Copyright = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('pale')};
  padding-bottom: 30px;
  padding-left: ${sizeScale(s(16), 'px')};
  padding-right: ${sizeScale(s(16), 'px')};
`;
