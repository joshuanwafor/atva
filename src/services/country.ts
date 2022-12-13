import axios from '../config/request';
import {TCountriesEvent} from '../interface/requests';

/**
 * Request resource to get all countries list
 */
export const countries = async (): Promise<TCountriesEvent> => {
  return axios.get<null, TCountriesEvent>('/countries');
};
