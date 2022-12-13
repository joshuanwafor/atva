import {logout, checkAuth} from '../services/user/auth';
import {observable, action, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {AppCredential} from '../config/credentials';
import {setHeaderToken} from '../config/request';

interface TUser {
  token: string;
  id: string;
  loading: boolean;
  tokenError: boolean;
}
class TokenStore {
  @observable
  data: TUser = {token: '', id: '', loading: true, tokenError: false};

  constructor() {
    this.initialize();
  }

  @action
  initialize() {
    new AppCredential()
      .getAuth()
      .then((auth) => {
        runInAction(() => {
          setHeaderToken(auth?.token);
          this.data.token = auth?.token;
          this.data.id = auth?.id;
          this.data.loading = false;
        });
        this.verifyToken();
      })
      .catch(() => {
        this.data.loading = false;
      });
  }

  @action
  verifyToken() {
    checkAuth()
      .then(() => {
        this.data.tokenError = false;
      })
      .catch(() => {
        this.data.tokenError = true;
      });
  }

  @action.bound
  async setToken(token: string, id: string) {
    this.data.token = token;
    setHeaderToken(token);
    await new AppCredential().setAuth({token, id});
  }

  @action.bound
  async onLogout() {
    try {
      await logout();
      await new AppCredential().removeAuth();
    } finally {
      setHeaderToken('');
      this.data.token = '';
    }
  }
}

export const TokenStoreContext = createContext<TokenStore>(new TokenStore());

export const useTokenStore = () => {
  return useContext(TokenStoreContext);
};
