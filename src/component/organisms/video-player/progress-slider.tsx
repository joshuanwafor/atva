import React from 'react';
import Slider from '@react-native-community/slider';
import {Box, HStack, VStack} from 'native-base';
import {AppTypography, AppTypographySemiBold} from 'src/component/atoms/typographyv2';

interface Props {
  currentTime: number;
  duration: number;
  onSlideCapture: (data: any) => void;
  onSlideStart: () => void;
  onSlideComplete: (data: any) => void;
}

export const VideoProgressBar: React.FC<Props> = ({
  currentTime,
  duration,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
}) => {
  function getMinutesFromSeconds(time: number) {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  }

  function handleOnSlide(time: number) {
    onSlideCapture({seekTime: time});
  }

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  return (
    <VStack>
      <HStack alignItems={'center'} justifyContent="space-between">
        <AppTypography fontSize={16} color="gray.50">
          {position}
        </AppTypography>
        <AppTypography fontSize={16} color="gray.50">
          {fullDuration}
        </AppTypography>
      </HStack>
      <Box>
        <Slider
          style={{
            alignSelf: 'flex-start',
            marginTop: 5,
            width: '100%',
          }}
          tapToSeek={true}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          step={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="red"
          onValueChange={handleOnSlide}
          onSlidingStart={onSlideStart}
          onSlidingComplete={onSlideComplete}
        />
      </Box>
    </VStack>
  );
};

export default VideoProgressBar;
