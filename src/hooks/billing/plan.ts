import {useObserver} from 'mobx-react';
import {billingStore, useBillingStore} from '../../store/data/billing';
import React from 'react';
import {ISubscriptionPlan} from '@interface/models';
import {Linking} from 'react-native';
import {postSubscribeToPlan} from '../../services/user/billing';

export const usePlanHooks = () => {
  let [selectedPlan, updateSelectedPlan] = React.useState<
    ISubscriptionPlan | undefined
  >(undefined);

  function initSubscriptionPlan() {
    if (billingStore.selectedPlan != undefined) {
      postSubscribeToPlan(billingStore.selectedPlan?.code)
        .then((v) => {
          //@ts-ignore
          if (v.data.url != undefined) {
            //@ts-ignore
            Linking.openURL(v.data.url);
          }
          //
        })
        .catch((e) => {
          console.log('Failed to subscribe user to plan');
        });

      //
    }
  }

  function loadPlans() {
    billingStore
      .loadSubscriptionPlans()
      .then(() => {
        console.log('Successfully loaded plans');
      })
      .catch(() => {
        console.log('Failed to load plans successfully');
      });
  }

  React.useEffect(() => {
    loadPlans();
  }, []);

  return useObserver(() => {
    return {
      updateSelectedPlan: billingStore.updateSelectedPlan,
      initSubscriptionPlan,
      loadPlans,
      plans: billingStore.plans,
      selectedPlan: billingStore.selectedPlan,
    };
  });
};
