import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Animated, Platform} from 'react-native';
import {ms} from 'react-native-size-matters';
import {DownloadScreenNavigationProp} from '../../interface';
import {Stack} from './stack';
import {theme} from '../../style/theme';
import ArrowLeft from '../../component/atoms/icons/arrow-left';
import Downloads from '../../component/pages/downloads';
import Settings from '../../component/atoms/icons/settings';

const {multiply} = Animated;

function DownloadsStack() {
  const navigation = useNavigation<DownloadScreenNavigationProp>();
  return (
    <Stack.Navigator initialRouteName="Downloads" screenOptions={{}}>
      <Stack.Screen
        name="Downloads"
        component={Downloads}
        options={{
          headerShown: false,
          title: 'Downloads',
          headerLeftContainerStyle: {display: 'none'},
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default DownloadsStack;
