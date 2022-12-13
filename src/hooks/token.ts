import {useObserver} from 'mobx-react';
import {billingStore} from '../store/data/billing';
import {userAuthStore} from '../store/data/user-auth';
import {useTokenStore} from '../store/token';
import {useNotify} from './notify';
import {runInAction} from 'mobx';
import {userFavoritesStore} from '../store/data/user-lists/favorites';
import {userWatchlistStore} from '../store/data/user-lists/watchlist';

export function useToken() {
  const {show} = useNotify();
  const {data, setToken, onLogout} = useTokenStore();

  async function handleLogout(callback: () => Promise<void> | void) {
    runInAction(() => {
      userAuthStore.data.content = undefined;
      billingStore.mySubscriptions = [];
      billingStore.selectedPlan = undefined;
      userFavoritesStore.data = {items: [], loading: false, loaded: false};
      userWatchlistStore.data = {items: [], loading: false, loaded: false};
    });
    try {
      await callback();
      await onLogout();
    } catch (e) {
      show('Error logging you out');
    }
  }

  return useObserver(() => ({
    token: data.token,
    saveToken: setToken,
    onLogout: handleLogout,
    loading: data.loading,
  }));
}
