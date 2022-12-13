import * as React from 'react';
import {Wrapper, Title, Logo, IntroImageWrapper} from './style';
import IntroOneSvg from '../../atoms/svgs/intro-one';
import AppLogo from '../../atoms/svgs/logo';

function IntroOne() {
  return (
    <Wrapper>
      <Logo>
        <AppLogo />
      </Logo>
      <Title>Unlimited Africa TV shows, movies at its best.</Title>
      <IntroImageWrapper>
        <IntroOneSvg />
      </IntroImageWrapper>
    </Wrapper>
  );
}

export default IntroOne;
