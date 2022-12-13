import {useRef, useState, useLayoutEffect, Ref} from 'react';
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputContentSizeChangeEventData,
  TextInputFocusEventData,
  StyleProp,
  TextStyle,
} from 'react-native';
import {theme} from '../../../style/theme';
import {TextfieldProps} from '../../../interface';

export function useInput(
  props: Omit<TextfieldProps, 'label' | 'helper'>,
  ref: Ref<TextInput>,
) {
  let focused = useRef<boolean>(false);
  let mounted = useRef<boolean>(false);
  let {
    disabled,
    editable,
    value: inputValue,
    onChange,
    onChangeText,
    formatText,
    onContentSizeChange,
    onBlur,
    onFocus,
    clearTextOnFocus,
    defaultValue,
  } = props;
  // @ts-ignore
  const inputRef = useRef<TextInput>(ref?.current);
  const [receivedFocus, setReceivedFocus] = useState(false);

  function isDefaultVisible() {
    return !receivedFocus && inputValue == null && defaultValue != null;
  }

  function focus() {
    let {current: input} = inputRef;

    if (!disabled && editable) {
      input?.focus();
    }
  }

  function clear() {
    let {current: input} = inputRef;
    input?.clear();
    onChangeTextHandler('');
  }

  function onBlurHandler(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    if (typeof onBlur === 'function') {
      onBlur(event);
    }

    focused.current = false;
    if (receivedFocus) {
      setReceivedFocus(false);
    }
  }

  function onFocusHandler(
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) {
    if (typeof onFocus === 'function') {
      onFocus(event);
    }

    if (clearTextOnFocus) {
      clear();
    }

    focused.current = true;
    if (!receivedFocus) {
      setReceivedFocus(true);
    }
  }

  function onContentSizeChangeHandler(
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) {
    if (typeof onContentSizeChange === 'function') {
      onContentSizeChange(event);
    }
  }

  function value() {
    let val = isDefaultVisible() ? defaultValue : inputValue;

    if (val === null || val === undefined) {
      return '';
    }

    return typeof val === 'string' ? val : String(val);
  }

  function onChangeHandler(
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) {
    if (typeof onChange === 'function') {
      onChange(event);
    }
  }

  function onChangeTextHandler(text: string) {
    if (typeof formatText === 'function') {
      text = formatText(text);
    }

    if (typeof onChangeText === 'function') {
      onChangeText(text);
    }
  }

  function inputStyle() {
    let color =
      isDefaultVisible() || !editable
        ? theme.colors.white30
        : theme.colors.white70;

    if (receivedFocus || value()) {
      color = theme.colors.white;
    }

    if (disabled) {
      color = theme.colors.white30;
    }

    let style: StyleProp<TextStyle> = {
      color,
    };

    return style;
  }

  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setNativeProps(p: TextfieldProps) {
    let {current: input} = inputRef;

    input?.setNativeProps(p);
  }

  const containerProps = {
    onStartShouldSetResponder: () => true,
    onResponderRelease: focus,
  };

  return {
    containerProps,
    onChangeTextHandler,
    onChangeHandler,
    value,
    onContentSizeChangeHandler,
    inputRef,
    onFocusHandler,
    onBlurHandler,
    inputStyle,
    focused: focused.current,
  };
}
