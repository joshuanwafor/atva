import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';

export const Wrapper = styled.View`
  flex-direction: row;
  background-color: ${getColorFromTheme('blackTwoV2')};
  border-radius: 6px;
  align-items: center;
  padding-horizontal: 20px;
  padding-vertical: 8px;
`;

export const Input = styled.TextInput`
  background-color: transparent;
  width: 100%;
  margin: 0;
  flex: 1;
  padding: 0;
  padding-top: 0;
  top: 0px;
  height: 100%;
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
  font-size: ${sizeScale(ms(16, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: #fff;
`;

export const IconWrapper = styled.View`
  width: 25px;
  height: 25px;
`;

export const InputWrapper = styled.View`
  margin-left: 10px;
  flex: 1;
`;
