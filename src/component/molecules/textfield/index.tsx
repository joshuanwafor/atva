import * as React from 'react';
import {View, Animated, TextInput} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {theme} from '../../../style/theme';
import {getFontFromTheme, sizeScale} from '../../../utils';
import {TextfieldProps} from '../../../interface';
import {useInput, contentInset} from './use-input';
import Helper from '../../atoms/helper';
import Label from '../../atoms/label';

const Stack = styled.View`
  flex: 1;
  align-self: stretch;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

const Input = styled.TextInput`
  top: 2px;
  padding: 0;
  padding-top: 0;
  margin: 0;
  flex: 1%;
  text-align: left;
  include-font-padding: false;
  text-align-vertical: top;
  font-size: ${sizeScale(ms(18, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: #fff;
`;

const TextField = React.forwardRef(
  (props: TextfieldProps, ref: React.Ref<TextInput>) => {
    const {editable = true, disabled, label, helper, error, ...rest} = props;
    const {
      inputContainerProps,
      containerProps,
      onChangeTextHandler,
      onChangeHandler,
      value,
      focusAnimation,
      labelAnimation,
      onContentSizeChangeHandler,
      inputRef,
      onFocusHandler,
      onBlurHandler,
      inputStyle,
      focused,
    } = useInput(props, ref);

    return (
      <View
        {...containerProps}
        onStartShouldSetResponder={() => {
          if (!disabled && editable) {
            inputRef.current?.focus();
          }
          return true;
        }}
        pointerEvents={!disabled && editable ? 'auto' : 'none'}>
        <Animated.View {...inputContainerProps}>
          <Stack>
            <Label
              focusAnimation={focusAnimation}
              disabled={disabled || !editable}
              labelAnimation={labelAnimation}
              contentInset={contentInset.label}>
              {label}
            </Label>

            <Row>
              <Input
                selectionColor={theme.colors.alt}
                {...rest}
                style={[inputStyle()]}
                placeholderTextColor={
                  focused ? theme.colors.white30 : 'transparent'
                }
                editable={!disabled && editable}
                onChange={onChangeHandler}
                onChangeText={onChangeTextHandler}
                onContentSizeChange={onContentSizeChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                value={value()}
                disableFullscreenUI={true}
                ref={inputRef as React.MutableRefObject<TextInput>}
              />
            </Row>
          </Stack>
        </Animated.View>
        <Helper error={error} focusAnimation={focusAnimation}>
          {helper}
        </Helper>
      </View>
    );
  },
);

export default TextField;
