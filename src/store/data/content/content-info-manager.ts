import {observable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {Movie, FeaturedContent} from '../../../interface/content';
import {getContentInfo} from '../../../services/content/content';

class ContentInfoStore {
  @observable
  items: {[key: string]: Movie | FeaturedContent} = {};

  loadContent = async (item_id: string) => {
    let info = await getContentInfo(item_id);
    runInAction(() => {
      if (info.status == 200) {
        this.items[item_id] = info.data;
        this.items[item_id].id = item_id;
      }
    });
  };

  getContent = async (
    item_id: string,
  ): Promise<Movie | FeaturedContent | undefined> => {
    if (this.items[item_id] == undefined) {
      this.loadContent(item_id);
      return undefined;
    }
    return this.items[item_id];
  };
}

export const ContentInfoStoreContext = createContext<ContentInfoStore>(
  new ContentInfoStore(),
);

export const useContentInfoStore = (): ContentInfoStore => {
  return useContext<ContentInfoStore>(ContentInfoStoreContext);
};
