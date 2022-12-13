import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {sizeScale, getColorFromTheme, getFontFromTheme} from '../../../utils';

export const CardWrapper = styled.View<{hasSize?: boolean}>`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({hasSize}) => (hasSize ? sizeScale(ms(110, 0.3), 'px') : 'auto')};
`;

export const InnerWrapper = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.View`
  border-radius: 500px;
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;
  padding: 1px;
  background-color: ${getColorFromTheme('blackThree')};
`;

export const Image = styled(FastImage)`
  width: 100%;
  height: 100%;
  background-color: ${getColorFromTheme('blackThree')};
`;

export const ArtistName = styled.Text`
  color: #fff;
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.3), 'px')};
  text-align: center;
  margin-top: 7px;
`;

export const ArtistImageContainer = styled.View`
  width: ${sizeScale(ms(80, 0.3), 'px')};
  height: ${sizeScale(ms(80, 0.3), 'px')};
  position: relative;
  background-color: ${getColorFromTheme('orangeTwo')};
  border-radius: 500px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 1px;
`;

export const ArtistImageWrapper = styled(LinearGradient)`
  width: ${sizeScale(ms(102, 0.3), 'px')};
  height: ${sizeScale(ms(102, 0.3), 'px')};
  position: relative;
  background-color: ${getColorFromTheme('orangeTwo')};
  border-radius: 500px;
  padding: 1px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
