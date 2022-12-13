import {observable, action, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import * as yup from 'yup';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {Country} from '../interface/models';
import {countries} from '../services/country';
import FormStore from './form';

interface NormalizedCountry extends Country {
  id: string;
}

interface TData {
  countries: NormalizedCountry[];
  rawCountries: NormalizedCountry[];
  loading: boolean;
  countriesData: Record<string, Country> | undefined;
  search: string;
}

class PhoneAuthStore extends FormStore {
  @observable
  data: TData = {
    countries: [],
    rawCountries: [],
    loading: true,
    countriesData: undefined,
    search: '',
  };

  constructor() {
    super();

    this.form = {
      fields: {
        phone: {
          value: '',
          error: false,
        },
      },
      meta: {
        isValid: false,
        error: '',
        submitError: '',
        isSubmitting: false,
      },
      schema: yup.object().shape({
        phone: yup.string().required(),
      }),
    };
    this.initialize();
  }

  @action
  initialize() {
    countries()
      .then(({data}) => {
        runInAction(() => {
          const result: NormalizedCountry[] = Object.keys(data.data).map(
            (key) => ({
              ...data.data[key],
              id: key,
            }),
          );
          this.data.countries = result;
          this.data.rawCountries = result;
          this.data.countriesData = data.data;
          this.data.loading = false;
        });
      })
      .catch(() => {
        this.data.loading = false;
      });
  }

  @action.bound
  onPhoneNumberChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.onFieldChange(e, 'phone');
  }

  @action.bound
  onSearchCountry(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    const val = e.nativeEvent.text;
    this.data.search = val;
    const newData = this.data.rawCountries.filter((c) => {
      const itemData = `${c.name?.toUpperCase()}`;
      const textData = val.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.data.countries = newData;
  }
}

export const PhoneAuthStoreContext = createContext<PhoneAuthStore>(
  new PhoneAuthStore(),
);

export const usePhoneAuthStore = () => {
  return useContext(PhoneAuthStoreContext);
};
