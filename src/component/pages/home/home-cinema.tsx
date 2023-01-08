import * as React from 'react';
import Animated from 'react-native-reanimated';
import HomeMovieSection from '../../organisms/home-movies/home-movies';
import HomeTitle from '../../molecules/home-title';
import HomeLayout from '../../organisms/home-layout';
import {observer} from 'mobx-react';
import {useContent, useAuthContent} from '../../../hooks/content';
import {shuffleArray} from '../../../utils';
import {MinimalContent} from 'src/interface/content';
import {userAuthStore} from 'src/store/data/user-auth';
import {contentStore} from 'src/store/data/content/content';
import {View} from 'react-native';
import {
  EmptyCinemaList,
  EmptySeriesList,
} from '../../organisms/nocontent/empty-list';

const HomeMovies = function () {

  React.useEffect(()=>{
    contentStore.loadContent("cinema")
  },[])
  let contentGroups = contentStore.data.cinema_content_items.reduce<{
    [genreKey: string]: MinimalContent[];
  }>((movieGroups: any, movieContent: MinimalContent) => {
    if (movieContent.genre == undefined) return movieGroups;

    movieContent.genre.forEach(genre => {
      movieGroups[genre.id] = [...(movieGroups[genre.id] || []), movieContent];
    });
    return movieGroups;
  }, {});

  let genreMap: {[key: string]: string} = {};

  for (let genreKey in contentGroups) {
    if (genreKey != undefined) {
      let category = userAuthStore.data.content?.content_categories?.find(
        temp => temp.id == genreKey,
      );
      if (category != undefined) {
        genreMap[category.id] = category.title;
      }
    }
  }

  return (
    <HomeLayout caption={userAuthStore.data.content?.featured_content}>
      {Object.keys(contentGroups).map(genreKey => {
        return (
          <View key={genreKey}>
            <HomeTitle title={genreMap[genreKey]} />
            <HomeMovieSection items={contentGroups[genreKey]} />
          </View>
        );
      })}
      {Object.keys(contentGroups).length == 0 ? <EmptyCinemaList /> : null}
    </HomeLayout>
  );
};

export default observer(HomeMovies);
