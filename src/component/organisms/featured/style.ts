import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {theme} from '../../../style/theme';
import {sizeScale, getColorFromTheme} from '../../../utils';

const TextAnimated = Animated.Text;

export const Wrapper = styled.View`
  margin-bottom: 20px;
  width: 100%;
`;

export const TabItemWrapper = styled.View`
  width: 100%;
`;

export const TabLinkTitle = styled(TextAnimated)<{active: boolean}>`
  font-family: ${({active}) =>
    active ? theme.font.demiBold : theme.font.medium};
  font-size: ${sizeScale(ms(24, 0.3), 'px')};
`;

export const Text = styled.Text`
  color: white;
`;

export const CardWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  width: ${sizeScale(ms(280, 0.3), 'px')};
  height: ${sizeScale(ms(400, 0.3), 'px')};
`;

export const InnerWrapper = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 6px;
  position: relative;
`;

export const ImageWrapper = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${getColorFromTheme('blackThree')};
  border-radius: 8px;
`;

export const Image = styled(FastImage)`
  width: 100%;
  min-height: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

export const InnerItemWrapper = styled.View`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  justify-content: flex-end;
  align-items: center;
  padding-horizontal: 20px;
  min-height: 55px;
`;

export const TitleImage = styled(FastImage)`
  min-height: 100%;
  justify-content: flex-end;
  align-items: baseline;
  width: 100%;
`;
