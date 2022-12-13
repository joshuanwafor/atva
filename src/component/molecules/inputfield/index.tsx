import * as React from 'react';
import {View, TextInput} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {theme} from '../../../style/theme';
import {getFontFromTheme, sizeScale, getColorFromTheme} from '../../../utils';
import {TextfieldProps} from '../../../interface';
import {useInput} from './use-input';

const Stack = styled.View`
  flex: 1;
  align-self: stretch;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
`;

const Input = styled.TextInput`
  margin: 0;
  flex: 1;
  padding-vertical: ${sizeScale(ms(6, 0.2), 'px')};
  padding-horizontal: ${sizeScale(ms(12, 0.2), 'px')};
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
  font-size: ${sizeScale(ms(16, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: #fff;
  border-width: 1px;
  border-radius: 6px;
`;

const Label = styled.Text`
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
  font-weight: 500;
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: ${getColorFromTheme('brownGrey')};
  margin-bottom: 10px;
`;

const HelperStyledText = styled.Text`
  flex: 1;
  background-color: transparent;
  padding-vertical: 5px;
  text-align: left;
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: ${getColorFromTheme('white70')};
`;

const HelperWrapper = styled.View`
  padding-left: 0px;
  padding-right: 0px;
  min-height: 8px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

const InputField = React.forwardRef(
  (props: TextfieldProps, ref: React.Ref<TextInput>) => {
    const {editable = true, disabled, label, helper, ...rest} = props;
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
      <View
        {...containerProps}
        onStartShouldSetResponder={() => {
          if (!disabled && editable) {
            inputRef.current?.focus();
          }
          return true;
        }}
        pointerEvents={!disabled && editable ? 'auto' : 'none'}>
        <Stack>
          <Label>{label.toUpperCase()}</Label>

          <Row>
            <Input
              selectionColor={theme.colors.alt}
              {...rest}
              style={[inputStyle()]}
              placeholderTextColor={theme.colors.white30}
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
        <HelperWrapper>
          <HelperStyledText>{helper}</HelperStyledText>
        </HelperWrapper>
      </View>
    );
  },
);

export default InputField;
