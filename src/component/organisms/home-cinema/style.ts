import {getFontFromTheme} from './../../../utils/index';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {sizeScale, getColorFromTheme} from '../../../utils';

export const CardWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${sizeScale(ms(210, 0.5), 'px')};
  margin-bottom: 10px;
`;

export const VideoFooterWrapper = styled.View`
  bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const VideoParentalRateWrapper = styled.View`
  margin-right: 15px;
`;

export const VideoControlItems = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const VideoControlItem = styled.View`
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const InnerWrapper = styled.View`
  width: 100%;
  margin-bottom: 5px;
`;

export const ImageWrapper = styled.View`
  height: ${sizeScale(ms(210, 0.5), 'px')};
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${getColorFromTheme('black')};
`;

export const Image = styled(FastImage)`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const FooterWrapper = styled.View`
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding-horizontal: ${sizeScale(ms(16, 0.3), 'px')};
  margin-top: 5px;
`;

export const FooterItemWrapper = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  color: #fff;
`;

export const PGBg = styled.View`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-horizontal: 6px;
  background-color: ${getColorFromTheme('black')};
  justify-content: center;
  align-items: center;
`;

export const PGText = styled.Text`
  color: #fff;
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.3), 'px')};
`;
