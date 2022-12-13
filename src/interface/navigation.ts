import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {TVerifyResponse} from './requests';
import {MinimalContent, Movie, FeaturedContent} from './content';

export type RootStackParameterList = {
  Intro: undefined;
  MainApp: undefined;
  Connected: undefined;
  Billing: undefined;
  AddCard: undefined;
  Home: undefined;
  Details: {
    movie?: MinimalContent;
    movie_id: string;
    isWatching: boolean;
    isCinema?: boolean;
    isTvShow?: boolean;
    isFeatured?: boolean;
    title?: string;
  };
  CinemaScreen: {movie: Movie | FeaturedContent};
  WatchScreen: {movie: Movie | FeaturedContent};
  Account: undefined;
  Search: undefined;
  SearchResult: undefined;
  Code: {email: string; hash: string; isRegister?: boolean};
  CompleteRegister: {response: TVerifyResponse};
  Login: undefined;
  Register: undefined;
  AuthWelcome: undefined;
  DownloadSettings: undefined;
  DownloadSettingsDownload: undefined;
  Favorites: undefined;
  Downloads: undefined;
  Watchlist: undefined;
  Phone: undefined;
  PhoneVerify: {number: string; code: string; country: string};
};

export type IntroScreenNavigationProp = StackNavigationProp<
  RootStackParameterList,
  'Intro'
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParameterList,
  'Home' | 'Details'
>;

export type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParameterList,
  | 'Account'
  | 'Billing'
  | 'Connected'
  | 'Watchlist'
  | 'Favorites'
  | 'DownloadSettings'
>;

export type DownloadScreenNavigationProp = StackNavigationProp<
  RootStackParameterList,
  'Downloads' | 'DownloadSettingsDownload'
>;

export type AuthScreenNavigationProp = StackNavigationProp<
  RootStackParameterList,
  | 'AuthWelcome'
  | 'Login'
  | 'Code'
  | 'Register'
  | 'Phone'
  | 'PhoneVerify'
  | 'CompleteRegister'
>;

export type CodeScreenRouteProp = RouteProp<RootStackParameterList, 'Code'>;
export type DetailsScreenRouteProp = RouteProp<
  RootStackParameterList,
  'Details'
>;

export type CinemaScreenRouteProp = RouteProp<
  RootStackParameterList,
  'CinemaScreen'
>;

export type CompleteRegistrationScreenRouteProp = RouteProp<
  RootStackParameterList,
  'CompleteRegister'
>;
