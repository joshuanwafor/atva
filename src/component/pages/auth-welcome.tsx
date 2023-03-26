import * as React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {useSocialAuth} from '../../hooks/auth/auth-social';
import {getFontFromTheme, getColorFromTheme, sizeScale} from '../../utils';
import AuthTemplate from '../templates/auth/auth';
import Divider from '../molecules/divider';
import LinearButton from '../molecules/button/linear-button';
import TransparentButton from '../molecules/button/transparent-button';
import GoogleButton from '../molecules/button/google-button';
import AppleButton from '../molecules/button/apple-button';
import PhoneButton from '../molecules/button/phone-button';
import AppLogo from '../atoms/svgs/logo';

const Caption = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('pale')};
  margin-top: 5px;
`;

const HeadWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 58px;
`;

const ButtonWrapper = styled.View`
  margin-bottom: 20px;
`;

function AuthWelcome() {
  const {
    navigateRegister,
    navigateLogin,
    loading,
    navigatePhone,
  } = useSocialAuth();
  return (
    <AuthTemplate>
      <HeadWrapper>
        <AppLogo />
        <Caption>Watch. Connect. Explore.</Caption>
      </HeadWrapper>
      {/* <ButtonWrapper>
        <GoogleButton
          disabled={loading}
          isLoading={loading}
          // onPress={onGoogleSignIn}
        />
      </ButtonWrapper>
      {Platform.OS === 'ios' && (
        <ButtonWrapper>
          <AppleButton
            disabled={loading}
            isLoading={loading}
            onPress={onAppleSignIn}
          />
        </ButtonWrapper>
      )}

      <ButtonWrapper>
        <PhoneButton onPress={navigatePhone}>Continue with phone</PhoneButton>
      </ButtonWrapper>

      <Divider /> */}
      <ButtonWrapper>
        <TransparentButton onPress={navigateLogin}>Login</TransparentButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <LinearButton onPress={navigateRegister}>Create account</LinearButton>
      </ButtonWrapper>
    </AuthTemplate>
  );
}

export default AuthWelcome;
