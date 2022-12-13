import * as React from 'react';
import styled from 'styled-components/native';
import {s} from 'react-native-size-matters';
import {StatusBar} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {theme} from '../../style/theme';
import {sizeScale} from '../../utils';
import Background from '../molecules/background';
import BillingTab from '../../app/navigator/billing-tab';

const Wrapper = styled.View`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  padding-top: ${sizeScale(s(20), 'px')};
`;

function BillingTemplate({header}: {header: React.ReactChild}) {
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
      <Wrapper>{header}</Wrapper>
      <BillingTab />
    </Background>
  );
}

export default BillingTemplate;
