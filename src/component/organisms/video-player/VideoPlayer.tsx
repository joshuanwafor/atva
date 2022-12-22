import {Box, Button, Center, HStack, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import NetInfo from '@react-native-community/netinfo';

import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {} from 'src/component/atoms/typography';
import VideoProgressBar from './progress-slider';
import {
  ArrowCounterClockwise,
  ArrowLeft,
  DotsThreeVertical,
  FastForward,
  Pause,
  Play,
  Rewind,
} from 'phosphor-react-native';
import {
  AppTypography,
  AppTypographySemiBold,
} from 'src/component/atoms/typographyv2';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParameterList} from 'src/interface/navigation';
import Orientation from 'react-native-orientation-locker';

const TESTURL =
  'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
export const VideoPlayer = ({durationInSec}: {durationInSec: number}) => {
  const navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  const [playbackURL, setPlaybackURL] = React.useState('');
  const [isConnected, setIsConnected] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [allowRepeat, setAllowRepeat] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  let [isBuffering, setIsBuffering] = useState(false);
  let [hasError, setHasError] = useState(false);
  let [hasEnded, setHasEnded] = useState(false);
  let [seekableDuration, setSeekableDuration] = useState(0);
  let [currentTime, setCurrentTime] = useState(0);

  const [isControlShown, setIsControlShown] = React.useState(true);
  const movieRef = React.useRef<Video>(null);

  function pauseAction() {
    setIsPaused(true);
    setIsPlaying(false);
  }

  function forwardAction() {
    if (currentTime + 10 < durationInSec) {
      return;
    }
    seekAction(currentTime + 10);
  }
  function backwardAction() {
    if (currentTime - 10 == -1) {
      return;
    }
    seekAction(currentTime - 10);
  }

  function resumeAction() {
    setIsPaused(false);
    setIsPlaying(true);
  }

  function seekAction(val: any) {
    movieRef.current?.seek(val);
    setIsPlaying(false);
  }

  function replayAction() {
    movieRef.current?.seek(0, 0);

    setIsPaused(false);
    setIsPlaying(true);
    setHasEnded(false);
  }

  //{"currentTime": 18.251, "playableDuration": 18.1, "seekableDuration": 905}

  const showControls = () => {
    setIsControlShown(!isControlShown);
    console.log('toggled control');

    movieRef.current?.seek(0);

    movieRef.current?.forceUpdate();
  };

  useEffect(() => {
    setPlaybackURL(TESTURL);
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setIsConnected(state.isConnected ?? false);
      if (state.isConnected) {
        console.log(
          'is connected and will update video url to rerender video component',
        );
        setPlaybackURL(`${TESTURL}`);
        // resume from last sec
        //console.log(currentTime);
        seekAction(currentTime);
      }
    });
  }, []);

  if (isConnected == false) {
    return <OnNoInternetConnection />;
  }

  return (
    <TouchableWithoutFeedback onPress={showControls}>
      <Box
        style={{
          flex: 1,
          height: '100%',
          backgroundColor: 'orange',
          width: '100%',
        }}>
        <Video
          maxBitRate={300000}
          paused={isPaused}
          // repeat={true}
          fullscreenOrientation="landscape"
          fullscreen={false}
          currentTime={currentTime}
          source={{
            uri: playbackURL,
          }} // Can be a URL or a local file.
          ref={movieRef} // Store reference
          onBuffer={() => {
            setIsBuffering(true);
            console.log('Is Buffering');
          }} // Callback when remote video is buffering
          onError={() => {
            setHasError(true);
            setIsPlaying(false);
            console.log('error occured');
          }} // Callback when video cannot be loaded
          onLoadStart={() => {
            setHasEnded(false);
            console.log('On load start');
          }}
          onLoad={props => {
            setHasEnded(false);
            console.log('On load');
          }}
          onEnd={() => {
            console.log('On End');
            setHasEnded(true);
          }}
          onSeek={props => {
            console.log('on seek', props);
          }}
          onProgress={props => {
            setCurrentTime(props.currentTime);
            setSeekableDuration(props.seekableDuration);
            setIsPlaying(true);
          }}
          onReadyForDisplay={() => {
            console.log('ready for displayS');
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'orange',
          }}
          resizeMode="cover"
        />

        {/* Controlls */}
        {isControlShown ? (
          <VStack
            mb={'12px'}
            justifyContent={'space-between'}
            style={{
              zIndex: 100,
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              backgroundColor: 'rgba(20,20,20,.5)',
            }}>
            <Box>
              <HStack
                p="12px"
                space={'3'}
                alignContent={'center'}
                justifyContent="space-between">
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                    Orientation.lockToPortrait();
                  }}>
                  <ArrowLeft weight="regular" color="white" size={30} />
                </TouchableOpacity>
                <AppTypography>Video Title</AppTypography>
                <DotsThreeVertical weight="regular" color="white" size={30} />
              </HStack>
            </Box>
            {hasEnded == true ? (
              <HStack justifyContent={'center'}>
                <TouchableOpacity
                  onPress={() => {
                    replayAction();
                  }}>
                  <ArrowCounterClockwise
                    weight="regular"
                    color="white"
                    size={50}
                  />
                </TouchableOpacity>
              </HStack>
            ) : isPlaying || isPaused ? (
              <HStack
                space={'24'}
                alignContent={'center'}
                justifyContent="center"
                p="12px">
                <TouchableOpacity
                  onPress={() => {
                    backwardAction();
                  }}>
                  <Rewind weight="thin" color="white" size={50} />
                </TouchableOpacity>
                {isPaused ? (
                  <TouchableOpacity
                    onPress={() => {
                      resumeAction();
                    }}>
                    <Play weight="thin" color="white" size={50} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      pauseAction();
                    }}>
                    <Pause weight="thin" color="white" size={50} />
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  onPress={() => {
                    forwardAction();
                  }}>
                  <FastForward weight="thin" color="white" size={50} />
                </TouchableOpacity>
              </HStack>
            ) : (
              <Center>
                <AppTypographySemiBold>Loading</AppTypographySemiBold>
              </Center>
            )}

            <Box p="12px">
              <VideoProgressBar
                currentTime={currentTime}
                duration={durationInSec}
                onSlideCapture={val => {
                  // console.log(val)
                }}
                onSlideComplete={(val: any) => {
                  seekAction(val);
                }}
                onSlideStart={() => {}}
              />
            </Box>
          </VStack>
        ) : (
          <Box></Box>
        )}
      </Box>
    </TouchableWithoutFeedback>
  );
};

function OnNoInternetConnection() {
  return (
    <VStack
      p="24px"
      flex={1}
      height="100%"
      justifyContent={'space-between'}
      bg="black"
      space={'4'}
      alignContent="center">
      <Box></Box>
      <VStack space={'4'}>
        <AppTypographySemiBold textAlign={'center'}>
          No Internet connectivity
        </AppTypographySemiBold>
        <Center>
          <Button>Network Settings</Button>
        </Center>
      </VStack>
      <Box></Box>
    </VStack>
  );
}
