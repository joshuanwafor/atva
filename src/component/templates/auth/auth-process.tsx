import * as React from 'react';
import {ReactChild} from 'react';
import Orientation from 'react-native-orientation-locker';
import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
import {Wrapper} from './style';
import {TChildProps} from '../../../interface';
import {theme} from '../../../style/theme';
import Background from '../../molecules/background';
import ButtonWrapper from '../../atoms/button-wrapper';

function AuthProcessTemplate({
  children,
  button,
}: TChildProps & {button: ReactChild}) {
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
      <KeyboardAvoidingView
        style={{flex: 1}}
        keyboardVerticalOffset={(StatusBar.currentHeight || 0)}
        behavior={Platform.select({ios: 'padding'})}>
        <Wrapper>{children}</Wrapper>
        <ButtonWrapper>{button}</ButtonWrapper>
      </KeyboardAvoidingView>
    </Background>
  );
}

export default AuthProcessTemplate;
