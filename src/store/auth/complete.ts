import {action} from 'mobx';
import {createContext, useContext} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import * as yup from 'yup';
import FormStore from '../form';

class CompleteRegistrationStore extends FormStore {
  constructor() {
    super();

    this.form = {
      fields: {
        cardNo: {
          value: '',
          error: false,
        },
        expiry: {
          value: '',
          error: false,
        },
        security: {
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
        cardNo: yup.string().required('Card number is required'),
        expiry: yup.string().required('Card expiry is required'),
        security: yup.string().required('Card CVV/security code is required'),
      }),
    };
  }

  @action.bound
  onCardNoChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.onFieldChange(e, 'cardNo');
  }

  @action.bound
  onExpiryChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.onFieldChange(e, 'expiry');
  }

  @action.bound
  onSecurityChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.onFieldChange(e, 'security');
  }

  @action.bound
  async onSubmit(): Promise<void> {
    this.form.meta.isSubmitting = true;
    try {
      setTimeout(() => {
        return;
      }, 1000);
    } catch (e) {
      // @ts-ignore
      this.form.meta.error = e.response.data.message;
      throw e;
    } finally {
      this.form.meta.isSubmitting = false;
    }
  }
}

export const CompleteRegistrationStoreContext = createContext<
  CompleteRegistrationStore
>(new CompleteRegistrationStore());

export const useCompleteRegistrationStore = () =>
  useContext(CompleteRegistrationStoreContext);
