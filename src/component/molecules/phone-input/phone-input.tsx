import * as React from 'react';
import {TextInputProps} from 'react-native';
import {
  Wrapper,
  InputWrapper,
  TextInput,
  HelperText,
  InnerWrapper,
} from './style';
import {theme} from '../../../style/theme';
import Code from './code';
import {Country} from '../../../interface';

function PhoneInput({
  countries,
  country,
  onPress,
  value,
  ...rest
}: {
  countries: Record<string, Country>;
  country: string;
  onPress: () => void;
} & TextInputProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Code onPress={onPress} country={countries[country || '']} />
        <InputWrapper>
          <TextInput
            {...rest}
            selectionColor={theme.colors.alt}
            placeholderTextColor={theme.colors.white30}
            autoCompleteType="tel"
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="telephoneNumber"
            placeholder="Enter phone number"
            disableFullscreenUI={true}
            value={value}
          />
        </InputWrapper>
      </InnerWrapper>
      <HelperText>
        To retrieve your account info, we need to send a unique code to your
        mobile number to verify it's you.
      </HelperText>
    </Wrapper>
  );
}

export default PhoneInput;
