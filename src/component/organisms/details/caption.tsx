import * as React from 'react';
import FastImage from 'react-native-fast-image';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {View, StyleSheet, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  CaptionItemWrapper,
  FooterWrapper,
  TitleWrapper,
  FooterInnerWrapper,
  Title,
  TimeWrapper,
  TimeText,
  CinemaTime,
} from './style';
import CaptionTags from '../../molecules/caption-tags';
import {RootStackParameterList} from '../../../interface';
import {getDefaultDetailsCoverHeight} from '../../../utils';
import LinearButton from '../../molecules/button/linear-button';
import WhiteButton from '../../molecules/button/white-button';
import {useNavigation, NavigationProp, Link} from '@react-navigation/native';
import {Movie, FeaturedContent} from '../../../interface/content';
import {WatchlistActionButton} from '../watchlist-button';
import Orientation from 'react-native-orientation-locker';
import {userAuthStore} from '../../../store/data/user-auth';
import {observer} from 'mobx-react';

function DetailsCaption({
  caption,
  y,
  isWatching,
  isCinema,
}: {
  caption: Movie | FeaturedContent | undefined;
  isWatching?: boolean;
  isCinema?: boolean;
  y: Animated.Value<number>;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParameterList>>();

  const {max} = getDefaultDetailsCoverHeight(20);


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

  const onWatch = () => {
    if (caption == undefined) return;
    console.log(userAuthStore.data.content?.user);

    if (
      userAuthStore.data.content?.user.isSubscribed == false &&
      isCinema == false
    ) {
      //@ts-ignore
      navigation.navigate('CompleteRegister');
      return;
    }
    if (isCinema == true) {
      navigation.navigate('CinemaScreen', {movie: caption});
    } else {
      navigation.navigate('WatchScreen', {movie: caption});
      Orientation.lockToLandscape();
    }
  };

  const renderTime = React.useCallback(() => {
    if (caption == undefined) {
      return <View />;
    }

    if (caption.duration) {
      if (typeof caption.duration === 'string') {
        return (
          <TimeWrapper>
            <TimeText>{caption.duration}</TimeText>
          </TimeWrapper>
        );
      }
      let time = '';
      if (caption.duration.hour) {
        time = time + `${caption.duration.hour}h `;
      }
      if (caption.duration.minute) {
        time = time + `${caption.duration.minute}m`;
      }
      return (
        <TimeWrapper>
          <TimeText>{time}</TimeText>
        </TimeWrapper>
      );
    }

    return <View />;
  }, [caption]);

  const renderActions = React.useCallback(() => {
    //isWatching
    if (isWatching) {
      return (
        <React.Fragment>
          <WhiteButton
            onPress={() => {
              onWatch();
            }}>
            {'Resume'}
          </WhiteButton>
        </React.Fragment>
      );
    }

    if (false) {
      return (
        <React.Fragment>
          <WhiteButton onPress={() => {}}>Buy ticket N500</WhiteButton>
          <View style={{height: 15}} />
          <CinemaTime>Showing: Tomorrow 7pm</CinemaTime>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <LinearButton
          onPress={() => {
            onWatch();
          }}>
          Watch now
        </LinearButton>
        <View style={{height: 15}} />
        <WatchlistActionButton movie={caption} />
      </React.Fragment>
    );
  }, [isCinema, caption, isWatching, navigation, userAuthStore.data]);

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
              {caption?.logo?.small && (
                <FastImage
                  source={{
                    uri: caption?.logo?.small,
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
              {!caption?.logo?.small && <Title>{caption?.title}</Title>}
              <CaptionTags
                size="small"
                tags={caption?.tags ?? []}
                content={renderTime()}
              />
            </TitleWrapper>
          </FooterInnerWrapper>
          {renderActions()}
        </FooterWrapper>
      </CaptionItemWrapper>
    </View>
  );
}

export default observer(DetailsCaption);
