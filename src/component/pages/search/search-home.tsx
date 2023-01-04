import * as React from 'react';

import styled from 'styled-components/native';
import {ListRenderItemInfo, FlatList, View} from 'react-native';
import CategoryList from '../../organisms/categories';
import MovieItem from '../../organisms/movie-item/MovieItem';
import {useContent} from '../../../hooks/content';
import {MinimalContent, Movie} from '../../../interface/content';
import {observer} from 'mobx-react';
import {useUser} from '../../../hooks/user';
import {getContent} from '../../../services/content/content';
import Snackbar from 'react-native-snackbar';
import Loader from '../../atoms/loader';
import {MoLoadingFilled} from '../../molecules/loading';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainSearchInput} from 'src/component/organisms/search-widgets/MainSearchInput';
import {Box} from 'native-base';

const TabTemplate = styled.View`
  width: 100%;
  flex: 1;
`;

function SearchHome() {
  const {user} = useUser();
  let [activeCategory, setActiveCategory] = React.useState<string>();
  let [isLoading, setLoading] = React.useState(true);
  let [filtered, setFiltered] = React.useState<MinimalContent[]>();
  const categories = user?.content_categories?.slice();

  const {content} = useContent();

  const renderItem = React.useCallback(
    (item: ListRenderItemInfo<MinimalContent>) => {
      return <MovieItem item={item.item} key={item.item.id} />;
    },
    [],
  );

  let content_list = content.content_items;
  if (activeCategory !== undefined) {
    content_list = filtered ?? [];
  }

  function searchByFilter(cat: any) {
    getContent({cat: cat})
      .then(res => {
        setFiltered(res.data.docs);
        if (res.data.docs.length == 0) {
          setActiveCategory(undefined);
          Snackbar.show({text: 'Empty list'});
        }
      })
      .catch(() => {
        Snackbar.show({text: 'Something went wrong...'});
      });
  }
  return (
    <SafeAreaView>
      <Box height={'50px'}>
        <MainSearchInput />
      </Box>
      <CategoryList
        items={(categories ?? []).map((v: any) => {
          return {id: v.id, title: v.title};
        })}
        onPress={item => {
          setActiveCategory(item.id);
          searchByFilter(activeCategory);
        }}
      />
      <FlatList
        renderItem={renderItem}
        data={content_list}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        pagingEnabled={false}
        snapToStart={true}
        disableIntervalMomentum={true}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        keyExtractor={item => item.id ?? ''}
        style={
          {
            marginTop:0
            // marginTop: 5,
            // marginBottom: 20,
          }
        }
      />
    </SafeAreaView>
  );
}

export default observer(SearchHome);
