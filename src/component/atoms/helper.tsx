import * as React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {theme} from '../../style/theme';
import {getColorFromTheme, sizeScale, getFontFromTheme} from '../../utils';

const Text = Animated.Text;

const StyledText = styled(Text)`
  flex: 1;
  background-color: transparent;
  padding-vertical: 2px;
  text-align: left;
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: ${getColorFromTheme('white70')};
`;

const HelperWrapper = styled.View`
  padding-left: 0px;
  padding-right: 0px;
  min-height: 8px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

interface TProps {
  children?: string;
  focusAnimation: Animated.Value;
  error?: boolean;
}

function Helper({children, focusAnimation, error}: TProps) {


  return (
    <HelperWrapper>
      <StyledText>{children}</StyledText>
    </HelperWrapper>
  );
}

export default Helper;
