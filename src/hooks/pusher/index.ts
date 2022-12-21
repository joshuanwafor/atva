import Snackbar from 'react-native-snackbar';
import {userAuthStore} from '../../store/data/user-auth';
import {pusher} from '../../services/pusher';

export function usePusher() {
  function listenToUserSubscriptions(userID: string) {
    // let channel = pusher.subscribe(`user.${userID}`);
    // channel.bind('subscription', (data: any) => {
    //   // reload user data after successfull subscription
    //   userAuthStore.loadContent(true);
    //   Snackbar.show({
    //     text: 'Subscription completed 😌',
    //     duration: Snackbar.LENGTH_LONG,
    //   });
    // });
  }

  function listenToTicketPurchaseEvents(transactionRef: string) {
    // let channel = pusher.subscribe(`tx.${transactionRef}`);

    // channel.bind('charge_success', (data: any) => {
    //   console.log(data);
    //   Snackbar.show({
    //     text: 'Successfully purchased ticket 😌',
    //     duration: Snackbar.LENGTH_LONG,
    //   });
    // });
  }

  return {
    listenToTicketPurchaseEvents,
    listenToUserSubscriptions,
  };
}
