import * as React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {getDefaultCoverHeight} from '../../../utils';

interface CoverProps {
  y: Animated.Value<number>;
  cover: string;
}

const HomeCover = React.memo(function ({cover, y}: CoverProps) {
  const {max, delta} = getDefaultCoverHeight(20);
    //@ts-ignore
  const scale: any = interpolate(y, {
    inputRange: [-max, 0],
    outputRange: [4, 1],
    extrapolateRight: Extrapolate.CLAMP,
  });
    //@ts-ignore
  const opacity = interpolate(y, {
    inputRange: [-64, 0, delta],
    outputRange: [0, 0.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={[styles.container, {height: max}, {transform: [{scale}]}]}>
      <FastImage
        style={styles.image}
        source={{
          uri: cover,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: '#141414',
          opacity,
        }}
      />
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    top: 0,
    left: 0,
    justifyContent: 'flex-start',
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default HomeCover;
