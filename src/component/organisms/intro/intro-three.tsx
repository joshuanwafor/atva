import * as React from 'react';
import {
  Wrapper,
  Intro3Title,
  Logo,
  Intro3ImageWrapper,
  LogoWrapper,
} from './style';
import IntroThreeSvg from '../../atoms/svgs/intro-three';
import AppLogo from '../../atoms/svgs/logo';

function IntroThree() {
  return (
    <Wrapper>
      <Intro3ImageWrapper>
        <IntroThreeSvg />
      </Intro3ImageWrapper>
      <LogoWrapper>
        <Logo>
          <AppLogo />
        </Logo>
      </LogoWrapper>
      <Intro3Title>We know you love them, so connect with them.</Intro3Title>
    </Wrapper>
  );
}

export default IntroThree;
