import * as React from 'react';
import Animated from 'react-native-reanimated';
import HomeTitle from '../../molecules/home-title';
import HomeMovieSection from '../../organisms/home-movies/home-movies';
import HomeFeatured from '../../organisms/featured/featured';
import Originals from '../../organisms/originals/originals';
import HomeLayout from '../../organisms/home-layout';
import {useAuthContent, useContent} from '../../../hooks/content';
import HomeCinema from '../../organisms/home-cinema/home-cinema';
import {shuffleArray} from '../../../utils';
import {observer} from 'mobx-react-lite';

const HomeHome = function ({y}: {y: Animated.Value<number>}) {
  const authContent = useAuthContent();
  const {content} = useContent();

  return (
    <HomeLayout y={y} caption={authContent.content.content?.featured_content}>
      {content.cinema_content_items != undefined &&
        content.cinema_content_items.length >= 1 && (
          <>
            <HomeTitle title="In cinema" />
            <HomeCinema content={content.cinema_content_items[0]} />
          </>
        )}
      <HomeFeatured />
      <HomeTitle title="What to watch" />
      <HomeMovieSection items={content.content_items.slice()} />
      <Originals items={content.content_items.slice()} />
    </HomeLayout>
  );
};

export default observer(HomeHome);
