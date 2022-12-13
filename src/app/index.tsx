import * as React from 'react';
import 'react-native-gesture-handler';
import {useToken} from '../hooks/token';
import Splash from '../component/pages/splash';
// import Navigator from './navigator';
import BaseThemeProvider from '../init/style';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigator from './navigator';
import {Button, SafeAreaView, View} from 'react-native';
// import Orientation from 'react-native-orientation-locker';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const AppRoot = () => {
  const {token, loading} = useToken();

  if (false) {
    return <Splash />;
  }

  return (
    <BaseThemeProvider>
      <React.Suspense fallback={<Splash />}>
        <Navigator token={token} />
      </React.Suspense>
    </BaseThemeProvider>
  );
};
