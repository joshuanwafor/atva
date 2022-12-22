import {Image} from './media';

export interface Price {
  currency: string;
  price: number;
  formattedAmount: string;
}

export interface HistoryItem {
  amount: number;
  channel: string;
  currency: string;
  date: string;
  status: string;
}

export interface History {
  id: string;
  title: string;
  type: 'subscription' | 'ticket';
  createdAt: string;
  amount: Price;
  total: Price;
  txref: string;
  items: HistoryItem[];
}

export interface Watching {
  id: string;
  title: string;
  image: string;
  time: string;
}

export interface TitleImage {
  src: string;
  width: number;
  height: number;
}

export interface Duration {
  hour: number;
  minute: number;
  second: number;
}

export interface MovieMeta {
  title: string;
  content: string;
  id: string;
}
export interface MovieInfo {
  poster: string;
  staring: Artist[];
  synopsis: string;
  meta: MovieMeta[];
}

export interface MovieTicket {
  title: string;
  price: string;
  id: string;
}

export interface Category {
  id: string;
  // slug: string;
  title: string;
}

export interface MovieStar {
  average: number;
  total: number;
}

export interface MovieList {
  id: string;
  staring?: {id: string; name: string}[];
  title: string;
  image: string;
  tags: string[];
  star: MovieStar;
}

export interface DownloadList {
  id: string;
  image: string;
  title: string;
  tags: string[];
  isSeasonal: boolean;
  progress: number;
  download: {
    status: 'completed' | 'paused' | 'info' | 'progress';
    size: number; // download size in bytes
    downloaded: number; // the number of downloaded bytes
  };
}

export interface Artist {
  id: string;
  name: string;
  slug: string;
  image?: string;
}

export interface TrailsPictures {
  id: string;
  src: string;
  videoSrc?: string;
  title?: string;
  isTrailer: boolean;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  username?: string;
  email: string;
  phone?: string;
}

export interface Token {
  value: string;
  expiry: number;
}

export interface Tab {
  id: string;
  title: string;
  slug: string;
}

export interface Exclusives {
  id: string;
  subtitle: string;
  tags: string[];
  title: string;
  image: string;
  poster: string;
  slug: string;
}

export interface Country {
  callingCode: string[];
  region: string;
  subregion: string;
  flag: string;
  name: string;
}

export enum Plans {
  BASIC = 'basic',
  STANDARD = 'standard',
  PREMIUM = 'premium',
}

export interface PlanType {
  recommended: boolean;
  title: string;
  price: string;
  features: {content: string; available: boolean}[];
}

export interface Episode {
  title: string;
  duration: Duration;
  isWatching: boolean;
  episode: string;
  isWatched: boolean;
  id: string;
  banner: string;
}

export interface Season {
  id: string;
  season: string;
  year: string;
  title: string;
  synopsis: string;
  data: Episode[];
}

export interface UserItem {
  type: string;
  title: string;
  image: Image;
  itemId: string;
}

export type UserListTypes = 'favorite' | 'watchlist';

export type TComment = {
  title?: string;
  body?: string;
  user_id: string;
  fullname?: string;
  photo?: string;
  email: string;
  created_at: string;
};

export interface ISubscriptionPlan {
  name: string;
  amount: number;
  code: string;
  currency: string;
  description: string;
}

export interface ISubscriptionItem {
  amount: string;
  status: string;
  currency: string;
  date: string;
  planName: string;
  nextPaymentDate: string;
  customerEmail: string;
}
