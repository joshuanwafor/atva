import * as React from 'react';
import {Animated, Platform} from 'react-native';
import {BaseButton} from 'react-native-gesture-handler';

const AnimatedBaseButton = Animated.createAnimatedComponent(BaseButton);

interface Props extends React.ComponentProps<typeof BaseButton> {
  activeOpacity: number;
  children: React.ReactNode;
}

function BorderlessButton(props: Props) {
  const {children, style, enabled, ...rest} = props;

  const opacity = new Animated.Value(1);

  function handleActiveStateChange(active: boolean) {
    if (Platform.OS !== 'android') {
      Animated.spring(opacity, {
        stiffness: 500,
        damping: 100,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
        toValue: active ? props.activeOpacity : 1,
        useNativeDriver: true,
      }).start();
    }

    props.onActiveStateChange?.(active);
  }

  return (
    // @ts-ignore
    <AnimatedBaseButton
      {...rest}
      enabled={enabled}
      onActiveStateChange={handleActiveStateChange}
      style={[style, Platform.OS === 'ios' && enabled && {opacity}]}>
      {children}
    </AnimatedBaseButton>
  );
}

BorderlessButton.defaultProps = {
  activeOpacity: 0.3,
  borderless: true,
};

export default BorderlessButton;
