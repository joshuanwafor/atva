import * as React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import Animated, {Easing} from 'react-native-reanimated';
import {mix, useTransition} from 'react-native-redash';
import {s, ms} from 'react-native-size-matters';
import {sizeScale, getColorFromTheme} from '../../utils';

interface TDotProps {
  active: boolean;
}

const View = Animated.View;

const Wrapper = styled.View`
  position: absolute;
  left: ${sizeScale(s(20), 'px')};
  bottom: ${sizeScale(ms(50), 'px')};
  display: flex;
  flex-direction: row;
`;

const Dot = styled(View)<TDotProps>`
  background-color: ${getColorFromTheme('white')};
  width: ${({active}) => (active ? '14px' : '7px')};
  height: 7px;
  margin-right: 8px;
  border-radius: 7px;
`;

function SliderDot({active}: TDotProps) {
  const transition = useTransition(active, {
    duration: 100,
    easing: Easing.inOut(Easing.ease),
  });
  const width = mix(transition, 7, 14);

  return <Dot active={active} style={{width}} />;
}

function SliderDots(props: {index: number; total: number; context: Swiper}) {
  return (
    <Wrapper>
      {Array(props.total)
        .fill('')
        .map((val, idx) => (
          <SliderDot active={props.index === idx} key={idx.toString()} />
        ))}
    </Wrapper>
  );
}

export default SliderDots;
