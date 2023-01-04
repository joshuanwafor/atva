import {observable, action, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {MinimalContent, Movie} from '../../../interface/content';
import {getContent} from '../../../services/content/content';

class SearchStore {
  @observable
  term: string = '';

  @observable
  data: {
    loading: boolean;
    result?: Movie[];
  } = {
    loading: true,
  };
  constructor() {
    this.data = {
      loading: false,
      result: [],
    };
  }
  @action
  search = async (query: string) => {
    try {
      let response = await getContent({q: query});
      runInAction(() => {
        this.term = query;
        this.data.result = response.data.docs;
      });
    } catch (e) {
      //console.log(e);
    }
  };
}

export const searchManager = new SearchStore();

export const _Context = createContext<SearchStore>(searchManager);

export const useSearchStore = (): SearchStore => {
  return useContext<SearchStore>(_Context);
};
