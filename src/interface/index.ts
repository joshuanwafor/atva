import {ReactChild, RefObject, ReactElement, ReactNode} from 'react';
import {TextInputProps, TextInput, ViewProps} from 'react-native';
import {ObjectSchema} from 'yup';
import {theme} from '../style/theme';
export * from './models';
export * from './navigation';

export interface Credentials {
  token: string;
  id: string;
}

export interface TGenericResponse {
  statusCode: number;
  message: string;
}

type Theme = typeof theme;
export type Colors = keyof Theme['colors'];
export type Fonts = keyof Theme['font'];

export type ButtonKind = 'white' | 'black' | 'pink' | 'red';

export interface TChildProps {
  children: ReactChild | ReactChild[] | ReactElement | ReactNode;
}

export interface FormField {
  value: string;
  error: string | boolean;
}

export interface FormMeta {
  isValid: boolean | void;
  error: string;
  submitError: string;
  isSubmitting: boolean;
}

export interface FormProp<
  T extends object | null | undefined = object | undefined
> {
  fields: Record<string, FormField>;
  meta: FormMeta;
  schema: ObjectSchema<T>;
}

export interface TextfieldProps extends TextInputProps {
  error?: boolean;
  helper?: string;
  label: string;
  disabled?: boolean;
  formatText?: (text: string) => string;
  ref?: RefObject<TextInput>;
}

export interface TouchableProps extends ViewProps {
  disabled?: boolean;
  delayPressIn?: number;
  onPress?: () => void;
  children: React.ReactNode;
}

export enum HomeSections {
  HOME = 'Home',
  SERIES = 'Series',
  MOVIES = 'Movies',
  CINEMA = 'Cinema',
}
