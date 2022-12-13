import * as React from 'react';
import FeaturedItem from './featured-item';
import LoadingFeatured from './empty-featured';
import {observer} from 'mobx-react';
import {useFeaturedContent} from '../../../hooks/content';
import {userAuthStore} from '../../../store/data/user-auth';

const FeaturedTrending: React.FC<{}> = () => {
  if (userAuthStore.data.content?.trending == undefined) {
    return <LoadingFeatured />;
  }
  return <FeaturedItem items={userAuthStore.data.content?.trending.docs} />;
};

export default observer(FeaturedTrending);
