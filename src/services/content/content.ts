import {
  TAuthDataEvent,
  TContentEvent,
  TContentInfoEvent,
  TContentResponse,
  TContentWatchEvent,
  TFeaturedEvent,
} from '../../interface/requests';
import axios from '../../config/request';
import {Movie} from '../../interface/content';
import {UserAuthData} from '../../interface/auth-data-interface';
import {FeaturedContent} from '../../interface/content';

export const getAuthData = async (): Promise<TAuthDataEvent> => {
  return await axios.get<UserAuthData, TAuthDataEvent>('/auth');
};

export const getContent = async (query?: {
  [key: string]: string;
}): Promise<TContentEvent> => {
  // generate query string segment
  var queryString = '';
  if (query != undefined) {
    queryString = Object.keys(query)
      .map((key) => key + '=' + query[key])
      .join('&');
  }

  console.log(queryString);

  return await axios.get<TContentResponse, TContentEvent>(
    `/content?${queryString}`,
  );
};

export const getSeriesContent = async (query?: {
  [key: string]: string;
}): Promise<TContentEvent> => {
  return await axios.get<TContentResponse, TContentEvent>(
    `/content?type=tvshow`,
  );
};

export const getContentInfo = async (
  itemID: string,
): Promise<TContentInfoEvent> => {
  return await axios.get<Movie | FeaturedContent, TContentInfoEvent>(
    `/content/${itemID}`,
  );
};

export const getFeaturedContent = async (): Promise<TFeaturedEvent> => {
  return await axios.get<FeaturedContent[], TFeaturedEvent>('/featured');
};

export const getContentStreamLink = async (
  itemID: string,
): Promise<TContentWatchEvent> => {
  return await axios.get<{url: any}, TContentWatchEvent>(
    `/content/${itemID}/watch`,
  );
};
