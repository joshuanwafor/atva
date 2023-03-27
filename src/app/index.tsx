import * as React from 'react';
import 'react-native-gesture-handler';
import {useToken} from '../hooks/token';
import Splash from '../component/pages/splash';
import BaseThemeProvider from '../init/style';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigator from './navigator';
import {NativeBaseProvider} from 'native-base';
import {theme} from '../style/nativebase-theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const AppRoot = () => {
  const {token, loading} = useToken();

  console.log(token, " token goes here")
  if (loading) {
    return <Splash />;
  }

  return (
    <BaseThemeProvider>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <React.Suspense fallback={<Splash />}>
            <Navigator token={token} />
          </React.Suspense>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </BaseThemeProvider>
  );
};

export default AppRoot;
