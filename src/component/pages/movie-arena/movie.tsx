import React from 'react';
import {MainVideoPlayer} from '../../../component/organisms/video-player/cinema-video-player';
import {theme} from '../../../style/theme';
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from '@react-navigation/native';
import {RootStackParameterList, CinemaScreenRouteProp} from 'src/interface';
import {getContentStreamLink} from '../../../services/content/content';
import {useNotify} from '../../../hooks/notify';
import {useBillingStore} from '../../../store/data/billing';
import {BackHandler, DeviceEventEmitter, SafeAreaView} from 'react-native';
import Orientation from 'react-native-orientation-locker';

export const WatchScreen: React.FC<{}> = () => {
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
            return;
          }
          updateStreamUrl(res.data.url);
        }
      })
      .catch((err) => {
        console.log(err);
        Orientation.lockToPortrait();
        navigation.goBack();
        show('Something went wrong. Ensure ');
      });

    return () => {
      //   Orientation.lockToPortrait();
    };
  }, []);

  React.useEffect(() => {
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
        <MainVideoPlayer
          link={streamUrl ?? ''}
          isLandScape={true}
          onBackPress={() => {
            Orientation.lockToPortrait();
          }}
        />
      </React.Fragment>
    </SafeAreaView>
  );
};
