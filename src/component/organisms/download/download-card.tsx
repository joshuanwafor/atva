import * as React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import Animated, {
  useCode,
  cond,
  eq,
  set,
  add,
  not,
  clockRunning,
  call,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  State,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {DownloadList} from '../../../interface';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';
import {theme} from '../../../style/theme';
import {formatBytes} from '../../../utils/index';
import TouchableItem from '../../molecules/touchable-item';
import CheckIcon from '../../atoms/icons/check';
import DeleteIcon from '../../atoms/icons/delete';
import PauseIcon from '../../atoms/icons/pause';
import NextIcon from '../../atoms/icons/angle-arrow-right';
import StoppedIcon from '../../atoms/icons/info';
import {
  usePanGestureHandler,
  useValue,
  clamp,
  minus,
  snapPoint,
  useClock,
  timing,
} from 'react-native-redash';

const CardWrapper = styled.View`
  height: 56px;
  padding-left: 15px;
`;

const CardBackground = styled.View`
  background-color: ${getColorFromTheme('rouge')};
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin-left: 15px;
  border-radius: 5px;
`;

const TextContentWrapper = styled.View`
  margin-left: 10px;
  align-items: flex-start;
`;

const IconsContentWrapper = styled.View`
  margin-left: auto;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  justify-content: space-between;
`;

const TitleContent = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('pale')};
`;

const TagContentWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TagContent = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('brownishGrey')};
`;

const ProgressBarWrapper = styled.View`
  margin-right: 30px;
  position: relative;
  width: 35px;
  border-radius: 2px;
  height: 4px;
  background-color: ${getColorFromTheme('white10')};
  overflow: hidden;
`;

const ProgressBar = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  background-color: ${getColorFromTheme('watermelon')};
  z-index: 11;
`;

const Dot = styled.Text`
  font-size: ${sizeScale(ms(10, 0.2), 'px')};
  color: ${getColorFromTheme('pale')};
  font-family: ${getFontFromTheme('medium')};
`;

const {width} = Dimensions.get('window');
const snapPoints = [width, -50, 0];

function DownloadListCard(props: {
  item: DownloadList;
  onPress: () => void;
  onSwipe: () => void;
}) {
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const translateX = useValue(0);
  const offsetX = useValue(0);
  const height = useValue(56);
  const to = snapPoint(translateX, velocity.x, snapPoints);
  const deleteOpacity = useValue(1);
  const clock = useClock();
  const shouldRemove = useValue(0);

  const removeCard = () => {
    props.onSwipe;
    shouldRemove.setValue(0);
  };

  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(
          translateX,
          add(offsetX, clamp(translation.x, -9999, minus(offsetX))),
        ),
      ),
      cond(eq(state, State.END), [
        set(translateX, timing({clock, from: translateX, to})),
        set(offsetX, translateX),
        cond(eq(to, -width), set(shouldRemove, 1)),
      ]),
      cond(shouldRemove, [
        set(height, timing({from: height, to: 0})),
        set(deleteOpacity, 0),
        cond(
          not(clockRunning(clock)),
          call([], () => {
            removeCard;
          }),
        ),
      ]),
    ],
    [removeCard],
  );

  const {title, image, tags, progress, download, isSeasonal} = props.item;
  const {status, size} = download;

  return (
    <Animated.View>
      <CardBackground>
        <TouchableWithoutFeedback onPress={() => removeCard()}>
          <DeleteIcon fill={theme.colors.pale} height={12} width={12} />
        </TouchableWithoutFeedback>
      </CardBackground>
      <PanGestureHandler
        failOffsetY={[-5, 5]}
        activeOffsetX={[-5, 5]}
        {...gestureHandler}>
        <Animated.View style={{height, transform: [{translateX}]}}>
          <CardWrapper>
            <TouchableItem
              accessible
              accessibilityRole="button"
              accessibilityComponentType="button"
              accessibilityLabel="Movie card"
              accessibilityTraits="button"
              delayPressIn={0}
              style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: theme.colors.black,
                borderRadius: 4,
              }}
              onPress={props.onPress}>
              <FastImage
                style={{height: 40, width: 40, borderRadius: 4}}
                resizeMode={FastImage.resizeMode.cover}
                source={{
                  uri: image,
                  priority: FastImage.priority.high,
                }}
              />
              <TextContentWrapper>
                <TitleContent>{title}</TitleContent>
                <TagContentWrapper>
                  <TagContent>{isSeasonal ? tags[1] : tags[0]}</TagContent>
                  <Dot> . </Dot>
                  <TagContent>{formatBytes(size)}</TagContent>
                </TagContentWrapper>
              </TextContentWrapper>
              <IconsContentWrapper>
                {status !== 'completed' ? (
                  <>
                    <ProgressBarWrapper>
                      <ProgressBar style={{width: `${progress}%`}} />
                    </ProgressBarWrapper>
                    {status === 'progress' && (
                      <CheckIcon fill="#adadad" height={12} width={12} />
                    )}
                    {status === 'paused' && (
                      <PauseIcon fill="#adadad" height={12} width={12} />
                    )}
                    {status === 'info' && (
                      <StoppedIcon fill="#adadad" height={12} width={12} />
                    )}
                  </>
                ) : (
                  <NextIcon fill="#adadad" height={12} width={12} />
                )}
              </IconsContentWrapper>
            </TouchableItem>
          </CardWrapper>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

export default DownloadListCard;
