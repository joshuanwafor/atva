import {
  patchSubscription,
  removePaymentMethod,
} from '../../services/user/billing';
import {observable, action, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {UserAuthData} from '../../interface/auth-data-interface';
import {getAuthData} from '../../services/content/content';
import {User} from '../../interface/models';

interface TContentStore {
  content?: UserAuthData;
  loading: boolean;
}

class Store {
  @observable
  data: TContentStore = {loading: true};

  constructor() {}

  @action
  initialize() {
    this.loadContent();
  
  }
  @action
  async loadContent(force = false): Promise<User | undefined> {
    let response = await getAuthData();
    runInAction(() => {
      this.data = {
        loading: false,
        content: response.data,
      };
    });

    return this.data.content?.user;
  }

  @action
  async cancelSubscripion() {
    patchSubscription()
      .then((v) => {
        console.log('Successfully deleted card');
        this.loadContent(true);
      })
      .catch((err) => {
        console.log('Failed to delete card');
      });
  }

  @action
  async removeCard() {
    removePaymentMethod()
      .then((v) => {
        console.log('Successfully canceled subscription');
        this.loadContent(true);
      })
      .catch((err) => {
        console.log('Failed to cancel subscription');
      });
  }
}

export const userAuthStore = new Store();

export const AuthDataStoreContext = createContext<Store>(userAuthStore);

export const useAuthDataStore = (): Store => {
  return useContext<Store>(AuthDataStoreContext);
};
