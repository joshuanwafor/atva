import * as React from 'react';
import {Image} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Wrapper, Title, Logo, IntroImageWrapper} from './style';
import AppLogo from '../../atoms/svgs/logo';

const intro2 = DeviceInfo.isTablet()
  ? require('../../../../assets/images/intro-2-tablet.png')
  : require('../../../../assets/images/intro-2.png');

function IntroTwo() {
  return (
    <Wrapper>
      <IntroImageWrapper>
        <Image source={intro2} />
      </IntroImageWrapper>
      <Logo>
        <AppLogo />
      </Logo>
      <Title>Vibe. Watch. Connect. with friends and family</Title>
    </Wrapper>
  );
}

export default IntroTwo;
