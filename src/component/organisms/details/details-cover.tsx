import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {getDefaultDetailsCoverHeight} from '../../../utils';

interface CoverProps {
  y: Animated.Value<number>;
  cover: string;
}

const DetailsCover = React.memo(function ({cover, y}: CoverProps) {
  const insets = useSafeAreaInsets();
  const {max, delta} = getDefaultDetailsCoverHeight(insets.top);
  //@ts-ignore
  const scale: any = interpolate(y, [-max, 0], Extrapolate.CLAMP);

  const opacity = interpolate(
    //@ts-ignore
    20,
    [-64, 0, delta],
    [0, 0.2, 1],
    Extrapolate.CLAMP,
  );

  return (
    <View>
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
        }}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: '#141414',
          opacity,
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width * 1.2,
    top: 0,
    left: 0,
    justifyContent: 'flex-start',
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default DetailsCover;
