import * as React from 'react';
import {View} from 'react-native';
import {useCode} from '../../../hooks/auth/code';
import LinearButton from '../../molecules/button/linear-button';
import TextField from '../../molecules/textfield';
import AuthProcessTemplate from '../../templates/auth/auth-process';

function AuthCode() {
  const {code, handleSubmit, submitting, onCodeChange, isValid} = useCode();

  return (
    <AuthProcessTemplate
      button={
        <LinearButton
          disabled={!isValid || submitting}
          isLoading={submitting}
          onPress={handleSubmit}>
          Sign me in
        </LinearButton>
      }>
      <View>
        <TextField
          clearTextOnFocus
          label="Your login code"
          secureTextEntry={true}
          helper="Check your email for login code"
          value={code}
          onChange={onCodeChange}
          returnKeyType="done"
          autoFocus
          disabled={submitting}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          placeholder="Enter login code"
        />
      </View>
    </AuthProcessTemplate>
  );
}

export default AuthCode;
