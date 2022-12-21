import * as React from 'react';
import {ListRenderItemInfo, FlatList, View, Dimensions} from 'react-native';
import {s} from 'react-native-size-matters';
import MovieItem from '../movie-item/MovieItem';
import {MinimalContent, Movie} from '../../../interface/content';
import MovieCard from '../movie-item/MovieCard';
import {Box} from 'native-base';

function RenderHorizMovies({items}: {items: MinimalContent[] | undefined}) {
  const renderItem = React.useCallback(
    (item: ListRenderItemInfo<MinimalContent>) => {
      return (
        <Box w={Dimensions.get('screen').width / 2.8}>
          <MovieCard item={item.item} key={item.item.id} />
        </Box>
      );
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
      ItemSeparatorComponent={() => <Box w={'12px'}></Box>}
      style={{
        marginTop: 5,
        marginBottom: 20,
        paddingLeft: 12,
      }}
      // contentContainerStyle={{paddingHorizontal: s(12)}}
    />
  );
}

export default RenderHorizMovies;
