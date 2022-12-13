import * as React from 'react';
import styled from 'styled-components/native';
import {s} from 'react-native-size-matters';
import {StatusBar} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {TChildProps} from '../../interface';
import {theme} from '../../style/theme';
import {sizeScale} from '../../utils';

import Background from '../molecules/background';

const Wrapper = styled.ScrollView`
  width: 100%;
  padding-left: ${sizeScale(s(12), 'px')};
  padding-right: ${sizeScale(s(12), 'px')};
  padding-top: ${sizeScale(s(20), 'px')};
`;

function ConnectedTemplate({children}: TChildProps) {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <Background edges={['bottom']}>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.black}
        animated={true}
        showHideTransition="slide"
      />
      <Wrapper
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        snapToAlignment="center">
        {children}
      </Wrapper>
    </Background>
  );
}

export default ConnectedTemplate;
