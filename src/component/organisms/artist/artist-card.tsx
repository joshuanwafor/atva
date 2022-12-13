import * as React from 'react';
import FastImage from 'react-native-fast-image';
import {
  Image,
  CardWrapper,
  InnerWrapper,
  ImageWrapper,
  ArtistName,
  ArtistImageWrapper,
  ArtistImageContainer,
} from './style';
import TouchableItem from '../../molecules/touchable-item';
import {Artist} from '../../../interface';
import {TCrewSchema} from '../../../interface/content';

interface TProps {
  artist: TCrewSchema;
  onPress: () => void;
  hasSize?: boolean;
}

function ArtistCard({artist, onPress, hasSize}: TProps) {
  return (
    <CardWrapper hasSize={hasSize}>
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
          <ArtistImageContainer>
            <ArtistImageWrapper
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#fa709a', '#fee140']}
            />
            <ImageWrapper>
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </ImageWrapper>
          </ArtistImageContainer>
          <ArtistName>{artist.user.name}</ArtistName>
        </InnerWrapper>
      </TouchableItem>
    </CardWrapper>
  );
}

export default ArtistCard;
