import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
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
    <Stack.Navigator
      initialRouteName="Downloads"
      screenOptions={{
   
      }}>
      <Stack.Screen
        name="Downloads"
        component={Downloads}
        options={{
          headerShown: true,
          title: 'Downloads',
          headerLeftContainerStyle: {display: 'none'},
          headerLeft: () => null,
          headerRight: (props) => (
            <HeaderBackButton
              {...props}
              labelVisible={false}
              onPress={() => navigation.navigate('DownloadSettings')}
              pressColorAndroid={theme.colors.white10}
              backImage={() => (
                <View
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: Platform.select({ios: 6, default: 0}),
                  }}>
                  <Settings fill={theme.colors.brownGrey} />
                </View>
              )}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default DownloadsStack;
