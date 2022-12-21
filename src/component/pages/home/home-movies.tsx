import * as React from 'react';
import Animated from 'react-native-reanimated';
import HomeMovieSection from '../../organisms/home-movies/home-movies';
import HomeTitle from '../../molecules/home-title';
import HomeLayout from '../../organisms/home-layout';
import {observer} from 'mobx-react';
import {MinimalContent} from '@interface/content';
import {userAuthStore} from '../../../store/data/user-auth';
import {contentStore} from '../../../store/data/content/content';
import {View} from 'react-native';

const HomeMovies = function () {
  React.useEffect(() => {}, []);
  let contentGroups = contentStore.data.content_items.reduce<{
    [genreKey: string]: MinimalContent[];
  }>((movieGroups: any, movieContent: MinimalContent) => {
    if (movieContent.genre == undefined) return movieGroups;

    movieContent.genre.forEach((genre) => {
      movieGroups[genre.id] = [...(movieGroups[genre.id] || []), movieContent];
    });
    return movieGroups;
  }, {});

  let genreMap: {[key: string]: string} = {};

  for (let genreKey in contentGroups) {
    if (genreKey != undefined) {
      let category = userAuthStore.data.content?.content_categories?.find(
        (temp) => temp.id == genreKey,
      );
      if (category != undefined) {
        genreMap[category.id] = category.title;
      }
    }
  }

  console.log(Object.keys(contentGroups));
  return (
    <HomeLayout caption={userAuthStore.data.content?.featured_content}>
      {Object.keys(contentGroups).map((genreKey) => {
        return (
          <View key={genreKey}>
            <HomeTitle title={genreMap[genreKey]} />
            <HomeMovieSection items={contentGroups[genreKey]} />
          </View>
        );
      })}
    </HomeLayout>
  );
};

export default observer(HomeMovies);
