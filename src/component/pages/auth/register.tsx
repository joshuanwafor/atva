import * as React from 'react';
import {View} from 'react-native';
import {useRegister} from '../../../hooks/auth/register';
import LinearButton from '../../molecules/button/linear-button';
import TextField from '../../molecules/textfield';
import AuthProcessTemplate from '../../templates/auth/auth-process';

function Register() {
  const {
    email,
    firstName,
    lastName,
    onEmailChange,
    onLastNameChange,
    onFirstNameChange,
    handleSubmit,
    isValid,
    firstNameRef,
    lastNameRef,
    emailRef,
    submitting,
  } = useRegister();
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
          autoCorrect
          label="Your first name"
          keyboardType="default"
          returnKeyType="next"
          value={firstName}
          onChange={onFirstNameChange}
          textContentType="givenName"
          placeholder="Mary"
          ref={firstNameRef}
          disabled={submitting}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            lastNameRef.current?.focus();
          }}
        />
        <TextField
          autoCorrect
          keyboardType="default"
          returnKeyType="next"
          textContentType="familyName"
          label="Your last name"
          value={lastName}
          onChange={onLastNameChange}
          placeholder="Johnson"
          ref={lastNameRef}
          disabled={submitting}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            emailRef.current?.focus();
          }}
        />
        <TextField
          label="Your email address"
          placeholder="abc@example.com"
          autoCompleteType="email"
          autoCorrect
          keyboardType="email-address"
          returnKeyType="done"
          textContentType="emailAddress"
          value={email}
          ref={emailRef}
          disabled={submitting}
          blurOnSubmit={true}
          onChange={onEmailChange}
          helper="We’ll send you an email with a temporary login code to verify your account."
        />
      </View>
    </AuthProcessTemplate>
  );
}

export default Register;
