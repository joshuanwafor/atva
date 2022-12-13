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
        headerStyle: {
          backgroundColor: theme.colors.blackTwo,
          borderColor: theme.colors.blackTwo,
          shadowColor: theme.colors.blackTwo,
          elevation: 0,
          height: 50,
        },
        headerTitleStyle: {
          fontFamily: theme.font.medium,
          color: theme.colors.white,
          fontSize: ms(15, 0.2),
        },
        headerTitleAlign: 'left',
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            label=""
            truncatedLabel=""
            backImage={() => (
              <View style={{paddingLeft: 10}}>
                <ArrowLeft
                  width={22}
                  height={22}
                  fill={theme.colors.brownGrey}
                />
              </View>
            )}
          />
        ),
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
