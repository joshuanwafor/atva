import {createContext, useContext} from 'react';
import {UserListStore} from './user-list';

export class FavoriteListStore extends UserListStore {
  constructor() {
    super('favorite');
  }
}

export const userFavoritesStore = new FavoriteListStore();
export const _Context = createContext<FavoriteListStore>(
  new FavoriteListStore(),
);

export const useFavouriteListStore = (): FavoriteListStore => {
  return useContext<FavoriteListStore>(_Context);
};
