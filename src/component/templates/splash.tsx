import * as React from 'react';
import {StatusBar, View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {TChildProps} from '../../interface';
import {theme} from '../../style/theme';

function SplashTemplate({children}: TChildProps) {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.black,
      }}>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.black}
        animated={true}
        showHideTransition="slide"
      />
      {children}
    </View>
  );
}

export default SplashTemplate;
