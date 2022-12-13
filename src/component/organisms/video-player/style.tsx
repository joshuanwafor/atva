import {theme} from '../../../style/theme';
import styled from 'styled-components/native';
import {Dimensions, StatusBar} from 'react-native';

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  height: 100%;
  width: 100%;
`;

export const LoaderWrapper = styled.View`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const ControlWrapper = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const ControlItemWrapper = styled.View`
  width: 40px;
  height: 40px;
`;

export const VideoHeaderWrapper = styled.View`
  flex-direction: row;
  position: absolute;
  z-index: 2;
  width: 100%;
  margin-top: 0px;
  justify-content: space-between;
`;

export const MovieTitle = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white};
`;

export const VideoFooterWrapper = styled.View<{
  height?: string;
  width?: string;
}>`
  position: absolute;
  flex-direction: column;
  z-index: 1;
  margin-top: auto;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.5);
`;

export const VideoFooterWrapperLandScape = styled.View<{
  height?: string;
  width?: string;
}>`
  position: absolute;
  flex-direction: column;
  z-index: 1;
  margin-top: auto;
  justify-content: flex-end;
  width: 100%;
  height: ${Dimensions.get('screen').width - (StatusBar.currentHeight ?? 45)}px;
  padding-bottom: 0px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const BottomControlsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const VideoFooterLeftControlWrapper = styled.View`
  flex-direction: row;
  width: 100px;
  justify-content: flex-start;
  align-items: center;
`;

export const VideoFooterRightControlWrapper = styled.View`
  flex-direction: row;
  width: 100px;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;

export const VideoControlItem = styled.View`
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const ProgressBarWrapper = styled.View`
  width: 100%;
  align-items: flex-start;
`;
