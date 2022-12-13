import {Plans, ISubscriptionPlan, ISubscriptionItem} from '@interface/models';
import {
  getMySubscriptions,
  getSubscriptionPlans,
  postSetupPaymentMethod,
  postSubscribeToPlan,
} from '../../services/user/billing';
import {action, observable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {userAuthStore} from './user-auth';
import {useNotify} from '../../hooks/notify';

class Store {
  @observable
  selectedPlan?: ISubscriptionPlan;
  @observable
  plans?: ISubscriptionPlan[];
  @observable
  mySubscriptions?: ISubscriptionItem[];
  constructor() {}

  @action
  async initialize() {
    this.loadUserSubscriptions();
    this.loadSubscriptionPlans();
  }

  subscribe = async (plan: string) => {
    postSubscribeToPlan(plan)
      .then((v) => {
        this.loadUserSubscriptions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateSelectedPlan = (plan: ISubscriptionPlan) => {
    runInAction(() => {
      this.selectedPlan = plan;
    });
  };

  loadUserSubscriptions = async () => {
    getMySubscriptions()
      .then((res) => {
        runInAction(() => {
          this.mySubscriptions = res.data.data;
        });
      })
      .catch((err) => {
        console.log('Failed to load user subscripions');
        console.log(err);
      });
  };

  loadSubscriptionPlans = async () => {
    getSubscriptionPlans()
      .then((res) => {
        runInAction(() => {
          this.plans = res.data;
        });
      })
      .catch((err) => {
        console.log(err);
        console.log('after error');
      });
  };

  // expiryDate e.g 10/23
  addCard = async (
    cvv: string,
    cardNumber: string,
    expiryDate: string,
  ): Promise<number> => {
    let {show} = useNotify();
    const arr = expiryDate.split('/');
    const month = arr[0];
    const year = arr[1];

    try {
      let res = await postSetupPaymentMethod({
        cvv: cvv,
        number: cardNumber,
        month: month,
        year: year,
      });

      if (res.status == 200) {
        show('Successfully added payment method');
        runInAction(() => {
          userAuthStore.loadContent(true);
          this.loadUserSubscriptions();
        });

        if (res.data.brand != undefined) {
          return 1;
        } else {
          return 2;
        }
      }
    } catch (e) {
      show(
        'Failed to add payment method... Ensure you input required card details',
      );
      console.log(e);
      return 0;
    }

    return 0;
  };
}

export const billingStore = new Store();
const _Context = createContext<Store>(billingStore);

export const useBillingStore = (): Store => {
  return useContext<Store>(_Context);
};
