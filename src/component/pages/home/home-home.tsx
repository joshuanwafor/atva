import * as React from 'react';
import Animated from 'react-native-reanimated';
import HomeTitle from '../../molecules/home-title';
import HomeMovieSection from '../../organisms/home-movies/home-movies';
import Originals from '../../organisms/originals/originals';
import HomeLayout from '../../organisms/home-layout';
import {useAuthContent, useContent} from '../../../hooks/content';
import HomeCinema from '../../organisms/home-cinema/home-cinema';
import {shuffleArray} from '../../../utils';
import {observer} from 'mobx-react-lite';
import {Divider, View} from 'native-base';
import RenderHorizMovies from 'src/component/organisms/renderer/RenderHorizMoview';
import {userAuthStore} from 'src/store/data/user-auth';

const HomeHome = function () {
  const authContent = useAuthContent();
  const {content} = useContent();
  
  return (
    <HomeLayout caption={authContent.content.content?.featured_content}>
      <HomeTitle title="Selections from AstraTv" />
      <RenderHorizMovies
        items={userAuthStore.data?.content?.for_you?.docs ?? []}
      />
      <HomeTitle title="What to watch on AstraTv" />
      <RenderHorizMovies
        items={userAuthStore.data?.content?.trending?.docs ?? []}
      />
      <Originals items={content.content_items.slice()} />
    </HomeLayout>
  );
};

export default observer(HomeHome);
