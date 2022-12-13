import {action} from 'mobx';
import {createContext, useContext} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import * as yup from 'yup';
import {TVerifyData, TVerifyResponse} from './../../interface/requests';
import FormStore from '../form';
import {verify} from '../../services/user/auth';

class CodeStore extends FormStore {
  constructor() {
    super();

    this.form = {
      fields: {
        code: {
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
        code: yup.string().min(6).max(6),
      }),
    };
  }

  @action.bound
  onCodeChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.onFieldChange(e, 'code');
  }

  @action.bound
  async onSubmit(formData: TVerifyData, ua: string): Promise<TVerifyResponse> {
    this.form.meta.isSubmitting = true;
    try {
      const {data} = await verify(formData, ua);
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

export const CodeStoreContext = createContext<CodeStore>(new CodeStore());

export const useCodeStore = () => useContext(CodeStoreContext);
