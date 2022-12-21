import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';

export const Wrapper = styled.View`
  background-color: ${getColorFromTheme('blackTwoV2')};
  padding-bottom: 12px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(16, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
`;

export const TitleWrapper = styled.View`
  padding-left: ${sizeScale(s(12), 'px')};
  padding-right: ${sizeScale(s(12), 'px')};
  margin-bottom: 15px;
`;

export const CardWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: ${sizeScale(ms(220, 0.3), 'px')};
  border-color: ${getColorFromTheme('white10')};
  border-width: 1px;
`;

export const InnerWrapper = styled.View`
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  position: relative;
`;

export const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: ${getColorFromTheme('blackThree')};
`;

export const Image = styled(FastImage)`
  width: 100%;
  height: ${sizeScale(ms(250, 0.3), 'px')};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
  background-color: ${getColorFromTheme('blackThree')};
`;

export const FooterWrapper = styled.View`
  background-color: ${getColorFromTheme('blackTwoV2')};
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  height: auto;
  width: 100%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  flex: 1 0 auto;
`;

export const FooterTitleWrapper = styled.View`
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  flex: 1 0 auto;
`;

export const FooterTitle = styled.Text`
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(18, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
  margin-left: 60px;
  margin-bottom: 10px;
`;

export const FooterPosterWrapper = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${getColorFromTheme('blackThree')};
  position: absolute;
  left: 0;
  top: -30px;
  border-radius: 6px;
`;

export const PosterImage = styled(FastImage)`
  width: auto;
  height: 50px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
`;
