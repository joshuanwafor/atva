import * as React from 'react';
import {ms} from 'react-native-size-matters';
import {View, StyleSheet} from 'react-native';
import {MaterialTopTabBar} from '@react-navigation/material-top-tabs';
import {theme} from '../../style/theme';
import TopTab from './top-tab';
import BillingHistories from '../../component/pages/billing/history';
import BillingInformation from '../../component/pages/billing/setup-billing';

const BillingTab = () => (
  <TopTab.Navigator
    initialRouteName="History"
    backBehavior="order"
    swipeEnabled
    lazy
    sceneContainerStyle={{
      backgroundColor: theme.colors.black,
    }}
    tabBar={(props: any) => (
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
    <TopTab.Screen
      name="History"
      component={BillingHistories}
      options={{title: 'Payment History'}}
    />
    <TopTab.Screen
      name="Information"
      component={BillingInformation}
      options={{title: 'Payment Information'}}
    />
  </TopTab.Navigator>
);

export default BillingTab;
