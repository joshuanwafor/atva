import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import Orientation from 'react-native-orientation-locker';
import {StatusBar} from 'react-native';
import {TChildProps} from '../../interface';
import {theme} from '../../style/theme';
import {sizeScale, getColorFromTheme} from '../../utils';

const Wrapper = styled.View`
  width: 100%;
  padding-top: ${sizeScale(ms(12), 'px')};
`;

const Background = styled(SafeAreaView)`
  background: ${getColorFromTheme('black')};
`;

function DownloadSettingsTemplate({children}: TChildProps) {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <Background edges={['bottom']}>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.black}
        animated={true}
        showHideTransition="slide"
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        snapToAlignment="center">
        <Wrapper>{children}</Wrapper>
      </ScrollView>
    </Background>
  );
}

export default DownloadSettingsTemplate;
