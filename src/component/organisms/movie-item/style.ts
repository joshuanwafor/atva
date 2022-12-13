import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import FastImage from 'react-native-fast-image';
import {sizeScale, getColorFromTheme, getFontFromTheme} from '../../../utils';

const {width} = Dimensions.get('window');

export const CardWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: ${() =>
    DeviceInfo.isTablet() ? `${ms(390, 0.3)}px` : `${width - 24}px`};
  min-height: ${sizeScale(ms(260, 0.3), 'px')};
`;

export const ControlWrapper = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const ControlItemWrapper = styled.View`
  width: 40px;
  height: 40px;
`;

export const VideoFooterWrapper = styled.View`
  bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
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
  border-radius: 10px;
  height: ${sizeScale(ms(220, 0.3), 'px')};
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${getColorFromTheme('blackTwoV2')};
`;

export const LoaderWrapper = styled.View`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(FastImage)`
  width: 100%;
  min-height: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

export const FooterWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const LogoWrapper = styled.View`
  margin-right: 15px;
  width: auto;
  height: 60px;
  justify-content: center;
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(18, 0.3), 'px')};
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

export const Title = styled.Text`
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(18, 0.2), 'px')};
`;
