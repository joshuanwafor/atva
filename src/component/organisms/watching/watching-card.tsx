import * as React from 'react';
import FastImage from 'react-native-fast-image';
import TouchableItem from '../../molecules/touchable-item';
import {
  CardWrapper,
  InnerWrapper,
  ImageWrapper,
  Image,
  Time,
  ItemWrapper,
  WatchingOverlay,
} from './style';
import {Watching} from '../../../interface';
import Play from '../../atoms/icons/play';

interface TProps {
  onPress?: () => void;
  item: Watching;
}

function WatchingCard({onPress, item}: TProps) {
  return (
    <CardWrapper>
      <TouchableItem
        accessible
        accessibilityRole="button"
        accessibilityComponentType="button"
        accessibilityLabel="Movie card"
        accessibilityTraits="button"
        delayPressIn={0}
        style={{flex: 1, width: '100%'}}
        onPress={onPress}>
        <InnerWrapper>
          <ImageWrapper>
            <Image
              source={{
                uri: item.image,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </ImageWrapper>
          <ItemWrapper>
            <WatchingOverlay
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              locations={[0, 0.6, 1]}
              colors={[
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.7)',
              ]}
            />
            <Play width={14} height={14} fill="white" />
            <Time>{item.time}</Time>
          </ItemWrapper>
        </InnerWrapper>
      </TouchableItem>
    </CardWrapper>
  );
}

export default WatchingCard;
