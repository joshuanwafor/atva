import * as React from 'react';
import {StatusBar} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {TChildProps} from '../../interface';
import {theme} from '../../style/theme';
import Background from '../molecules/background';

function WatchlistTemplate({children}: TChildProps) {
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
      {children}
    </Background>
  );
}

export default WatchlistTemplate;
