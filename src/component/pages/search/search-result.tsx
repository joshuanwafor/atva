import * as React from 'react';

import styled from 'styled-components/native';
import {ListRenderItemInfo, FlatList, View} from 'react-native';
import MovieItem from '../../organisms/movie-item/movie-item';
import {Movie} from '../../../interface/content';
import {useSearchStore} from '../../../store/data/content/search';
import {observer} from 'mobx-react';

const TabTemplate = styled.View`
  width: 100%;
  flex: 1;
`;

function SearchHome() {
  let {
    data: {result},
  } = useSearchStore();

  const renderItem = React.useCallback((item: ListRenderItemInfo<Movie>) => {
    return <MovieItem item={item.item} key={item.item.id} />;
  }, []);

  return (
    <TabTemplate>
      <FlatList
        renderItem={renderItem}
        data={result?.slice()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        pagingEnabled={false}
        snapToStart={true}
        disableIntervalMomentum={true}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        keyExtractor={(item) => item.id ?? ''}
      />
    </TabTemplate>
  );
}

export default observer(SearchHome);
