import * as React from 'react';
import {TextInput} from 'react-native';
import {Wrapper, Input, InputWrapper, IconWrapper} from './style';
import {TextfieldProps} from '../../../interface';
import {useInput} from './useInput';
import {theme} from '../../../style/theme';

const BoxedInputField = React.forwardRef(
  (
    props: Omit<TextfieldProps, 'label' | 'helper'> & {Icon: React.ReactNode},
    ref: React.Ref<TextInput>,
  ) => {
    const {editable = true, disabled, Icon, ...rest} = props;

    const {
      containerProps,
      onChangeTextHandler,
      onChangeHandler,
      value,
      onContentSizeChangeHandler,
      inputRef,
      onFocusHandler,
      onBlurHandler,
      inputStyle,
    } = useInput(props, ref);

    return (
      <Wrapper
        {...containerProps}
        onStartShouldSetResponder={() => {
          if (!disabled && editable) {
            inputRef.current?.focus();
          }
          return true;
        }}
        pointerEvents={!disabled && editable ? 'auto' : 'none'}>
        <IconWrapper>{Icon}</IconWrapper>
        <InputWrapper>
          <Input
            selectionColor={theme.colors.alt}
            {...rest}
            style={[inputStyle()]}
            placeholderTextColor={theme.colors.brownishGrey}
            editable={!disabled && editable}
            onChange={onChangeHandler}
            onChangeText={onChangeTextHandler}
            onContentSizeChange={onContentSizeChangeHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            value={value()}
            blurOnSubmit={false}
            ref={inputRef as React.MutableRefObject<TextInput>}
          />
        </InputWrapper>
      </Wrapper>
    );
  },
);

export default BoxedInputField;
