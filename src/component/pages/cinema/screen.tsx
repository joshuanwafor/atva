import React from 'react';
import CinemaWatchActivity from '../../organisms/cinema-watch/cinema-watch';

import {MainVideoPlayer} from '../../../component/organisms/video-player/cinema-video-player';
import {theme} from '../../../style/theme';
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from '@react-navigation/native';
import {RootStackParameterList, CinemaScreenRouteProp} from 'src/interface';
import {getContentStreamLink} from '../../../services/content/content';
import LoadingFeatured from '../../../component/organisms/featured/empty-featured';
import {useNotify} from '../../../hooks/notify';
import {useBillingStore} from '../../../store/data/billing';
import {DeviceEventEmitter, SafeAreaView} from 'react-native';

export const CinemaScreen: React.FC<{}> = () => {
  const billingStore = useBillingStore();
  let [streamUrl, updateStreamUrl] = React.useState<null | string>(null);

  const {show} = useNotify();
  const navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  const route = useRoute<CinemaScreenRouteProp>();
  let {
    params: {movie},
  } = route;

  React.useEffect(() => {
    // handleScreenOrientation('lock-landscape');
    getContentStreamLink(movie.id)
      .then((res) => {
        console.log(res.data);
        if (res.data != null || res.data != undefined) {
          if (res.data.url == null) {
            navigation.goBack();
            show("You don't have access to this movie yet.");
          }
          updateStreamUrl(res.data.url);
        }
      })
      .catch((err) => {
        navigation.goBack();
        show('Something went wrong...');
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
      if (
        billingStore.mySubscriptions == undefined ||
        billingStore.mySubscriptions.slice().length == 0
      ) {
        //@ts-ignore
        navigation.navigate('CompleteRegister');
      }
    }, 5000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.blackTwoV2}}>
      <React.Fragment>
        <MainVideoPlayer link={streamUrl ?? ''} />
        <CinemaWatchActivity />
      </React.Fragment>
    </SafeAreaView>
  );
};
