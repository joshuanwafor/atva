import * as React from 'react';
import {StatusBar} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {theme} from '../../style/theme';
import Background from '../molecules/background';
import FavoritesTab from '../../app/navigator/favorites-tab';

function FavoritesTemplate() {
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
      <FavoritesTab />
    </Background>
  );
}

export default FavoritesTemplate;
