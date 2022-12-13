import {useObserver} from 'mobx-react';
import React from 'react';
import {useWatchListStore} from '../../store/data/user-lists/watchlist';
import {useFavouriteListStore} from '../../store/data/user-lists/favorites';

export function useFavouriteList() {
  const store = useFavouriteListStore();
  React.useEffect(() => {
    store.load();
  }, []);
  return useObserver(() => ({
    content: store.data,
    store: store,
  }));
}

export function useWatchlist() {
  const store = useWatchListStore();
  React.useEffect(() => {
    store.load();
  }, []);
  return useObserver(() => ({
    content: store.data,
    store: store,
  }));
}
