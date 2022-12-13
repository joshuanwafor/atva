import * as React from 'react';
import {ms} from 'react-native-size-matters';
import {MaterialTopTabBar} from '@react-navigation/material-top-tabs';
import {View, StyleSheet} from 'react-native';
import AboutMovie from '../../organisms/details/about';
import TopTab from '../../../app/navigator/top-tab';
import {theme} from '../../../style/theme';
import Seasons from '../../organisms/details/seasons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MovieSeriesEpisodes() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const MovieSeries = React.memo(function ({params}: any) {
    return (
      <TopTab.Navigator
        initialRouteName="Episodes"
        backBehavior="order"
        swipeEnabled
        lazy
        sceneContainerStyle={{
          backgroundColor: theme.colors.black,
        }}
        tabBar={(props) => (
          <View
            style={{
              paddingHorizontal: ms(12, 0.6),
              paddingVertical: 0,
              backgroundColor: theme.colors.black,
              borderBottomColor: theme.colors.white10,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}>
            <MaterialTopTabBar {...props} />
          </View>
        )}
        tabBarOptions={{
          showIcon: false,
          scrollEnabled: false,
          activeTintColor: theme.colors.white,
          inactiveTintColor: theme.colors.brownishGrey,
          style: {
            backgroundColor: 'transparent',
          },
          indicatorStyle: {
            backgroundColor: theme.colors.pink,
            borderRadius: 50,
          },
          labelStyle: {
            textTransform: 'capitalize',
            fontFamily: theme.font.medium,
            fontSize: ms(13, 0.2),
          },
          tabStyle: {
            height: 40,
          },
        }}
        tabBarPosition="top">
        <TopTab.Screen name="Episodes" options={{title: 'Episodes'}}>
          {() => <Seasons params={params} />}
        </TopTab.Screen>
        <TopTab.Screen name="Info" options={{title: 'Info'}}>
          {() => <AboutMovie params={params} />}
        </TopTab.Screen>
      </TopTab.Navigator>
    );
  });

  return MovieSeries;
}
