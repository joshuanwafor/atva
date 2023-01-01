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
import {SafeAreaView} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {View} from 'native-base';

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
    Orientation.lockToLandscape();

    getContentStreamLink(movie.id)
      .then(res => {
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
      .catch(err => {
        console.log(err);

        navigation.goBack();
        show(err.data.message ?? 'Something went wrong. Ensure ');
      });

    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <View style={{flex: 1, height: '100%'}}>
      <React.Fragment>
        <MainVideoPlayer
          link={streamUrl ?? ''}
          isLandScape={true}
          onBackPress={() => {
            Orientation.lockToPortrait();
          }}
        />
      </React.Fragment>
    </View>
  );
};
