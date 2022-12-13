import * as React from 'react';
import {View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {MaterialTopTabBar} from '@react-navigation/material-top-tabs';
import Animated, {Easing} from 'react-native-reanimated';
import {useTransition, interpolateColor} from 'react-native-redash';
import {Wrapper} from './style';
import FeaturedTrending from './trending';
import FeaturedForYou from './for-you';
import TopTab from '../../../app/navigator/top-tab';
import {theme} from '../../../style/theme';

import {TabLinkTitle} from './style';

export function TabLink(props: {
  focused: boolean;
  color: string;
  title: string;
  lastChild?: boolean;
}) {
  const transition = useTransition(props.focused, {
    duration: 100,
    easing: Easing.inOut(Easing.ease),
  });
  // @ts-ignore
  const color: Animated.Node<string> = interpolateColor(transition, {
    inputRange: [0, 1],
    outputRange: [theme.colors.white10, theme.colors.white],
  });

  return (
    <TabLinkTitle style={{color}} active={props.focused}>
      {props.title}
    </TabLinkTitle>
  );
}

function FeaturedTab() {
  return (
    <TopTab.Navigator
      initialRouteName="Trending"
      backBehavior="none"
      swipeEnabled={false}
      lazy
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      tabBar={(props) => (
        <View
          style={{
            paddingHorizontal: ms(10, 0.6),
            paddingVertical: 0,
            backgroundColor: 'transparent',
            borderBottomWidth: 0,
          }}>
          <MaterialTopTabBar {...props} />
        </View>
      )}
      tabBarOptions={{
        showIcon: false,
        scrollEnabled: true,
        activeTintColor: theme.colors.white,
        inactiveTintColor: theme.colors.white10,
        style: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          elevation: 0,
        },
        pressColor: 'transparent',
        indicatorStyle: {
          display: 'none',
          borderColor: 'transparent',
          backgroundColor: 'transparent',
        },
        labelStyle: {
          textTransform: 'capitalize',
          fontFamily: theme.font.demiBold,
          textAlign: 'left',
          fontSize: ms(24, 0.2),
          margin: 0,
          padding: 0,
          marginRight: ms(60, 0.2),
        },
        tabStyle: {
          height: 'auto',
          padding: 0,
          margin: 0,
          alignItems: 'flex-start',
          minWidth: 0,
          width: 'auto',
        },
      }}
      tabBarPosition="top">
      <TopTab.Screen
        name="Trending"
        component={FeaturedTrending}
        options={{title: 'Trending'}}
      />
      <TopTab.Screen
        name="For-you"
        component={FeaturedForYou}
        options={{
          title: 'For you',
        }}
      />
    </TopTab.Navigator>
  );
}

function HomeFeatured() {
  return (
    <Wrapper>
      <FeaturedTab />
    </Wrapper>
  );
}

export default HomeFeatured;
