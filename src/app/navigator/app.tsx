import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
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
import {} from '@react-navigation/stack';
import ViewMovie from 'pages/details/ViewMovie';
import {Box} from 'native-base';
import SearchResult from 'src/component/pages/search/search-result';
import FavoriteMovies from 'pages/user-lists/favorites/movies';
import {AppTypography} from 'src/component/atoms/typographyv2';
import {searchManager} from 'src/store/data/content/search';
import {getColorFromTheme} from 'src/utils';

const {multiply} = Animated;

function MainApp() {
  const {token} = useToken();

  const {loadAppEnv} = useInitHook();

  React.useEffect(() => {
    loadAppEnv();
  }, []);

  return (
    <Host>
      <Stack.Navigator initialRouteName="MainApp" screenOptions={{
      
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
          name="SearchResult"
          component={SearchResult}
          options={{
            headerShown: true,

            headerTitle: () => {
              return (
                <AppTypography style={{marginLeft: 12}}>
                  {searchManager.term}
                </AppTypography>
              );
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
            headerLeft: props => (
              <TouchableOpacity {...props}>
                <View style={{paddingLeft: 10}}>
                  <ArrowLeft width={22} height={22} fill={theme.colors.white} />
                </View>
              </TouchableOpacity>
            ),
            headerRight: props => <DetailHeaderRight />,
            headerTitle: () => null,
          })}
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
          component={FavoriteMovies}
          options={{
            headerShown: true,
            title: 'Favorites',
          }}
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
