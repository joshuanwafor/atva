import * as React from 'react';
import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {ListRenderItemInfo, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {TrailsPictures} from '../../../interface';
import {sizeScale, getColorFromTheme, getFontFromTheme} from '../../../utils';
import TouchableItem from '../../molecules/touchable-item';
import PlayCircle from '../../atoms/icons/play-circle';

const CardWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${sizeScale(ms(300, 0.3), 'px')};
`;

const InnerWrapper = styled.View`
  width: 100%;
`;

const ImageWrapper = styled.View`
  border-radius: 10px;
  height: ${sizeScale(ms(190, 0.3), 'px')};
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${getColorFromTheme('blackTwoV2')};
  margin-bottom: 10px;
  width: 100%;
`;

const Image = styled(FastImage)`
  width: 100%;
  min-height: 100%;
`;

const Text = styled.Text`
  color: #fff;
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.3), 'px')};
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
  width: 40px;
  height: 40px;
`;

function TrailersAndPictures({items}: {items: TrailsPictures[]}) {
  const renderItem = React.useCallback(
    ({item}: ListRenderItemInfo<TrailsPictures>) => {
      return (
        <CardWrapper>
          <TouchableItem
            accessible
            accessibilityRole="button"
            accessibilityComponentType="button"
            accessibilityLabel="Play video"
            accessibilityTraits="button"
            delayPressIn={0}
            style={{width: '100%'}}
            onPress={() => {}}>
            <InnerWrapper>
              <ImageWrapper>
                <Image
                  source={{
                    uri: item.src,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </ImageWrapper>
              <ControlWrapper>
                <ControlItemWrapper>
                  {item.isTrailer && (
                    <TouchableItem
                      accessible
                      accessibilityRole="button"
                      accessibilityComponentType="button"
                      accessibilityLabel="Play video"
                      accessibilityTraits="button"
                      delayPressIn={0}
                      onPress={() => {}}>
                      <PlayCircle width={40} height={40} fill="#fff" />
                    </TouchableItem>
                  )}
                </ControlItemWrapper>
              </ControlWrapper>
            </InnerWrapper>
            <Text>{item.title || ''}</Text>
          </TouchableItem>
        </CardWrapper>
      );
    },
    [],
  );

  return (
    <FlatList
      renderItem={renderItem}
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      disableIntervalMomentum={true}
      pagingEnabled={false}
      snapToStart={true}
      snapToInterval={382}
      ItemSeparatorComponent={() => <View style={{width: 20}} />}
      keyExtractor={(item) => item.id}
      style={{
        marginTop: 5,
        marginBottom: 20,
      }}
      contentContainerStyle={{
        paddingHorizontal: s(12),
        alignItems: 'flex-start',
      }}
    />
  );
}

export default TrailersAndPictures;
