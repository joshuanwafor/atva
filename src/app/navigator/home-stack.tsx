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
const {multiply} = Animated;

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.black,
          borderColor: theme.colors.black,
          shadowColor: theme.colors.black,
          elevation: 0,
        },
        headerTitleStyle: {
          fontFamily: theme.font.medium,
          color: theme.colors.white,
        },
        headerTitleAlign: 'center',
        headerTitle: () => <AppLogo />,
        cardStyleInterpolator: ({
          current,
          next,
          inverted,
          layouts: {screen},
        }) => {
          const translateFocused = multiply(
            current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [screen.width, 0],
              extrapolate: 'clamp',
            }),
            inverted,
          );

          const translateUnfocused = next
            ? multiply(
                next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, screen.width * -0.3],
                  extrapolate: 'clamp',
                }),
                inverted,
              )
            : 0;

          const overlayOpacity = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.07],
            extrapolate: 'clamp',
          });

          const shadowOpacity = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.3],
            extrapolate: 'clamp',
          });

          return {
            cardStyle: {
              transform: [
                // Translation for the animation of the current card
                {translateX: translateFocused},
                // Translation for the animation of the card on top of this
                {translateX: translateUnfocused},
              ],
            },
            overlayStyle: {opacity: overlayOpacity},
            shadowStyle: {shadowOpacity},
          };
        },
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: {
            animation: 'spring',
            config: {
              stiffness: 1000,
              damping: 500,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 10,
              restSpeedThreshold: 10,
            },
          },
          close: {
            animation: 'spring',
            config: {
              stiffness: 1000,
              damping: 500,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 10,
              restSpeedThreshold: 10,
            },
          },
        },
      }}>
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
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
