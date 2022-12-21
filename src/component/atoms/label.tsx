import * as React from 'react';
import {Animated} from 'react-native';
import {ms} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {getColorFromTheme, sizeScale, getFontFromTheme} from '../../utils';
import {theme} from '../../style/theme';

const WrapperAnimatedView = Animated.View;
const TextAnimated = Animated.Text;

const Wrapper = styled(WrapperAnimatedView)`
  position: absolute;
  top: 0px;
  left: -100%;
  width: 200%;
  padding-left: 50%;
`;

const Text = styled(TextAnimated)`
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
  font-weight: 500;
  font-size: ${sizeScale(ms(18, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: ${getColorFromTheme('white70')};
`;

interface TProps {
  disabled?: boolean;
  children?: string;
  labelAnimation: Animated.Value;
  focusAnimation: Animated.Value;
  contentInset: number;
}

const labelOffset = {
  y0: 0,
  y1: 0,
};

function Label(props: TProps) {
  const {contentInset, labelAnimation, disabled, focusAnimation} = props;
  let {y0, y1} = labelOffset;

  y0 += 16;
  y0 += contentInset;
  y0 += 16 * 0.25;

  let containerStyle = {
    transform: [
  
    ],
  };


  return (
    <Wrapper style={[containerStyle]}>
      <Text >{props.children}</Text>
    </Wrapper>
  );
}

export default Label;
