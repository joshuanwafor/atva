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
import PageTemplate from 'src/component/templates/page';

function ViewMovie() {
  const navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  const billingStore = useBillingStore();
  const {params} = useRoute<DetailsScreenRouteProp>();

  let {data} = useContentInfo({
    movie_id: params.movie_id,
  });

  console.log(data);
  return (
    // Details layout
    <PageTemplate>
     
    </PageTemplate>
  );
}

export default observer(ViewMovie);
