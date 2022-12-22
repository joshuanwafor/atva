import {
  Plans,
  ISubscriptionPlan,
  ISubscriptionItem,
  HistoryItem,
} from 'src/interface/models';
import {
  getMySubscriptions,
  getSubscriptionPlans,
  getTransactionHistory,
  postSetupPaymentMethod,
  postSubscribeToPlan,
} from '../../services/user/billing';
import {action, observable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {userAuthStore} from './user-auth';
import {useNotify} from '../../hooks/notify';

class TransactionsManager {
  @observable
  transactions?: HistoryItem[];
  constructor() {}

  loadUserTransactionsHistory = async () => {
    getTransactionHistory()
      .then((res) => {
        console.log(res.data.data);
        runInAction(() => {
          this.transactions = res.data.data;
        });
      })
      .catch((err) => {
        console.log('Failed to load user transactions');
        console.log(err);
      });
  };
}

export const transactionsManager = new TransactionsManager();
