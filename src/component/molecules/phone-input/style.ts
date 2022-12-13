import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';

export const Wrapper = styled.View`
  width: 100%;
`;

export const InnerWrapper = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
`;

export const InputWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CodeWrapper = styled.View`
  width: auto;
  margin-right: 15px;
  overflow: hidden;
`;

export const CodeItemWrapper = styled.View`
  height: 46px;
  padding-vertical: 8px;
  padding-horizontal: 14px;
  flex-direction: row;
  background-color: ${getColorFromTheme('blackTwoV2')};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const CodeImageWrapper = styled.View`
  margin-right: 8px;
  opacity: 0.8;
  width: 25px;
  height: 19px;
`;

export const CodeText = styled.Text`
  background-color: transparent;
  text-align: left;
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: ${getColorFromTheme('white')};
`;

export const TextInput = styled.TextInput`
  background-color: ${getColorFromTheme('blackTwoV2')};
  border-radius: 6px;
  width: 100%;
  margin: 0;
  flex: 1;
  padding-vertical: ${sizeScale(ms(6, 0.2), 'px')};
  padding-horizontal: ${sizeScale(ms(12, 0.2), 'px')};
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
  font-size: ${sizeScale(ms(16, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: #fff;
`;

export const HelperText = styled.Text`
  background-color: transparent;
  padding-vertical: 2px;
  text-align: left;
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: ${getColorFromTheme('white70')};
  margin-top: 10px;
`;
