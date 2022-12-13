import * as React from 'react';
import {ms} from 'react-native-size-matters';
import {View, StyleSheet} from 'react-native';
import {MaterialTopTabBar} from '@react-navigation/material-top-tabs';
import {theme} from '../../style/theme';
import TopTab from './top-tab';
import FavoriteMovies from '../../component/pages/user-lists/favorites/movies';
import FavoriteTVShows from '../../component/pages/user-lists/favorites/tv-shows';
import FavoriteArtist from '../../component/pages/user-lists/favorites/artist';

const FavoritesTab = () => (
  <TopTab.Navigator
    initialRouteName="Movies"
    backBehavior="order"
    swipeEnabled={false}
    lazy
    sceneContainerStyle={{
      backgroundColor: theme.colors.black,
    }}
    tabBar={(props) => (
      <View
        style={{
          paddingHorizontal: ms(16, 0.6),
          paddingVertical: 0,
          backgroundColor: theme.colors.blackTwo,
          borderBottomColor: theme.colors.brownishGrey,
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
    <TopTab.Screen
      name="Movies"
      component={FavoriteMovies}
      options={{title: 'Movies'}}
    />
    <TopTab.Screen
      name="TV-Shows"
      component={FavoriteTVShows}
      options={{title: 'Shows'}}
    />
    <TopTab.Screen
      name="Artist"
      component={FavoriteArtist}
      options={{title: 'Artist'}}
    />
  </TopTab.Navigator>
);

export default FavoritesTab;
