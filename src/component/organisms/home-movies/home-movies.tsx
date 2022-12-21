import * as React from 'react';
import {ListRenderItemInfo, FlatList, View} from 'react-native';
import {s} from 'react-native-size-matters';
import MovieItem from '../movie-item/MovieItem';
import {MinimalContent, Movie} from '../../../interface/content';

function HomeMovieSection({items}: {items: MinimalContent[] | undefined}) {
  const renderItem = React.useCallback(
    (item: ListRenderItemInfo<MinimalContent>) => {
      //console.log(item.item)
      return <MovieItem item={item.item} key={item.item.id} />;
    },
    [],
  );

  return (
    <FlatList
      renderItem={renderItem}
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      pagingEnabled={false}
      snapToStart={true}
      // snapToInterval={382}
      disableIntervalMomentum={true}
      // ItemSeparatorComponent={() => <View style={{width: 20}} />}
      keyExtractor={item => item.id ?? ''}
      style={{
        marginTop: 5,
        marginBottom: 20,
      }}
      // contentContainerStyle={{paddingHorizontal: s(12)}}
    />
  );
}

export default HomeMovieSection;
