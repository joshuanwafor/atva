import * as React from 'react';
import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';
import Heart from '../../atoms/icons/heart';
import TransparentButton from '../../molecules/button/transparent-button';
import {theme} from '../../../style/theme';

export const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ContentWrapper = styled.View`
  position: absolute;
  bottom: 20px;
  padding-left: ${sizeScale(s(20), 'px')};
  padding-right: ${sizeScale(s(20), 'px')};
  max-width: 540px;
  width: 100%;
  align-self: center;
`;

export const TitleContent = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(18, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('white')};
`;

export const SubTitleContent = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('brownishGrey')};
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
