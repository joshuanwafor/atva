import {createContext, useContext} from 'react';
import {UserListStore} from './user-list';

class WatchListStore extends UserListStore {
  constructor() {
    super('watchlist');
  }
}

export const userWatchlistStore = new WatchListStore();
export const _Context = createContext<WatchListStore>(new WatchListStore());

export const useWatchListStore = (): WatchListStore => {
  return useContext<WatchListStore>(_Context);
};
