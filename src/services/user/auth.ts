import axios from '../../config/request';
import {
  TRegisterEvent,
  TRegisterData,
  TVerifyEvent,
  TVerifyData,
  TLoginData,
  TLoginEvent,
  TGenericEvent,
  TAuthUserEvent,
  TSocialAuthLoginData,
} from '../../interface/requests';

/**
 * Request resource to create user account
 * @param data object
 * @param ua string
 */
export const register = async (
  data: TRegisterData,
  ua: string,
): Promise<TRegisterEvent> => {
  return axios.post<TRegisterData, TRegisterEvent>('/auth/signup', data, {
    headers: {'User-Agent': ua},
  });
};

/**
 * Request resource to verify user auth process
 * @param data object
 * @param ua string
 */
export const verify = async (
  data: TVerifyData,
  ua: string,
): Promise<TVerifyEvent> => {
  return axios.post<TVerifyData, TVerifyEvent>('/auth/verify', data, {
    headers: {'User-Agent': ua},
  });
};

/**
 * Request resource to login user account
 * @param data object
 * @param ua string
 */
export const login = async (
  data: TLoginData,
  ua: string,
): Promise<TLoginEvent> => {
  return axios.post<TLoginData, TLoginEvent>('/auth/login', data, {
    headers: {'User-Agent': ua},
  });
};

/**
 * Request resource to logout user account
 */
export const logout = async (): Promise<TGenericEvent> => {
  return axios.post<null, TGenericEvent>('/auth/logout');
};

/**
 * Request resource to logout user account
 */
export const checkAuth = async (): Promise<TGenericEvent> => {
  return axios.get<null, TGenericEvent>('/auth/check');
};

/**
 * Request resource to logout user account
 * @deprecated
 */
export const getAuth = async (): Promise<TAuthUserEvent> => {
  return axios.get<null, TAuthUserEvent>('/auth');
};

/**
 * Request resource to login using social auth
 * @param data object
 * @param ua string
 */
export const socialAuthLogin = async (
  data: TSocialAuthLoginData,
): Promise<TLoginEvent> => {
  return axios.post<TSocialAuthLoginData, TLoginEvent>('/auth/social', data);
};
