import * as React from 'react';
import {StatusBar} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import styled from 'styled-components/native';
import {TChildProps} from '../../interface';
import {theme} from '../../style/theme';
import Background from '../molecules/background';

const Wrapper = styled.View`
  height: 100%;
  position: relative;
  width: 100%;
`;

function IntroTemplate({children}: TChildProps) {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.black}
        animated={true}
        showHideTransition="slide"
      />
      <Wrapper>{children}</Wrapper>
    </Background>
  );
}

export default IntroTemplate;
