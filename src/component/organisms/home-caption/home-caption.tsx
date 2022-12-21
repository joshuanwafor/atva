import * as React from 'react';
import FastImage from 'react-native-fast-image';
import {ms} from 'react-native-size-matters';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';
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
import {brandTheme} from 'src/style/theme';
import {useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function HomeCaption({caption}: {caption: MinimalContent}) {
  const insets = useSafeAreaInsets();
  const {max, delta} = getDefaultCoverHeight(insets.top);
  const translation = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation<HomeScreenNavigationProp>();

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
    <Animated.View style={{minHeight: 120, alignItems: 'flex-end'}}>
      <LinearGradient
        style={{width: '100%'}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0, 0.7, 0.8, 1]}
        colors={['transparent', brandTheme.colors.black]}>
        <CaptionItemWrapper>
          <FooterWrapper>
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
      </LinearGradient>
  
    </Animated.View>
  );
}

export default HomeCaption;
