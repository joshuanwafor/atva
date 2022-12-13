import * as React from 'react';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {s, ms} from 'react-native-size-matters';
import {sizeScale} from '../../utils';
import {IntroScreenNavigationProp} from '../../interface';
import IntroTemplate from '../templates/intro';
import IntroButton from '../molecules/intro-button';
import SliderDots from '../molecules/slider-dots';
import IntroOne from '../organisms/intro/intro-one';
import IntroThree from '../organisms/intro/intro-three';
import IntroTwo from '../organisms/intro/intro-two';
import {Button} from 'react-native';

const Wrapper = styled.View`
  padding-left: ${sizeScale(s(20), 'px')};
  padding-right: ${sizeScale(s(20), 'px')};
  padding-bottom: ${sizeScale(ms(40), 'px')};
  padding-top: ${sizeScale(ms(60), 'px')};
`;

const ButtonWrapper = styled.View`
  position: absolute;
  right: ${sizeScale(s(20), 'px')};
  bottom: ${sizeScale(ms(40), 'px')};
`;

function Intro() {
  const navigation = useNavigation<IntroScreenNavigationProp>();

  return <Button title="okkMe"></Button>;
  return (
    <IntroTemplate>
      <Swiper
        showsButtons={false}
        loop={false}
        renderPagination={(index, total, context) => (
          <SliderDots index={index} total={total} context={context} />
        )}>
        <Wrapper>
          <IntroOne />
        </Wrapper>
        <Wrapper>
          <IntroTwo />
        </Wrapper>
        <Wrapper>
          <IntroThree />
        </Wrapper>
      </Swiper>
      <ButtonWrapper>
        <IntroButton onPress={() => navigation.navigate('AuthWelcome')} />
      </ButtonWrapper>
    </IntroTemplate>
  );
}

export default Intro;
