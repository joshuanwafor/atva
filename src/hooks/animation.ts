import Animated, {
  useCode,
  cond,
  eq,
  set,
  interpolate,
} from 'react-native-reanimated';
import {withTimingTransition} from 'react-native-redash';
import {useRef} from 'react';

export function useSlideUpAnimation() {
  const slide = useRef(new Animated.Value(0));
  const slideAnimation = withTimingTransition(slide.current);
 
  useCode(() => cond(eq(slide.current, 0), set(slide.current, 1)), []);

  return undefined;
}
