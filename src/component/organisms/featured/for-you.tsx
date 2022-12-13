import * as React from 'react';

import FeaturedItem from './featured-item';
import LoadingFeatured from './empty-featured';
import {observer} from 'mobx-react';
import {useFeaturedContentStore} from '../../../store/data/content/featured-content';
import {userAuthStore} from '../../../store/data/user-auth';

const FeaturedForYou: React.FC<{}> = () => {
  const {data} = useFeaturedContentStore();

  if (userAuthStore.data.content?.for_you == undefined) {
    return <LoadingFeatured />;
  }

  return <FeaturedItem items={userAuthStore.data.content?.for_you.docs} />;
};

export default observer(FeaturedForYou);
