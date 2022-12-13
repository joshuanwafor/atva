import * as React from 'react';
import {View} from 'react-native';
import LinearButton from '../../molecules/button/linear-button';
import AuthProcessTemplate from '../../templates/auth/auth-process';
import TextField from '../../molecules/textfield';

function PhoneVerify() {
  return (
    <AuthProcessTemplate
      button={
        <LinearButton disabled={true} onPress={() => {}}>
          Confirm code
        </LinearButton>
      }>
      <View>
        <TextField
          clearTextOnFocus
          label="Your confirmation code"
          secureTextEntry={true}
          returnKeyType="done"
          autoFocus
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          placeholder="Enter confirmation code"
        />
      </View>
    </AuthProcessTemplate>
  );
}

export default PhoneVerify;
