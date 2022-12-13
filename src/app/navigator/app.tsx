import * as React from 'react';
import {View} from 'react-native';
import {Animated} from 'react-native';
import {ms} from 'react-native-size-matters';
import {Stack} from './stack';
import {theme} from '../../style/theme';
import Account from '../../component/pages/account';
import AppTab from './app-tab';
import Connected from '../../component/pages/connected';
import Watchlist from '../../component/pages/user-lists/watchlist';
import Favorites from '../../component/pages/user-lists/favorites/favourites';
import Details from '../../component/pages/details/details';
import Billing from '../../component/pages/billing/billing';
import AddCard from '../../component/pages/billing/add-card';
import ArrowLeft from '../../component/atoms/icons/arrow-left';
import DownloadSettings from '../../component/pages/download-settings';
import {WatchScreen} from '../../component/pages/movie-arena/movie';
import {CinemaScreen} from '../../component/pages/movie-arena/cinema';
import {useAuthDataStore} from '../../store/data/user-auth';
import {useToken} from '../../hooks/token';
import {setHeaderToken} from '../../config/request';
import {DetailHeaderRight} from '../../component/organisms/details-header';
import {observer} from 'mobx-react';
import {useBillingStore} from '../../store/data/billing';
import CompleteRegister from '../../component/pages/auth/complete-register';
import SetupSubscription from '../../component/pages/billing/complete-subscription';
import {Host} from 'react-native-portalize';
import {useInitHook} from '../../hooks/init';

const {multiply} = Animated;

function MainApp() {
  const {token} = useToken();

  const {loadAppEnv} = useInitHook();


  React.useEffect(() => {
    loadAppEnv();
  }, []);

  return (
    <Host>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.blackTwo,
            borderColor: theme.colors.blackTwo,
            shadowColor: theme.colors.blackTwo,
            elevation: 0,
            height:50,
          },
          headerTitleStyle: {
            fontFamily: theme.font.medium,
            color: theme.colors.white,
            fontSize: ms(15, 0.2),
          },
          headerTitleAlign: 'left',
          // headerLeft: (props) => (
          //   <HeaderBackButton
          //     {...props}
          //     label=""
          //     truncatedLabel=""
          //     backImage={() => (
          //       <View style={{paddingLeft: 10}}>
          //         <ArrowLeft
          //           width={22}
          //           height={22}
          //           fill={theme.colors.brownGrey}
          //         />
          //       </View>
          //     )}
          //   />
          // ),
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
          name="MainApp"
          component={AppTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: true,
            title: 'Edit Profile',
          }}
        />
        <Stack.Screen
          name="Billing"
          component={Billing}
          options={{
            headerShown: true,
            title: 'Subscription/Billing',
          }}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{
            headerShown: true,
            title: 'New Debit card',
          }}
        />
        <Stack.Screen
          name="Watchlist"
          component={Watchlist}
          options={{
            headerShown: true,
            title: 'Watch List',
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerShown: true,
            title: 'Favorites',
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
            // headerLeft: (props) => (
            //   <HeaderBackButton
            //     {...props}
            //     label=""
            //     truncatedLabel=""
            //     backImage={() => (
            //       <View style={{paddingLeft: 10}}>
            //         <ArrowLeft
            //           width={22}
            //           height={22}
            //           fill={theme.colors.white}
            //         />
            //       </View>
            //     )}
            //   />
            // ),
            headerRight: (props) => <DetailHeaderRight />,
            headerTitle: () => null,
          })}
        />

        <Stack.Screen
          name="DownloadSettings"
          component={DownloadSettings}
          options={{
            headerShown: true,
            title: 'Download Settings',
          }}
        />

        <Stack.Screen
          name="Connected"
          component={Connected}
          options={{
            headerShown: true,
            title: 'Connected device',
          }}
        />

        <Stack.Screen
          name="CompleteRegister"
          component={SetupSubscription}
          options={{
            title: 'Subscriptions',
          }}
        />

        <Stack.Screen
          name="CinemaScreen"
          component={CinemaScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="WatchScreen"
          component={WatchScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </Host>
  );
}

// change location later
function ReloadEnv() {
  return <View></View>;
}

export default observer(MainApp);
