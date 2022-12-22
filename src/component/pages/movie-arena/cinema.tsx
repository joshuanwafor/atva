import CinemaWatchActivity from '../../organisms/cinema-watch/cinema-watch';
import React from 'react';
import {CinemaScreenRouteProp, RootStackParameterList} from 'src/interface';
import {DeviceEventEmitter, SafeAreaView} from 'react-native';
import {getContentStreamLink} from '../../../services/content/content';
import {MainVideoPlayer} from '../../../component/organisms/video-player/cinema-video-player';
import {theme} from '../../../style/theme';
import {useBillingStore} from '../../../store/data/billing';
import {useNotify} from '../../../hooks/notify';

import {
  useNavigation,
  NavigationProp,
  useRoute,
} from '@react-navigation/native';
import {userAuthStore} from '../../../store/data/user-auth';
import Orientation, {OrientationType} from 'react-native-orientation-locker';
import {Box, Center, VStack} from 'native-base';
import Loader from 'src/component/atoms/loader';
import {LoaderWrapper} from 'src/component/organisms/video-player/style';
import {Spinner} from 'phosphor-react-native';

export const CinemaScreen: React.FC<{}> = () => {
  const billingStore = useBillingStore();
  let [streamUrl, updateStreamUrl] = React.useState<null | string>(null);
  let [canWatch, setCanWatch] = React.useState(false);
  const {show} = useNotify();
  const navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  const route = useRoute<CinemaScreenRouteProp>();
  let {
    params: {movie},
  } = route;

  React.useEffect(() => {
    // handleScreenOrientation('lock-landscape');
    getContentStreamLink(movie.id)
      .then(res => {
        console.log(res.data);
        if (res.data != null || res.data != undefined) {
          if (res.data.url == null) {
            navigation.goBack();
            show("You don't have access to this movie yet.");
            return;
          }
          setCanWatch(true);
          updateStreamUrl(res.data.url);
        }
      })
      .catch(err => {
        Orientation.lockToPortrait();
        navigation.goBack();
        show(err.data.message);
      });

    return () => {
      //
    };
  }, []);

  React.useEffect(() => {
    DeviceEventEmitter.addListener('hardwareBackPress', () => {
      console.log('detected back button');
    });

    let timerID = setInterval(() => {
      if (userAuthStore.data.content?.user.isSubscribed == false) {
        //@ts-ignore
        navigation.navigate('CompleteRegister');
      }
    }, 5000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  if (canWatch == false) {
    return (
      <VStack h={'100%'}>
        <Center>
          <Spinner color="white" />
        </Center>
      </VStack>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.blackTwoV2}}>
      <React.Fragment>
        <MainVideoPlayer
          link={streamUrl ?? ''}
          isLandScape={false}
          onBackPress={() => {
            Orientation.lockToPortrait();
          }}
        />
        <CinemaWatchActivity />
      </React.Fragment>
    </SafeAreaView>
  );
};
