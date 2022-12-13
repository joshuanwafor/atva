import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../../utils';

export const Wrapper = styled.View`
  width: 100%;
`;

export const ActionWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  flex-wrap: nowrap;
  background-color: transparent;
  padding-vertical: ${sizeScale(ms(10, 0.2), 'px')};
  display: flex;
  padding-left: ${sizeScale(s(12), 'px')};
  padding-right: ${sizeScale(s(12), 'px')};
`;

export const TextWrapper = styled.View`
  flex: 1;
  min-width: 0;
`;

export const Title = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(17, 0.2), 'px')};
  color: ${getColorFromTheme('white')};
  margin-bottom: 3px;
`;
export const SubTitle = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  color: ${getColorFromTheme('brownishGrey')};
`;

export const AvatarWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const RightIconWrapper = styled.View`
  width: 20px;
  height: 20px;
  justify-content: flex-end;
  align-items: center;
  margin-left: 10px;
`;
