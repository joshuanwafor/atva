import * as React from 'react';
import FastImage from 'react-native-fast-image';
import {ms} from 'react-native-size-matters';
import Animated, { Extrapolate, interpolate} from 'react-native-reanimated';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {
  CaptionItemWrapper,
  FooterWrapper,
  TitleWrapper,
  FooterInnerWrapper,
  Title,
} from './style';
import CaptionTags from '../../molecules/caption-tags';
import {getDefaultCoverHeight} from '../../../utils';
import BlurButton from '../../molecules/button/blur-button';
import Info from '../../atoms/icons/info';
import {HomeScreenNavigationProp} from '../../../interface';
import {FeaturedContent, MinimalContent} from '../../../interface/content';

function HomeCaption({
  caption,
  y,
}: {
  caption: MinimalContent;
  y: Animated.Value<number>;
}) {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {max} = getDefaultCoverHeight(20);

    //@ts-ignore
  const height = interpolate(y, {
    inputRange: [-max, 70],
    outputRange: [0, max + 250],
    extrapolate: Extrapolate.CLAMP,
  });

  

    //@ts-ignore
  const opacity = interpolate(y, {
    inputRange: [-max / 2, 0, max / 1.3],
    outputRange: [0, 1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  function onNavigateMore() {
    console.log(caption);
    navigation.navigate('Details', {
      movie: caption,
      movie_id: caption.id,
      isWatching: false,
      isFeatured: true,
      isCinema: true,
      isTvShow: false,
    });
  }

  return (
    <View style={{minHeight: 120, alignItems: 'flex-end'}}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            alignItems: 'center',
          },
          {height},
        ]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          locations={[0, 0.7, 0.8, 1]}
          colors={['#14141400', '#14141440', '#14141460', '#141414']}
        />
      </Animated.View>
      <CaptionItemWrapper>
        <FooterWrapper style={{opacity}}>
          <FooterInnerWrapper>
            <TitleWrapper>
              {caption.logo && (
                <FastImage
                  source={{
                    uri: caption.logo.small,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                  style={{
                    // height: ms(caption.title_img.height, 0.3),
                    // width: ms(caption.title_img.width, 0.3),
                    marginBottom: 10,
                  }}
                />
              )}
              {!caption.logo && <Title>{caption.title}</Title>}
              <CaptionTags tags={caption.tags} />
            </TitleWrapper>
          </FooterInnerWrapper>
          <BlurButton
            onPress={onNavigateMore}
            icon={<Info fill="#fff" width={12} height={12} />}>
            Learn more
          </BlurButton>
        </FooterWrapper>
      </CaptionItemWrapper>
    </View>
  );
}

export default HomeCaption;
