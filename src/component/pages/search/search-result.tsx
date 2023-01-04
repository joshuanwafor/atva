import * as React from 'react';
import {ListRenderItemInfo, FlatList, View, SafeAreaView} from 'react-native';
import MovieItem from '../../organisms/movie-item/MovieItem';
import {Movie} from '../../../interface/content';
import {
  searchManager,
  useSearchStore,
} from '../../../store/data/content/search';
import {observer} from 'mobx-react';
import {EmptySeriesList} from 'src/component/organisms/nocontent/empty-list';
import {AppTypography} from 'src/component/atoms/typographyv2';

function SearchHome() {
  const renderItem = React.useCallback((item: ListRenderItemInfo<Movie>) => {
    return <MovieItem item={item.item} key={item.item.id} />;
  }, []);

  let list: Movie[] = [];

  if (searchManager.data.result) {
    list = searchManager.data.result;
  }

  if (list.length == 0) {
    return (
      <AppTypography fontSize={16} style={{textAlign: 'center'}} mt={12}>
        We cound not find any result for {'\n'}{' '}
        <AppTypography fontSize={16} color="gray.400">
          `{searchManager.term}`
        </AppTypography>
      </AppTypography>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        renderItem={renderItem}
        data={list ?? []}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        pagingEnabled={false}
        snapToStart={true}
        style={{backgroundColor: 'red'}}
        disableIntervalMomentum={true}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        keyExtractor={item => item.id ?? ''}
      />
      {}
    </SafeAreaView>
  );
}

export default observer(SearchHome);
