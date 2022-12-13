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
