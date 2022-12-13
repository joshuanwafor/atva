import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {getColorFromTheme, sizeScale} from '../../../utils';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.View`
  margin-bottom: ${sizeScale(ms(10, 1.1), 'px')};
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-family: ${({theme}) => theme.font.secondary};
  line-height: 42px;
  color: ${getColorFromTheme('pale')};
  width: ${sizeScale(ms(80, -0.1), '%')};
  margin-bottom: ${sizeScale(ms(60), 'px')};
`;

export const IntroImageWrapper = styled.View`
  align-items: center;
  width: 100%;
  display: flex;
  margin-bottom: ${sizeScale(ms(40), 'px')};
`;

export const LogoWrapper = styled.View`
  align-items: center;
  width: 100%;
`;

export const Intro3Title = styled(Title)`
  text-align: center;
  align-self: center;
`;

export const Intro3ImageWrapper = styled(IntroImageWrapper)`
  margin-top: ${sizeScale(ms(100), 'px')};
`;
