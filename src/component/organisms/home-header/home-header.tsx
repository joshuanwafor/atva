import * as React from 'react';
import {View, StyleSheet, Platform, StatusBar} from 'react-native';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {interpolateColor} from 'react-native-redash';
import {ms} from 'react-native-size-matters';
import Notification from '../../atoms/icons/notification';
import {theme} from '../../../style/theme';
import AppLogo from '../../atoms/svgs/logo';
import HeaderButton from '../../molecules/button/header-button';
import {HomeSections} from '../../../interface';
import {getDefaultHeaderHeight} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = React.memo(function ({
  showAction,
  activeSection,
}: {
  showAction: () => void;
  activeSection: HomeSections;
}) {
  const maxHeaderHeight = getDefaultHeaderHeight(15);

  return (
    <React.Fragment>
      <View
        pointerEvents="box-none"
        style={[StyleSheet.absoluteFill, {zIndex: 1, height: maxHeaderHeight}]}>
        <Animated.View
          pointerEvents="box-none"
          style={[
            StyleSheet.absoluteFill,
            {zIndex: 0, backgroundColor: 'transparent'},
          ]}
        />
        <Animated.View
          pointerEvents="none"
          style={{
            height: StatusBar.currentHeight,
            zIndex: 1,
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
          <View pointerEvents="box-none" style={[{}]}>
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
              <TouchableOpacity>
                <View
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: Platform.select({ios: 6, default: 0}),
                  }}>
                  <Notification fill={theme.colors.white} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </React.Fragment>
  );
});
export default Header;
