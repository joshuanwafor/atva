import {observable, action, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {MinimalContent} from '../../../interface/content';
import {getFeaturedContent} from '../../../services/content/content';

interface TContentStore {
  items: MinimalContent[];
  loading: boolean;
}

class FeaturedContentStore {
  @observable
  data: TContentStore = {items: [], loading: true};

  constructor() {}

  @action
  initialize() {
    this.loadContent();
  }

  @action
  async loadContent() {
    if (this.data.loading == false) {
      return;
    }
    let response = await getFeaturedContent();

    runInAction(() => {
      this.data = {
        loading: false,
        items: response.data,
      };
    });
  }
}

export const FeaturedContentStoreContext = createContext<FeaturedContentStore>(
  new FeaturedContentStore(),
);

export const useFeaturedContentStore = (): FeaturedContentStore => {
  return useContext<FeaturedContentStore>(FeaturedContentStoreContext);
};
