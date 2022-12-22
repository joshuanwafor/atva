import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {getDefaultDetailsCoverHeight} from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import {brandTheme} from 'src/style/theme';
import {Box, VStack} from 'native-base';

interface CoverProps {
  y: Animated.Value<number>;
  cover: string;
}

const DetailsCover = React.memo(function ({cover, y}: CoverProps) {
  const insets = useSafeAreaInsets();
  const {max, delta} = getDefaultDetailsCoverHeight(insets.top);

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

      <VStack
        position={'absolute'}
        justifyContent="flex-end"
        h={Dimensions.get('screen').width * 1.2}
        w="100%"
        left={0}
        top={0}>
        <Box height={100}>
          <LinearGradient
            style={{width: '100%', height: '100%', position: 'absolute'}}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            locations={[0, 1]}
            colors={['transparent', brandTheme.colors.black]}
          />
        </Box>
      </VStack>
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
