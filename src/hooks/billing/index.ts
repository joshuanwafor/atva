import {useObserver} from 'mobx-react';
import {billingStore, useBillingStore} from '../../store/data/billing';
import {userAuthStore} from '../../store/data/user-auth';
import React from 'react';
import {ISubscriptionPlan} from '@interface/models';

export const useBillingHooks = () => {
  let [selectedPlan, updateSelectedPlan] = React.useState<
    ISubscriptionPlan | undefined
  >(undefined);

  function initSubscriptionPlan() {}

  function load() {
    billingStore
      .loadUserSubscriptions()
      .then(() => {})
      .catch(() => {
        console.log('Failed to load user subscriptions successfully');
      });
  }

  React.useEffect(() => {
    load();
    if (
      userAuthStore.data.loading == false &&
      userAuthStore.data.content == undefined
    ) {
      userAuthStore.initialize();
      userAuthStore.loadContent();
    }
  }, []);

  return useObserver(() => {
    return {
      mySubs: billingStore.mySubscriptions,
      paymentMethod: userAuthStore.data.content?.user.paymentDetails,
    };
  });
};
