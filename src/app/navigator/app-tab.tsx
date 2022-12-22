import * as React from 'react';
import {View, StyleSheet, Platform, GestureResponderEvent} from 'react-native';
import {Host} from 'react-native-portalize';
import TouchableRipple from 'react-native-material-ripple';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {ms} from 'react-native-size-matters';
import Tab from './tab';
import {theme} from '../../style/theme';
import HomeStack from './home-stack';
import SearchStack from './search-stack';
import Profile from '../../component/pages/profile';
import HomeIcon from '../../component/atoms/icons/home';
import Search from '../../component/atoms/icons/search';
// import Upcoming from '../../component/atoms/icons/upcoming';
import User from '../../component/atoms/icons/user';
import Download from '../../component/atoms/icons/download';
import DownloadsStack from './downloads-stack';
import {useBillingStore} from '../../store/data/billing';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParameterList} from 'src/interface/navigation';
import {userAuthStore} from '../../store/data/user-auth';
import {Box} from 'native-base';
function AppTab() {
  let billingStore = useBillingStore();

  let navigation = useNavigation<NavigationProp<RootStackParameterList>>();

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     if (userAuthStore.data.content?.user.isSubscribed == false) {
  //       //@ts-ignore
  //       navigation.navigate('CompleteRegister');
  //     }
  //   }, 1000);
  // }, []);

  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          tabBarButton: ({children, style, onPress, ...props}) => (
            <TouchableRipple
              rippleColor={theme.colors.white70}
              rippleSequential={true}
              rippleFades={true}
              rippleContainerBorderRadius={6}
              onPress={(event: GestureResponderEvent) => {
                requestAnimationFrame(() => {
                  onPress && onPress(event);
                });
              }}
              // @ts-ignore
              style={style}
              {...props}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                {children}
              </View>
            </TouchableRipple>
          ),
          ...{
            tabBarActiveTintColor: theme.colors.pale,
            tabBarInactiveTintColor: theme.colors.brownishGrey,
            tabBarInactiveBackgroundColor: 'transparent',
            tabBarActiveBackgroundColor: 'rgba(229, 225, 223, 0.03)',
            tabBarStyle: {
              backgroundColor: theme.colors.black,
              paddingHorizontal: 0,
              borderTopWidth: 0,
              paddingVertical: 6,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              borderWidth: 0,
              elevation: 0,
              borderRadius: 6,
            },

            tabBarItemStyle: {
              borderRadius: 6,
              height: 50,
              paddingBottom: 4,
              paddingTop: 4,
            },
            tabBarLabelStyle: {
              fontSize: ms(11, 0.4),
              fontFamily: theme.font.medium,
            },
            tabBarLabelPosition: 'below-icon',
          },
        }}
        tabBar={props => (
          <View
            style={{
              paddingHorizontal: ms(8, 0.6),
              paddingBottom: Platform.select({android: 15, ios: 10}),
              backgroundColor: theme.colors.black,
              position: 'relative',
            }}>
            <BottomTabBar {...props} />
          </View>
        )}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({color}) => (
              <HomeIcon fill={color} width={20} height={20} />
            ),
            title: 'Home',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: ({color}) => (
              <Search fill={color} width={20} height={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={DownloadsStack}
          options={{
            tabBarIcon: ({color}) => (
              <Download fill={color} width={20} height={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <User fill={color} width={20} height={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </Host>
  );
}

export default AppTab;
