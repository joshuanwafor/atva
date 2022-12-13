import * as React from 'react';
import styled from 'styled-components/native';
import {s} from 'react-native-size-matters';
import {StatusBar} from 'react-native';
import {TChildProps} from '../../interface';
import Orientation from 'react-native-orientation-locker';
import {theme} from '../../style/theme';
import {sizeScale, getColorFromTheme} from '../../utils';

const Wrapper = styled.View`
  width: 100%;
  padding-top: ${sizeScale(s(5), 'px')};
  flex: 1;
`;

export const Background = styled.View`
  height: 100%;
  flex: 1;
  background: ${getColorFromTheme('black')};
`;

function DownloadsTemplate({children}: TChildProps) {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.black}
        animated={true}
        showHideTransition="slide"
      />
      <Wrapper>{children}</Wrapper>
    </Background>
  );
}

export default DownloadsTemplate;
