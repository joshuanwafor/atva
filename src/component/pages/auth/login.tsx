import * as React from 'react';
import {View} from 'react-native';
import {useLogin} from '../../../hooks/auth/login';
import LinearButton from '../../molecules/button/linear-button';
import TextField from '../../molecules/textfield';
import AuthProcessTemplate from '../../templates/auth/auth-process';

function Login() {
  const {email, handleSubmit, onEmailChange, isValid, submitting} = useLogin();

  let helper =
    'We’ll send you an email with a temporary login code to verify your account.';

  return (
    <AuthProcessTemplate
      button={
        <LinearButton
          disabled={!isValid || submitting}
          isLoading={submitting}
          onPress={handleSubmit}>
          Continue with email
        </LinearButton>
      }>
      <View>
        <TextField
          label="Your email address"
          placeholder="abc@example.com"
      
          autoCorrect
          keyboardType="email-address"
          returnKeyType="done"
          textContentType="emailAddress"
          value={email}
          disabled={submitting}
          onChange={onEmailChange}
          helper={helper}
        />
      </View>
    </AuthProcessTemplate>
  );
}

export default Login;
