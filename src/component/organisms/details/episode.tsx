import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {sizeScale, getColorFromTheme, getFontFromTheme} from '../../../utils';
import TouchableItem from '../../molecules/touchable-item';
import PlayCircle from '../../atoms/icons/play-circle';
import {Episode as EpisodeType} from '../../../interface';
import Download from '../../atoms/icons/download';
import Check from '../../atoms/icons/check';
import {theme} from '../../../style/theme';

const CardWrapper = styled.View`
  width: 100%;
  padding-horizontal: ${sizeScale(ms(12, 0.3), 'px')};
  margin-bottom: 10px;
`;

const InnerWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${getColorFromTheme('blackThree')};
  border-radius: 10px;
  padding: ${sizeScale(ms(10, 0.3), 'px')};
`;

const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DownloadWrapper = styled.View`
  margin-left: 20px;
  padding-right: 12px;
`;

const ImageWrapper = styled.View`
  border-radius: 10px;
  height: ${sizeScale(ms(60, 0.3), 'px')};
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${getColorFromTheme('blackTwoV2')};
  width: ${sizeScale(ms(100, 0.3), 'px')};
  margin-right: 10px;
`;

const Image = styled(FastImage)`
  width: 100%;
  min-height: 100%;
`;

const Text = styled.Text`
  color: #fff;
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.3), 'px')};
  margin-bottom: 5px;
`;

const ControlWrapper = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const ControlItemWrapper = styled.View`
  width: 28px;
  height: 28px;
`;

export const ProgressWrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 1px;
`;

export const Time = styled.Text`
  font-size: ${sizeScale(ms(10, 0.2), 'px')};
  color: ${getColorFromTheme('brownGrey')};
  font-family: ${getFontFromTheme('medium')};
  margin-bottom: 5px;
`;

export const ProgressBarBottom = styled.View`
  width: 100%;
  position: relative;
  height: 1px;
  border-radius: 1px;
  background-color: ${getColorFromTheme('white10')};
`;

export const ProgressBarTop = styled.View`
  position: absolute;
  top: -1px;
  left: 0;
  height: 2px;
  height: 2px;
  background-color: ${getColorFromTheme('pink')};
`;

const Episode = React.memo(function ({episode}: {episode: EpisodeType}) {
  const [isDownloaded, setIsDownloaded] = React.useState(false);

  const handleDownload = React.useCallback(() => {
    setIsDownloaded(!isDownloaded);
  }, [isDownloaded]);

  const renderDownload = React.useMemo(() => {
    return (
      <TouchableItem
        accessible
        accessibilityRole="button"
        accessibilityComponentType="button"
        accessibilityLabel="Download episode"
        accessibilityTraits="button"
        delayPressIn={0}
        style={{width: '100%'}}
        disabled={isDownloaded}
        onPress={handleDownload}>
        {isDownloaded ? (
          <Check fill={theme.colors.alt} />
        ) : (
          <Download fill="#fff" />
        )}
      </TouchableItem>
    );
  }, [handleDownload, isDownloaded]);

  return (
    <CardWrapper>
      <InnerWrapper>
        <ContentWrapper>
          <ImageWrapper>
            <TouchableItem
              accessible
              accessibilityRole="button"
              accessibilityComponentType="button"
              accessibilityLabel="Play video"
              accessibilityTraits="button"
              delayPressIn={0}
              style={{width: '100%'}}
              onPress={() => {}}>
              <Image
                source={{
                  uri: episode.banner,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <ControlWrapper>
                <ControlItemWrapper>
                  <PlayCircle width={28} height={28} fill="#fff" />
                </ControlItemWrapper>
              </ControlWrapper>
            </TouchableItem>
            {(episode.isWatching || episode.isWatched) && (
              <ProgressWrapper>
                <ProgressBarBottom>
                  <ProgressBarTop style={{width: '50%'}} />
                </ProgressBarBottom>
              </ProgressWrapper>
            )}
          </ImageWrapper>
          <View>
            <Text>
              {episode.episode}: {episode.title || ''}
            </Text>
            <Time>43 min</Time>
          </View>
        </ContentWrapper>
        <DownloadWrapper>{renderDownload}</DownloadWrapper>
      </InnerWrapper>
    </CardWrapper>
  );
});

export default Episode;
