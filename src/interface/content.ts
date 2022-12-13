import {MovieTicket} from '.';
import {Image} from './media';

export type ContentDuration = {
  hour?: number;
  minute?: number;
  second?: number;
};

export interface BaseContent {
  id: string;
  title: string;
  tags: string[];
  excerpt: string;
  rating?: string;
  description: string;
  category: string;
  niceTitle?: string;
  trailer_url?: string;
  duration: ContentDuration | string;
  formattedDuration?: string;
  premieres: {id: string; date: string; amount: number; currency: string}[];
  genre: {
    id: string;
    title: string;
  }[];
}

export interface Movie extends BaseContent {
  year?: string;
  rating?: string;
  playbackURL?: string;
  logo?: Image;
  banner?: Image;
  formattedDuration?: string;
  language: string;
  releaseDate: string;
  thumbnail_vertical?: Image;
  thumbnail_horizontal?: Image;
  isPlayable?: boolean;
  isInWatchList?: boolean;
  isInFavoriteList?: boolean;

  crews: TCrewSchema[];
  genre: {
    id: string;
    title: string;
  }[];
}

export interface FeaturedContent extends BaseContent {
  logo?: Image;
  thumbnail_horizontal?: Image;
  thumbnail_vertical?: Image;
  banner?: Image;
  numberOfSeasons?: string;
  language: string;
  releaseDate: string;
  year?: string | number;
  rating?: string;
  playbackURL?: string;
  isInWatchList?: boolean;
  crews: TCrewSchema[];
  genre: {
    id: string;
    title: string;
  }[];
}

export type MinimalContent = BaseContent & {
  id: string;
  logo?: Image;
  banner?: Image;
  thumbnail_vertical?: Image;
  thumbnail_horizontal?: Image;
  genre: {
    id: string;
    title: string;
  }[];
};

export type TCrewSchema = {
  type: string;
  rolePlayed: string;
  isAStar: false;
  user: {
    id: string;
    name: string;
  };
};
