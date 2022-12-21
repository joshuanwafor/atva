import * as React from 'react';
import Animated from 'react-native-reanimated';
import HomeMovieSection from '../../organisms/home-movies/home-movies';
import HomeTitle from '../../molecules/home-title';
import HomeLayout from '../../organisms/home-layout';
import {useContent} from '../../../hooks/content';
import {useAuthDataStore, userAuthStore} from '../../../store/data/user-auth';
import {shuffleArray} from '../../../utils';
import {observer} from 'mobx-react';
import {contentStore} from '../../../store/data/content/content';
import {MinimalContent} from '../../../interface/content';
import {View} from 'react-native';
import {EmptySeriesList} from '../../organisms/nocontent/empty-list';

const HomeSeries = function () {
  const {data} = useAuthDataStore();
  const {content} = useContent();

  let contentGroups = contentStore.data.series_content_items.reduce<{
    [key: string]: MinimalContent[];
  }>((r: any, a: MinimalContent) => {
    if (a.genre == undefined) return r;

    a.genre.forEach((data) => {
      r[data.id] = [...(r[data.id] || []), a];
    });
    return r;
  }, {});
  //  console.log("group", group);

  let groups: {[key: string]: string} = {};

  for (let genreKey in contentGroups) {
    if (genreKey != undefined) {
      let category = userAuthStore.data.content?.content_categories?.find(
        (temp) => temp.id == genreKey,
      );
      if (category != undefined) {
        groups[category.id] = category.title;
      }
    }
  }

  return (
    <HomeLayout  caption={data.content?.featured_content}>
      {Object.keys(contentGroups).map((genreKey) => {
        return (
          <View key={genreKey}>
            <HomeTitle title={groups[genreKey]} />
            <HomeMovieSection items={contentGroups[genreKey]} />
          </View>
        );
      })}

      {Object.keys(contentGroups).length == 0 ? <EmptySeriesList /> : null}
    </HomeLayout>
  );
};

export default observer(HomeSeries);
