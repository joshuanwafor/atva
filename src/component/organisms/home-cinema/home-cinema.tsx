import * as React from 'react';
import FastImage from 'react-native-fast-image';
import {View} from 'react-native';
// @ts-ignore
import Video from 'react-native-video';
import {
  Image,
  CardWrapper,
  InnerWrapper,
  ImageWrapper,
  FooterWrapper,
  VideoControlItem,
  VideoControlItems,
  VideoFooterWrapper,
  VideoParentalRateWrapper,
  PGBg,
  PGText,
  FooterItemWrapper,
} from './style';
import TouchableItem from '../../molecules/touchable-item';
import VolumeUp from '../../atoms/icons/volume-up';
import VolumeMuted from '../../atoms/icons/volume-muted';
import BlurButton from '../../molecules/button/blur-button';
import WhiteButton from '../../molecules/button/white-button';
import {MinimalContent, Movie} from '../../../interface/content';
import {HomeScreenNavigationProp} from '../../../interface/navigation';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';
import BuyTicketAction from './buy-ticket';
// TODO: auto play when focussed
const HomeCinema = React.memo(function ({content}: {content: MinimalContent}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const movieRef = React.useRef<Video>(null);

  const actionRef = React.useRef<Modalize>(null);

  const showActionRef = () => {
    actionRef.current?.open();
  };

  const navigation = useNavigation<HomeScreenNavigationProp>();

  function onMore() {
    navigation.push('Details', {
      movie: content,
      movie_id: content.id,
      isCinema: true,
      isFeatured: false,
      isTvShow: false,
      isWatching: false,
      title: content.title,
    });
  }
  return (
    <CardWrapper>
      <BuyTicketAction
        contentId={content.id}
        tickets={content.premieres ?? []}
        innerRef={actionRef}
        onChange={() => {
          actionRef.current?.close();
        }}
      />
      <InnerWrapper>
        <ImageWrapper>
          <Image
            source={{
              uri: content.banner?.url,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </ImageWrapper>
        <VideoFooterWrapper>
          <VideoParentalRateWrapper>
            <PGBg>
              <PGText>16+</PGText>
            </PGBg>
          </VideoParentalRateWrapper>
        </VideoFooterWrapper>
      </InnerWrapper>
      <FooterWrapper>
        <FooterItemWrapper>
          <WhiteButton
            onPress={() => {
              //showActionRef();
              onMore();
            }}
          >
            Buy ticket
          </WhiteButton>
        </FooterItemWrapper>
        <View style={{width: 10}} />
        <FooterItemWrapper>
          <BlurButton
            onPress={() => {
              onMore();
            }}
          >
            Learn more
          </BlurButton>
        </FooterItemWrapper>
      </FooterWrapper>
    </CardWrapper>
  );
});

export default HomeCinema;
