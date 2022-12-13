import * as React from 'react';
import {s} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {FlatList} from 'react-native-gesture-handler';
import {View, ListRenderItemInfo} from 'react-native';
import EmptyFavorites from '../../../organisms/user-lists/empty-favortites';
import {Movie} from '../../../../interface/content';
import Loader from '../../../atoms/loader';
import {useFavouriteListStore} from '../../../../store/data/user-lists/favorites';
import UserItemCard from '../../../organisms/user-item/user-item-card';
import {UserItem} from '../../../../interface';

const LoadingWrapper = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function FavoriteMovies() {
  const favListStore = useFavouriteListStore();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    favListStore.load().then(() => {
      setLoading(false);
    });
  }, []);

  const renderItem = React.useCallback(
    ({item}: ListRenderItemInfo<UserItem>) => {
      return <UserItemCard item={item} />;
    },
    [],
  );

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
      data={favListStore.data.items}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      keyExtractor={(item) => item.itemId}
      removeClippedSubviews
      snapToAlignment="center"
      contentContainerStyle={{paddingHorizontal: s(12), paddingTop: 15}}
      ListEmptyComponent={<EmptyFavorites />}
    />
  );
}

export default FavoriteMovies;
