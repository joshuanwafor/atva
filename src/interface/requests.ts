import {AxiosResponse, AxiosError} from 'axios';
import {Movie} from './content';
import {Token, User, Country, UserItem} from './models';
import {UserAuthData} from './auth-data-interface';
import {FeaturedContent} from './content';
import {ISubscriptionItem, ISubscriptionPlan} from '.';

interface TGenericResponse {
  message: string;
}

interface TAuthResponse {
  status: string;
  hash: string;
  email: string;
  message: string;
}

export interface TRegisterResponse extends TAuthResponse {}

export interface TLoginResponse extends TAuthResponse {}

export interface TVerifyResponse {
  token: Token;
  user: User;
}

export interface TUserItemsResponse {
  docs: UserItem[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: any;
}

export interface TContentResponse {
  docs: Movie[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: any;
}

export interface TCountriesResponse {
  data: Record<string, Country>;
}

export interface TAuthUserResponse {
  token: Token;
  user: User;
}

export interface TRegisterData {
  email: string;
  provider: string;
  first_name: string;
  last_name: string;
}

export interface TVerifyData {
  email: string;
  hash: string;
  code: string;
}

export interface TLoginData {
  email: string;
  provider: string;
}

export interface TPaymentMethodUpdateResponse {
  brand?: string;
  last4?: string;
  message?: string;
}

export interface TSocialAuthLoginData {
  provider: string;
  token: string;
  platform: string;
}

export type TErrorEvent = {
  type: '';
  data: AxiosError<{message: string}>;
};

export type TResponseEvent<T> = {
  type: '';
  data: AxiosResponse<T>;
};

export type TGenericEvent = AxiosResponse<TGenericResponse>;
export type TRegisterEvent = AxiosResponse<TRegisterResponse>;
export type TVerifyEvent = AxiosResponse<TVerifyResponse>;
export type TAuthUserEvent = AxiosResponse<TAuthUserResponse>;
export type TCountriesEvent = AxiosResponse<TCountriesResponse>;
export type TLoginEvent = AxiosResponse<TLoginResponse>;

export type TContentEvent = AxiosResponse<TContentResponse>;
export type TContentInfoEvent = AxiosResponse<Movie | FeaturedContent>;
export type TFeaturedEvent = AxiosResponse<Movie[]>;

export type TContentWatchEvent = AxiosResponse<{url: string | null}>;

export type TUserItemsGetEvent = AxiosResponse<TUserItemsResponse>;

export type TAuthDataEvent = AxiosResponse<UserAuthData>;

export type TPaymentUpdateEvent = AxiosResponse<TPaymentMethodUpdateResponse>;

export type TSubscriptionPlansEvent = AxiosResponse<ISubscriptionPlan[]>;

export type TMySubscriptionsEvent = AxiosResponse<{
  data: ISubscriptionItem[];
}>;

export type TSubscribeToPlanEvent = AxiosResponse<{}>;
