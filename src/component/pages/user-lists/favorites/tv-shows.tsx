import * as React from 'react';
import {s} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {FlatList} from 'react-native-gesture-handler';
import {View, ListRenderItemInfo} from 'react-native';
import EmptyFavorites from '../../../organisms/user-lists/empty-favortites';
import MovieItemCard from 'src/component/organisms/movie-item/MovieItem';
import {Movie} from '../../../../interface/content';
import Loader from '../../../atoms/loader';

const LoadingWrapper = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function FavoriteTVShows() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const renderItem = React.useCallback(({item}: ListRenderItemInfo<Movie>) => {
    return <MovieItemCard item={item} />;
  }, []);

  const renderLoading = React.useCallback(function () {
    return (
      <LoadingWrapper>
        <Loader />
      </LoadingWrapper>
    );
  }, []);

  if (loading) {
    return renderLoading();
  }
  return (
    <FlatList
      renderItem={renderItem}
      data={[]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      keyExtractor={(item) => item.id}
      removeClippedSubviews
      snapToAlignment="center"
      contentContainerStyle={{paddingHorizontal: s(12), paddingTop: 15}}
      ListEmptyComponent={<EmptyFavorites />}
    />
  );
}

export default FavoriteTVShows;
