import * as React from 'react';
import AboutMovie from '../../organisms/details/about';
import DetailsLayout from '../../organisms/details/layout';
import {observer} from 'mobx-react';
import {useBillingStore} from '../../../store/data/billing';
import {useContentInfo} from '../../../hooks/content-info-hook';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  DetailsScreenRouteProp,
  RootStackParameterList,
} from '../../../interface';
import {AppTypographyB} from 'src/component/atoms/typographyv2';
import { Box } from 'native-base';

function Details() {
  const navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  const billingStore = useBillingStore();
  const {params} = useRoute<DetailsScreenRouteProp>();

  let {data} = useContentInfo({
    movie_id: params.movie_id,
  });



  return (
    // Details layout
    <DetailsLayout movieInfo={data}>
      <AboutMovie
        params={{
          content: data,
          isCinema: params.isCinema,
          isWatching: params.isWatching,
        }}
      />
    </DetailsLayout>
  );
}

export default observer(Details);
