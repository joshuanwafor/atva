import * as React from 'react';
import styled from 'styled-components/native';
import {s} from 'react-native-size-matters';
import {ListRenderItemInfo, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import WatchlistTemplate from '../../templates/watchlist';
import UserItemCard from '../../organisms/user-item/user-item-card';
import EmptyWatchlist from '../../organisms/user-lists/empty-watchlist';
import {Movie} from '../../../interface/content';
import Loader from '../../atoms/loader';
import {observer} from 'mobx-react';
import {useWatchListStore} from '../../../store/data/user-lists/watchlist';
import {UserItem} from '../../../interface';

const LoadingWrapper = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Watchlist = function () {
  const watchListStore = useWatchListStore();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    watchListStore.load().then(() => {
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

  const renderInner = React.useCallback(
    function () {
      if (loading) {
        return renderLoading();
      }
      return (
        <FlatList
          renderItem={renderItem}
          data={watchListStore.data.items}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          bounces={false}
          ItemSeparatorComponent={() => <View style={{height: 0}} />}
          keyExtractor={(item) => item.itemId}
          removeClippedSubviews
          style={{
            paddingTop: 0,
            width: '100%',
            paddingBottom: 0,
          }}
          snapToAlignment="center"
          contentContainerStyle={{paddingHorizontal: s(12), paddingTop: 2}}
          ListEmptyComponent={<EmptyWatchlist />}
        />
      );
    },
    [data, loading, renderItem, renderLoading],
  );

  return <WatchlistTemplate>{renderInner()}</WatchlistTemplate>;
};

export default observer(Watchlist);
