import React from 'react';
import {
  BackHandler,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {TouchableItem} from 'react-native-tab-view';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Video, {OnSeekData, OnProgressData} from 'react-native-video';
import {
  useNavigation,
  useRoute,
  RouteProp,
  NavigationProp,
} from '@react-navigation/native';
import ArrowLeft from '../../atoms/icons/arrow-left';
import Pause from '../../atoms/icons/pause';
import SplashScreen from 'react-native-splash-screen';
import Play from '../../atoms/icons/play';
import VolumeMuted from '../../atoms/icons/volume-muted';
import VolumeUp from '../../atoms/icons/volume-up';
import Loader from '../../atoms/loader';
import {
  VideoHeaderWrapper,
  MovieTitle,
  LoaderWrapper,
  VideoFooterWrapper,
  ProgressBarWrapper,
  BottomControlsWrapper,
  VideoFooterLeftControlWrapper,
  VideoControlItem,
  VideoFooterRightControlWrapper,
  VideoFooterWrapperLandScape,
} from './style';
import {theme} from '../../../style/theme';
import ProgressBar from '../movie-playing/progress-slider';
import Orientation from 'react-native-orientation-locker';
import {
  CinemaScreenRouteProp,
  RootStackParameterList,
} from '../../../interface';
import {isLandscape} from 'react-native-device-info';

export const MainVideoPlayer = ({
  link,
  onBackPress,
  isLandScape,
}: {
  link: string;
  onBackPress?: Function;
  isLandScape?: boolean;
}) => {
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  const route = useRoute<CinemaScreenRouteProp>();
  let {
    params: {movie},
  } = route;

  const [canPlay, setCanPlay] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isControlShown, setIsControlShown] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState(0);
  const movieRef = React.useRef<Video>(null);

  React.useEffect(() => {
    setIsFullScreen(isLandScape ?? false);
    // if(isLandScape==true){
    //   onFullScreen();
    // }
  }, []);
  React.useEffect(() => {
    SplashScreen.hide();
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (isFullScreen) {
        Orientation.lockToPortrait();
      }
      //navigation.pop();
      return true;
    });

    return () => {};
  }, [isFullScreen]);

  const onSeek = (data: OnSeekData) => {
    if (movieRef.current !== null) {
      setCurrentTime(data.seekTime);
      movieRef.current.seek(data.seekTime, 50);
    }
  };

  const onFullScreen = () => {
    // if  isLanscape is set to true; avoid switch
    if (isLandScape == true) return;

    if (!isFullScreen) {
      Orientation.lockToLandscape();
    } else {
      if (Platform.OS === 'ios') {
        Orientation.lockToPortrait();
      }
      Orientation.lockToPortrait();
    }
    setIsFullScreen(!isFullScreen);
  };

  const onProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
    setDuration(data.playableDuration);
  };

  const showControls = () => {
    setIsControlShown(!isControlShown);
  };

  console.log(movie.playbackURL);
  const VideoSection = (
    <Video
      source={{
        uri: link,
      }}
      resizeMode="cover"
      style={{width: '100%', height: '100%', backgroundColor: 'black'}}
      controls={false}
      ref={movieRef}
      paused={isPaused}
      muted={isMuted}
      maxBitRate={1000000}
      onLoadStart={() => {
        setCanPlay(true);
      }}
      onError={() => {
        console.log('Error occured loading');
      }}
      onBuffer={() => {
        console.log('video buffering');
        setIsLoading(true);
      }}
      onPlaybackResume={() => {
        console.log('play resume');
        setIsLoading(false);
      }}
      onProgress={onProgress}
      onEnd={() => {
        setCurrentTime(0);
        movieRef?.current?.seek(0);
        setIsPlaying(false);
      }}
    />
  );

  const FooterComponents = (
    <>
      <ProgressBarWrapper>
        <ProgressBar
          currentTime={currentTime}
          duration={duration > 0 ? duration : 0}
          onSlideStart={() => {}}
          onSlideComplete={() => {}}
          onSlideCapture={onSeek}
        />
      </ProgressBarWrapper>
      <BottomControlsWrapper>
        <VideoFooterLeftControlWrapper>
          <VideoControlItem>
            <TouchableItem
              accessible
              accessibilityRole="button"
              delayPressIn={0}
              onPress={() => {
                setIsPaused(!isPaused);
              }}
            >
              {isPaused ? (
                <Play fill="#fff" width={20} height={20} />
              ) : (
                <Pause fill="#fff" width={20} height={20} />
              )}
            </TouchableItem>
          </VideoControlItem>
          <VideoControlItem>
            <TouchableItem
              accessible
              accessibilityRole="button"
              accessibilityLabel="Mute/Unmute Video"
              delayPressIn={0}
              onPress={() => {
                setIsMuted(!isMuted);
              }}
            >
              {isMuted ? (
                <VolumeMuted fill="#fff" width={20} height={20} />
              ) : (
                <VolumeUp fill="#fff" width={20} height={20} />
              )}
            </TouchableItem>
          </VideoControlItem>
        </VideoFooterLeftControlWrapper>
        <VideoFooterRightControlWrapper>
          <VideoControlItem>
            <TouchableItem
              accessible
              accessibilityRole="button"
              accessibilityLabel="Mute/Unmute Video"
              delayPressIn={0}
              onPress={() => {}}
            >
              <MaterialCommunityIcons
                name="subtitles-outline"
                size={22}
                color={theme.colors.white}
              />
            </TouchableItem>
          </VideoControlItem>
          <VideoControlItem>
            <TouchableItem
              accessible
              accessibilityRole="button"
              accessibilityLabel="Mute/Unmute Video"
              delayPressIn={0}
              onPress={onFullScreen}
            >
              <MaterialCommunityIcons
                name="arrow-expand"
                size={22}
                color={theme.colors.white}
              />
            </TouchableItem>
          </VideoControlItem>
        </VideoFooterRightControlWrapper>
      </BottomControlsWrapper>
    </>
  );

  return (
    <TouchableWithoutFeedback onPress={showControls}>
      <View
        style={{
          aspectRatio: 16 / 9,
          backgroundColor: 'green',
          width: '100%',
        }}
      >
        {isControlShown && (
          <VideoHeaderWrapper>
            <TouchableItem
              style={{padding: 12}}
              onPress={() => {
                if (onBackPress != undefined) onBackPress();
                if (isFullScreen) {
                  Orientation.lockToPortrait();
                }
                navigation.goBack();
              }}
            >
              <ArrowLeft width={22} height={22} fill={theme.colors.white} />
            </TouchableItem>
            <MovieTitle style={{marginTop: 12}}>
              {route.params.movie.title}
            </MovieTitle>
            <Entypo
              name="dots-three-vertical"
              size={22}
              style={{padding: 12}}
              color={theme.colors.white}
            />
          </VideoHeaderWrapper>
        )}

        {link == '' || link == undefined ? (
          <LoaderWrapper>
            <Loader width={28} height={28} />
          </LoaderWrapper>
        ) : (
          VideoSection
        )}

        {(canPlay == false || isLoading) && (
          <LoaderWrapper>
            <Loader width={28} height={28} />
          </LoaderWrapper>
        )}

        {isControlShown &&
          (isFullScreen == false ? (
            <VideoFooterWrapper>{FooterComponents}</VideoFooterWrapper>
          ) : (
            <VideoFooterWrapperLandScape>
              {FooterComponents}
            </VideoFooterWrapperLandScape>
          ))}
        {/*
        <ControlWrapper>
          <ControlItemWrapper>
            <TouchableItem
              onPress={() => {
                setIsPaused(!isPaused);
              }}>
              {isPaused ? (
                <Play fill="#fff" width={28} height={28} />
              ) : (
                <Pause fill="#fff" width={28} height={28} />
              )}
            </TouchableItem>
          </ControlItemWrapper>
        </ControlWrapper> */}
      </View>
    </TouchableWithoutFeedback>
  );
};
