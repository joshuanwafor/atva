import React from 'react';
import {Box} from 'native-base';
import {VideoPlayer} from './VideoPlayer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {CinemaScreenRouteProp} from 'src/interface/navigation';

export const MainVideoPlayer = ({
  link,
  onBackPress,
  isLandScape,
}: {
  link: string;
  onBackPress?: Function;
  isLandScape?: boolean;
}) => {
  const route = useRoute<CinemaScreenRouteProp>();
  let {
    params: {movie},
  } = route;
  //@ts-ignore
  let hr = movie?.duration?.hour ?? 0;
  //@ts-ignore
  let mins = movie?.duration?.minute ?? 0;
  //@ts-ignore
  let secs = movie?.duration?.second ?? 0;
  let totalSecs = hr * 60 * 60 + mins * 60 + secs;

  return (
    <SafeAreaView style={{height: '100%'}}>
      <VideoPlayer durationInSec={totalSecs} title={movie.title} url={link} />
    </SafeAreaView>
  );
};
