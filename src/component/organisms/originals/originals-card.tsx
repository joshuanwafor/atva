import * as React from 'react';
import FastImage from 'react-native-fast-image';
import {
  CardWrapper,
  InnerWrapper,
  ImageWrapper,
  Image,
  FooterWrapper,
  FooterTitleWrapper,
  FooterTitle,
  FooterPosterWrapper,
  PosterImage,
} from './style';
import BlurButton from '../../molecules/button/blur-button';
import MovieTags from '../../molecules/tags';
import {MinimalContent} from 'src/interface/content';
import {TouchableOpacity} from 'react-native-gesture-handler';

export function OriginalsCard({
  onPress,
  item,
}: {
  onPress: () => void;
  item: MinimalContent;
}) {
  return (
    <CardWrapper>
      <InnerWrapper>
        <TouchableOpacity style={{width: '100%'}} onPress={onPress}>
          <ImageWrapper>
            <Image
              source={{
                uri: item.thumbnail_vertical?.url,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </ImageWrapper>
        </TouchableOpacity>
      </InnerWrapper>
      <FooterWrapper>
        <FooterTitleWrapper>
          <FooterPosterWrapper>
            <PosterImage
              source={{
                uri: item.logo?.url,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </FooterPosterWrapper>
          <FooterTitle numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </FooterTitle>
          <MovieTags tags={item.tags} type="light" />
        </FooterTitleWrapper>
        <BlurButton onPress={onPress}>Learn more</BlurButton>
      </FooterWrapper>
    </CardWrapper>
  );
}

export default OriginalsCard;
