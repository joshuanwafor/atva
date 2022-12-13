import {useFavouriteList} from '../../hooks/content/user-list';
import {Reaction} from 'mobx';
import {contentStore} from '../../store/data/content/content';
import {billingStore} from '../../store/data/billing';
import {userAuthStore} from '../../store/data/user-auth';
import {userFavoritesStore} from '../../store/data/user-lists/favorites';
import {userWatchlistStore} from '../../store/data/user-lists/watchlist';
import {usePusher} from '../../hooks/pusher';

export const useInitHook = () => {
  let {listenToUserSubscriptions} = usePusher();

  return {
    loadAppEnv: async () => {
      // load user auth
      await userAuthStore.loadContent(true).then((user) => {
        listenToUserSubscriptions(user?.id ?? '');
      });

      // load content
      await contentStore.loadContent('movie');
      await contentStore.loadContent('cinema', true);
      await contentStore.loadContent('tvshow', true);

      // load user list
      await userFavoritesStore.load();
      await userWatchlistStore.load();

      // // load subscriptions
      await billingStore.loadSubscriptionPlans();
      // // load subscriptions
      await billingStore.loadUserSubscriptions();
    },
  };
};
