import * as React from 'react';
import FastImage from 'react-native-fast-image';
import {
  CardWrapper,
  InnerWrapper,
  ImageWrapper,
  Image,
  InnerItemWrapper,
  TitleImage,
} from './style';
import TouchableItem from '../../molecules/touchable-item';
import {MinimalContent, Movie} from '../../../interface/content';

export function FeaturedCard({
  onPress,
  item,
}: {
  onPress: () => void;
  item: MinimalContent;
}) {
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
                uri: item.thumbnail_vertical?.url ?? item.banner?.url ?? '',
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </ImageWrapper>
          <InnerItemWrapper>
            <TitleImage
              source={{
                uri: item.thumbnail_vertical && item.thumbnail_vertical?.url,
                priority: FastImage.priority.high,
              }}
              style={
                {
                  // width: item.thumbnail_vertical.,
                  // height: item.title_img.height,
                }
              }
              resizeMode={FastImage.resizeMode.contain}
            />
          </InnerItemWrapper>
        </InnerWrapper>
      </TouchableItem>
    </CardWrapper>
  );
}

export default FeaturedCard;
