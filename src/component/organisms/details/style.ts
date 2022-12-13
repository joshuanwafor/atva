import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../../utils';

export const CaptionItemWrapper = styled.View`
  padding-bottom: ${sizeScale(ms(20, 0.3), 'px')};
  z-index: 1;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  align-self: flex-end;
  padding-top: 20px;
`;

export const FooterWrapper = styled(Animated.View)`
  width: 100%;
  padding-left: ${sizeScale(s(12), 'px')};
  padding-right: ${sizeScale(s(12), 'px')};
  align-self: flex-end;
`;

export const FooterInnerWrapper = styled.View`
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  align-self: flex-end;
`;

export const TitleWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(22, 0.2), 'px')};
  margin-bottom: 10px;
`;

export const TimeWrapper = styled.View`
  padding-vertical: 2px;
  padding-horizontal: 4px;
  border-radius: 4px;
  border-color: ${getColorFromTheme('alt')};
  border-width: 1px;
  justify-content: center;
  margin-left: 10px;
`;

export const TimeText = styled.Text`
  text-align: center;
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  color: ${getColorFromTheme('alt')};
  font-family: ${getFontFromTheme('medium')};
`;

export const ProgressWrapper = styled.View`
  width: 100%;
`;

export const ProgressTime = styled.Text`
  text-align: right;
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  color: ${getColorFromTheme('brownGrey')};
  font-family: ${getFontFromTheme('medium')};
  margin-bottom: 5px;
`;

export const ProgressBarBottom = styled.View`
  width: 100%;
  position: relative;
  height: 1px;
  border-radius: 1px;
  background-color: ${getColorFromTheme('white10')};
`;

export const ProgressBarTop = styled.View`
  position: absolute;
  top: -1px;
  left: 0;
  height: 2px;
  height: 2px;
  background-color: ${getColorFromTheme('pink')};
`;

export const CinemaTime = styled.Text`
  text-align: center;
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('medium')};
`;
