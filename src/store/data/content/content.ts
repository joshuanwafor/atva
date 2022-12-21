import {action, observable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {getContent, getSeriesContent} from '../../../services/content/content';
import {MinimalContent} from '../../../interface/content';
import {TContentEvent} from '../../../interface/requests';

interface TContentStore {
  content_items: MinimalContent[];
  loading: boolean;
  cinema_content_items: MinimalContent[];
  series_content_items: MinimalContent[];
}

class ContentStore {
  @observable
  data: TContentStore = {
    loading: true,
    cinema_content_items: [],
    content_items: [],
    series_content_items: [],
  };

  @action
  async initialize() {
    this.initContent();
  }

  async initContent() {
    try {
      // load movies
      await this.loadContent('movie');
      // load cinema movies
      await this.loadContent('cinema');
      // load tvshows
      await this.loadContent('tvshow');
    } catch (e) {}
  }
  @action
  async loadContent(_type?: 'movie' | 'cinema' | 'tvshow', force?: boolean) {
    if (this.data.loading == false && force != true) {
      return;
    }
    //
    if (_type == undefined) {
      _type = 'movie';
    }

    let response: TContentEvent;

  

    if (_type == 'tvshow') {
      response = await getSeriesContent({
        type: _type,
        page:1,
        status:"published",
        limit:30
      });
    } else {
      response = await getContent({
        type: _type,
        page:1,
        status:"published",
        limit:30
      });
    }

    console.log(response.data);
    
    runInAction(() => {
      if (_type == 'movie') {
        this.data = {
          ...this.data,
          content_items: response.data.docs,
          loading: false,
        };
      }

      if (_type == 'cinema') {
        this.data = {
          ...this.data,
          cinema_content_items: response.data.docs,
          loading: false,
        };
      }

      if (_type == 'tvshow') {
        this.data = {
          ...this.data,
          series_content_items: response.data.docs,
          loading: false,
        };
      }
    });
  }

  @action
  updateContentInfo() {}
}

export const contentStore = new ContentStore();
export const ContentStoreContext = createContext<ContentStore>(contentStore);

export const useContentStore = (): ContentStore => {
  return useContext<ContentStore>(ContentStoreContext);
};
