import * as React from 'react';
import {View, Animated, Platform} from 'react-native';
import {HeaderBackButton} from '@react-navigation/stack';
import {Stack} from './stack';
import {theme} from '../../style/theme';
import HomeAll from '../../component/pages/home/home';
import AppLogo from '../../component/atoms/svgs/logo';
import ArrowLeft from '../../component/atoms/icons/arrow-left';
import Details from '../../component/pages/details/details';
import {DetailHeaderRight} from '../../component/organisms/details-header';
import ViewMovie from 'pages/details/ViewMovie';
const {multiply} = Animated;

function HomeStack() {
  // return <View/>
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={HomeAll}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            shadowColor: 'transparent',
          },
        }}
      />

      <Stack.Screen
        name="Details"
        component={ViewMovie}
        options={({route}) => ({
          headerShown: true,
          title: route.params.title ?? 'No title',
          headerLeftContainerStyle: {
            zIndex: 99999,
          },
          headerRightContainerStyle: {
            zIndex: 99999,
          },
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              label=""
              truncatedLabel=""
              backImage={() => (
                <View style={{paddingLeft: 10}}>
                  <ArrowLeft width={22} height={22} fill={theme.colors.white} />
                </View>
              )}
            />
          ),
          headerRight: props => <DetailHeaderRight />,
          headerTitle: () => null,
        })}
      />

      {/* <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({
          headerShown: true,
          headerTransparent: true,
          title: route.params.title ?? 'No title',
          headerLeftContainerStyle: {
            zIndex: 99999,
          },
          headerRightContainerStyle: {
            zIndex: 99999,
          },
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              label=""
              truncatedLabel=""
              backImage={() => (
                <View style={{paddingLeft: 10}}>
                  <ArrowLeft width={22} height={22} fill={theme.colors.white} />
                </View>
              )}
            />
          ),
          headerRight: (props) => <DetailHeaderRight />,
          headerTitle: () => null,
        })}
      /> */}
    </Stack.Navigator>
  );
}

export default HomeStack;
