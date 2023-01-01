import * as React from 'react';
import {View, Animated, Platform} from 'react-native';
import {Stack} from './stack';
import {theme} from '../../style/theme';
import HomeAll from '../../component/pages/home/home';
import AppLogo from '../../component/atoms/svgs/logo';
import ArrowLeft from '../../component/atoms/icons/arrow-left';
import Details from '../../component/pages/details/details';
import {DetailHeaderRight} from '../../component/organisms/details-header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {userFavoritesStore} from 'src/store/data/user-lists/favorites';
import {userWatchlistStore} from 'src/store/data/user-lists/watchlist';
const {multiply} = Animated;

function HomeStack() {
  // return <View/>
  React.useEffect(() => {
    userFavoritesStore.load();
    userWatchlistStore.load();
  }, []);
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
    </Stack.Navigator>
  );
}

export default HomeStack;
