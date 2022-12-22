import request from '../../config/request';

import {
  TMySubscriptionsEvent,
  TMyTransactionHistoryEvent,
  TPaymentMethodUpdateResponse,
  TPaymentUpdateEvent,
  TSubscribeToPlanEvent,
  TSubscriptionPlansEvent,
} from 'src/interface/requests';
import {ISubscriptionItem, ISubscriptionPlan} from 'src/interface/models';
import {AxiosResponse} from 'axios';
import {HistoryItem} from 'interface/models';

export const postSetupPaymentMethod = async (data: {
  number: string;
  cvv: string;
  month: string;
  year: string;
}): Promise<TPaymentUpdateEvent> => {
  return request.post<TPaymentMethodUpdateResponse, TPaymentUpdateEvent>(
    '/billing/card',
    data,
    {},
  );
};

export const getSubscriptionPlans =
  async (): Promise<TSubscriptionPlansEvent> => {
    return request.get<ISubscriptionPlan[], TSubscriptionPlansEvent>(
      '/billing/plans',
    );
  };

export const postSubscribeToPlan = async (
  plan: string,
): Promise<TSubscribeToPlanEvent> => {
  return request.post<{}, TSubscribeToPlanEvent>('/billing/subscribe', {
    plan: plan,
  });
};

export const getTransactionHistory =
  async (): Promise<TMyTransactionHistoryEvent> => {
    return request.get<{data: HistoryItem[]}, TMyTransactionHistoryEvent>(
      '/billing/transactions',
    );
  };

export const getMySubscriptions = async (): Promise<TMySubscriptionsEvent> => {
  return request.get<{data: ISubscriptionItem[]}, TMySubscriptionsEvent>(
    '/billing/subscriptions',
  );
};

export const postBuyTicket = async (
  contentId: string,
  ticketId: string,
): Promise<AxiosResponse<string>> => {
  return request.post('/billing/purchase', {
    contentId: contentId,
    ticketId: ticketId,
  });
};

export const patchSubscription = async (): Promise<TSubscribeToPlanEvent> => {
  return request.patch<{}, TSubscribeToPlanEvent>('/billing/subscribe');
};

export const removePaymentMethod = async (): Promise<any> => {
  return request.delete<{}, TSubscribeToPlanEvent>('/billing/card');
};
