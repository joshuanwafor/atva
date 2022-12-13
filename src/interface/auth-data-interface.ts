import {FeaturedContent, MinimalContent} from './content';
import {Image} from './media';

export interface UserAuthData {
  user: User;
  coming_soon_contents?: ComingSoonContentsEntity[] | null;
  content_categories?: ContentCategoriesEntity[] | null;
  featured_content: FeaturedContent;
  trending: {
    docs: MinimalContent[];
  };
  for_you: {
    docs: MinimalContent[];
  };
}

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  roles?: null[] | null;
  paymentDetails?: {
    brand: string;
    last4: string;
  };
  isSubscribed: boolean;
}

export interface ComingSoonContentsEntity {
  id: string;
  title: string;
  excerpt: string;
  thumbnail_vertical: Image;
  thumbnail_horizontal: Image;
  premieres: {id: string; date: string; amount: number; currency: string}[];
  genre: {
    id: string;
    title: string;
  }[];
}

interface ContentCategoriesEntity {
  id: string;
  title: string;
}
