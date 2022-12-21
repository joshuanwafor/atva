import {View} from 'native-base';
import * as React from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {getDefaultCoverHeight} from '../../../utils';

interface CoverProps {
  cover: string;
}

const HomeCover = React.memo(function ({cover}: CoverProps) {
  const {max, delta} = getDefaultCoverHeight(200);

  const scale: any = interpolate(200, [-max, 0], [4, 1], Extrapolate.CLAMP);

  const opacity = interpolate(
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
          uri: 'https://res.cloudinary.com/astratv-africa/image/upload/v1660993269/astra_tv/2022/7/nKVMXjkMuLVaFERsaOtO7uIVAz3Qef.jpg',
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
    // width: undefined,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width * 1.2,
    top: 0,
    left: 0,
    justifyContent: 'flex-start',
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default HomeCover;
