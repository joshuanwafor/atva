import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../../utils';

export const CardWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: ${sizeScale(ms(100, 0.3), 'px')};
  height: ${sizeScale(ms(125, 0.3), 'px')};
`;

export const InnerWrapper = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
`;

export const ItemWrapper = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Time = styled.Text`
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: center;
  margin-top: 5px;
`;

export const WatchingOverlay = styled(LinearGradient)`
  width: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ImageWrapper = styled.View`
  border-radius: 6px;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${getColorFromTheme('blackThree')};
`;

export const Image = styled(FastImage)`
  width: 100%;
  min-height: 100%;
  border-radius: 6px;
`;
