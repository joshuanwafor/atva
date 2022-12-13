import * as React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {interpolateColor} from 'react-native-redash';
import {HeaderBackButton} from '@react-navigation/stack';
import {ms} from 'react-native-size-matters';
import Notification from '../../atoms/icons/notification';
import {theme} from '../../../style/theme';
import AppLogo from '../../atoms/svgs/logo';
import HeaderButton from '../../molecules/button/header-button';
import {HomeSections} from '../../../interface';
import {getDefaultHeaderHeight} from '../../../utils';

const Header = React.memo(function ({
  y,
  showAction,
  activeSection,
}: {
  y: Animated.Value<number>;
  showAction: () => void;
  activeSection: HomeSections;
}) {

  const maxHeaderHeight = getDefaultHeaderHeight(20);

    //@ts-ignore
  const height = interpolate(y, {
    inputRange: [0, 70],
    outputRange: [maxHeaderHeight, 20],
    extrapolateRight: Extrapolate.CLAMP,
  });

  // @ts-ignore
  const backgroundColor: Animated.Value<string> = interpolateColor(y, {
    inputRange: [0, 20],
    outputRange: [
      'rgba(20,20,20, 0)',
      Platform.select({ios: 'rgba(20,20,20, 0)', default: 'rgba(20,20,20, 1)'}),
    ],
  });

  //@ts-ignore
  const translateY = interpolate(y, {
    inputRange: [0, 100],
    outputRange: [0, -maxHeaderHeight],
    extrapolateRight: Extrapolate.CLAMP,
  });

  return (
    <React.Fragment>
      <View
        pointerEvents="box-none"
        style={[StyleSheet.absoluteFill, {zIndex: 1, height: maxHeaderHeight}]}>
        <Animated.View
          pointerEvents="box-none"
          style={[
            StyleSheet.absoluteFill,
            {zIndex: 0, backgroundColor: 'transparent', height},
          ]}
        />
        <Animated.View
          pointerEvents="none"

          style={{
            height: 20,
            zIndex: 1,
            backgroundColor: backgroundColor,
          }}
        />
        <Animated.View
          pointerEvents="box-none"
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
            {transform: [{translateY: translateY}]},
          ]}>
          <View
            pointerEvents="box-none"
            style={[
              {
                marginLeft: ms(12, 0.5),
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'flex-start',
              },
          
            ]}>
            <HeaderButton onPress={showAction}>{activeSection}</HeaderButton>
          </View>
          <View
            pointerEvents="box-none"
            style={[
              {
               
              },
            ]}>
            <AppLogo />
          </View>
          <View
            pointerEvents="box-none"
            style={[
              {
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'flex-end',
              },
             
            ]}>
            <View
              style={{
                marginRight: ms(12, 0.5),
                borderRadius: 4,
                backgroundColor: theme.colors.white10,
                marginHorizontal: 0,
                marginVertical: 0,
                paddingHorizontal: 0,
                paddingVertical: 0,
              }}>
              <HeaderBackButton
                labelVisible={false}
                pressColorAndroid={theme.colors.white10}
                backImage={() => (
                  <View
                    style={{
                      paddingVertical: 6,
                      paddingHorizontal: Platform.select({ios: 6, default: 0}),
                    }}>
                    <Notification fill={theme.colors.white} />
                  </View>
                )}
              />
            </View>
          </View>
        </Animated.View>
      </View>
    </React.Fragment>
  );
});
export default Header;
