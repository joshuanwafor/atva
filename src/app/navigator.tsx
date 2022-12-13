import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AuthApp from './navigator/auth';
import MainApp from './navigator/app';
import {theme} from '../style/theme';
import {Button, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.white,
    background: theme.colors.black,
    card: theme.colors.black,
    text: theme.colors.white,
    border: theme.colors.pale,
  },
};

export function Navigator({token}: {token?: string}) {
  React.useLayoutEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <SafeAreaView>
      <NavigationContainer theme={MyTheme}>
        <AuthApp />
        {/* {token ? <MainApp /> : <AuthApp />} */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Navigator;
