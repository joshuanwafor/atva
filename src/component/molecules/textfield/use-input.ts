import {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  Ref,
} from 'react';
import {
  Animated,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputContentSizeChangeEventData,
  TextInputFocusEventData,
  Platform,
  StyleProp,
  TextStyle,
} from 'react-native';
import {theme} from '../../../style/theme';
import {ms} from 'react-native-size-matters';
import {TextfieldProps} from '../../../interface';
import {useCombinedRefs} from '../../../hooks/combine-ref';

export const contentInset = {
  top: 0,
  label: 4,
  input: 8,
  left: 0,
  right: 0,
  bottom: 8,
};

function startAnimation(
  animation: Animated.Value,
  options: Animated.TimingAnimationConfig,
  callback?: Animated.EndCallback | undefined,
) {
  Animated.timing(animation, options).start(callback);
}

function labelStateFromProps(props: TextfieldProps, receivedFocus: boolean) {
  let {defaultValue, value} = props;

  return !!(value || (!receivedFocus && defaultValue));
}

export function useInput(props: TextfieldProps, ref: Ref<TextInput>) {
  let focused = useRef<boolean>(false);
  let mounted = useRef<boolean>(false);
  let {
    disabled,
    editable,
    multiline,
    value: inputValue,
    error,
    onChange,
    onChangeText,
    formatText,
    onContentSizeChange,
    onBlur,
    onFocus,
    clearTextOnFocus,
    defaultValue,
  } = props;
  const inputRef = useRef<TextInput>(null);
  const combinedRef =
    // @ts-ignore
    useCombinedRefs<TextInput>(ref, inputRef);
  const [height, setHeight] = useState(16 * 1.5);
  const [receivedFocus, setReceivedFocus] = useState(false);
  let labelState = labelStateFromProps(props, receivedFocus) ? 1 : 0;
  let focusState = error ? -1 : 0;

  const [focusAnimation] = useState(new Animated.Value(focusState));
  const [labelAnimation] = useState(new Animated.Value(labelState));

  function isDefaultVisible() {
    return !receivedFocus && inputValue == null && defaultValue != null;
  }

  const focusStateHandler = useCallback(() => {
    if (error && inputValue) {
      return -1;
    }

    if (inputValue || defaultValue) {
      return 1;
    }

    return focused.current ? 1 : 0;
  }, [error, inputValue, defaultValue]);

  const labelStateHandler = useCallback(() => {
    if (labelStateFromProps(props, receivedFocus)) {
      return 1;
    }

    return focused.current ? 1 : 0;
  }, [props, receivedFocus]);

  function focus() {
    let {current: input} = combinedRef;

    if (!disabled && editable) {
      input?.focus();
    }
  }

  function clear() {
    let {current: input} = combinedRef;
    input?.clear();
    onChangeTextHandler('');
  }

  const startFocusAnimation = useCallback(() => {
    const options: Animated.TimingAnimationConfig = {
      toValue: focusStateHandler(),
      useNativeDriver: false,
      duration: 225,
    };

    startAnimation(focusAnimation, options);
  }, [focusAnimation, focusStateHandler]);

  const startLabelAnimation = useCallback(() => {
    let options: Animated.TimingAnimationConfig = {
      toValue: labelStateHandler(),
      useNativeDriver: true,
      duration: 225,
    };

    startAnimation(labelAnimation, options);
  }, [labelAnimation, labelStateHandler]);

  function onBlurHandler(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    if (typeof onBlur === 'function') {
      onBlur(event);
    }

    focused.current = false;

    startFocusAnimation();
    startLabelAnimation();
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

    startFocusAnimation();
    startLabelAnimation();

    if (!receivedFocus) {
      setReceivedFocus(true);
    }
  }

  function onContentSizeChangeHandler(
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) {
    let {height: localHeight} = event.nativeEvent.contentSize;

    if (typeof onContentSizeChange === 'function') {
      onContentSizeChange(event);
    }

    setHeight(
      Math.max(
        16 * 1.5,
        Math.ceil(localHeight) +
          (Platform.select({ios: 4, android: 1}) as number),
      ),
    );
  }

  function inputHeight() {
    return multiline ? height : 16 * 1.5;
  }

  function inputContainerHeight() {
    return (
      contentInset.top +
      16 +
      contentInset.label +
      inputHeight() +
      contentInset.input
    );
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
      disabled || isDefaultVisible() || !editable
        ? theme.colors.white30
        : theme.colors.white70;

    if (value()) {
      color = theme.colors.white;
    }

    let style: StyleProp<TextStyle> = {
      color,
      height: inputHeight(),
    };

    if (multiline) {
      let lineHeight = ms(18, 0.2) * 1.5;
      let offset = Platform.OS === 'ios' ? 2 : 0;

      style.height = (style.height as number) + lineHeight;
      style.transform = [
        {
          // @ts-ignore
          translateY: lineHeight + offset,
        },
      ];
    }

    return style;
  }

  useEffect(() => {
    const errorState = props.error;
    if (errorState) {
      startFocusAnimation();
    }
    const state = labelStateFromProps(props, receivedFocus);

    if (state) {
      startLabelAnimation();
    }
  }, [props, startFocusAnimation, startLabelAnimation, receivedFocus]);

  useEffect(() => {
    if (!inputValue) {
      startFocusAnimation();
    }
  }, [inputValue, startFocusAnimation]);

  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setNativeProps(p: TextfieldProps) {
    let {current: input} = combinedRef;

    input?.setNativeProps(p);
  }

  const containerProps = {
    onStartShouldSetResponder: () => true,
    onResponderRelease: focus,
  };

  const inputContainerStyle = {
    paddingTop: contentInset.top,
    paddingRight: contentInset.right,
    paddingBottom: contentInset.input,
    paddingLeft: contentInset.left,
    height: inputContainerHeight(),
  };

  const inputContainerProps = {
    style: [
      {
        flexDirection: 'row',
        alignItems: 'flex-end',
      },
      inputContainerStyle,
    ],
  };

  return {
    inputContainerProps,
    containerProps,
    onChangeTextHandler,
    onChangeHandler,
    value,
    focusAnimation,
    onContentSizeChangeHandler,
    labelAnimation,
    inputRef: combinedRef,
    onFocusHandler,
    onBlurHandler,
    inputStyle,
    focused: focused.current,
  };
}
