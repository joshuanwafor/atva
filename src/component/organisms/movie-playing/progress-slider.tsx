import React from 'react';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';
import {theme} from '../../../style/theme';

interface Props {
  currentTime: number;
  duration: number;
  onSlideCapture: (data: any) => void;
  onSlideStart: () => void;
  onSlideComplete: () => void;
}

const Wrapper = styled.View`
  align-items: flex-start;
  width: 100%;
  padding: 0;
`;
const DurationText = styled.Text<{color: string}>`
  color: ${(props) => (props.color ? props.color : theme.colors.brownishGrey)};
  font-size: 15px;
`;

const DurationTextWrapper = styled.View`
  width: 100%;
`;

const ProgressBar: React.FC<Props> = ({
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
    <Wrapper>
      <DurationTextWrapper>
        <DurationText color={theme.colors.white}>
          {position}{' '}
          <DurationText color={theme.colors.brownishGrey}>
            / {fullDuration}
          </DurationText>
        </DurationText>
      </DurationTextWrapper>
      <Slider
        style={{
          width: '102%',
          alignSelf: 'flex-start',
          marginTop: 5,
        }}
        minimumValue={0}
        maximumValue={duration}
        value={currentTime}
        step={1}
        minimumTrackTintColor={theme.colors.pink}
        maximumTrackTintColor={theme.colors.white70}
        thumbTintColor={theme.colors.pink}
        onValueChange={handleOnSlide}
        onSlidingStart={onSlideStart}
        onSlidingComplete={onSlideComplete}
      />
    </Wrapper>
  );
};

export default ProgressBar;
