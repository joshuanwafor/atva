import {action} from 'mobx';
import {createContext, useContext} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import * as yup from 'yup';
import {TRegisterData, TRegisterResponse} from '../../interface/requests';
import FormStore from '../form';
import {register} from '../../services/user/auth';

class RegisterStore extends FormStore {
  constructor() {
    super();

    this.form = {
      fields: {
        email: {
          value: '',
          error: false,
        },
        firstName: {
          value: '',
          error: false,
        },
        lastName: {
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
        email: yup.string().required().email('Email is invalid'),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
      }),
    };
  }

  @action.bound
  onEmailChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.onFieldChange(e, 'email');
  }

  @action.bound
  onFirstNameChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.onFieldChange(e, 'firstName');
  }

  @action.bound
  onLastNameChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.onFieldChange(e, 'lastName');
  }

  @action.bound
  async onSubmit(
    formData: TRegisterData,
    ua: string,
  ): Promise<TRegisterResponse> {
    this.form.meta.isSubmitting = true;
    try {
      const {data} = await register(formData, ua);
      return data;
    } catch (e) {
      console.log(e)
      // @ts-ignore
      this.form.meta.error = e?.data?.message;
      throw e;
    } finally {
      this.form.meta.isSubmitting = false;
    }
  }
}

export const RegisterStoreContext = createContext<RegisterStore>(
  new RegisterStore(),
);
export const useRegisterStore = () => useContext(RegisterStoreContext);
