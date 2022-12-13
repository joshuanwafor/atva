import * as React from 'react';
import styled from 'styled-components/native';
import {s} from 'react-native-size-matters';
import {useHeaderHeight} from '@react-navigation/stack';
import Orientation from 'react-native-orientation-locker';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
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

const ButtonWrapper = styled.View`
  padding-bottom: 10px;
  padding-left: ${sizeScale(s(12), 'px')};
  padding-right: ${sizeScale(s(12), 'px')};
  align-self: center;
  width: 100%;
`;

function AccountTemplate({
  children,
  button,
}: TChildProps & {button: React.ReactChild}) {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  const headerHeight = useHeaderHeight();
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
      <KeyboardAvoidingView
        style={{flex: 1}}
        keyboardVerticalOffset={headerHeight + (StatusBar.currentHeight || 0)}
        behavior={Platform.select({ios: 'padding'})}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          snapToAlignment="center">
          <Wrapper>{children}</Wrapper>
        </ScrollView>
        <ButtonWrapper>{button}</ButtonWrapper>
      </KeyboardAvoidingView>
    </Background>
  );
}

export default AccountTemplate;
