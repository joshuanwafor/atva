import React from 'react';
import {Box} from 'native-base';
import {VideoPlayer} from './VideoPlayer';
import {SafeAreaView} from 'react-native-safe-area-context';

export const MainVideoPlayer = ({
  link,
  onBackPress,
  isLandScape,
}: {
  link: string;
  onBackPress?: Function;
  isLandScape?: boolean;
}) => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <VideoPlayer durationInSec={1000} />
    </SafeAreaView>
  );
};
