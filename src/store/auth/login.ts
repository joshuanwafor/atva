import {action} from 'mobx';
import {createContext, useContext} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import * as yup from 'yup';
import {TLoginData, TLoginResponse} from '../../interface/requests';
import FormStore from '../form';
import {login} from '../../services/user/auth';

class LoginStore extends FormStore {
  constructor() {
    super();

    this.form = {
      fields: {
        email: {
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
        email: yup.string().email('Email is invalid'),
      }),
    };
  }

  @action.bound
  onEmailChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.onFieldChange(e, 'email');
  }

  @action.bound
  async onSubmit(formData: TLoginData, ua: string): Promise<TLoginResponse> {
    this.form.meta.isSubmitting = true;
    try {
      const {data} = await login(formData, ua);
      return data;
    } catch (e) {
      // @ts-ignore
      this.form.meta.error = e.response.data.message;
      throw e;
    } finally {
      this.form.meta.isSubmitting = false;
    }
  }
}

export const LoginStoreContext = createContext<LoginStore>(new LoginStore());

export const useLoginStore = () => useContext(LoginStoreContext);
