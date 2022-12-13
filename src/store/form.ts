import {action, observable} from 'mobx';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import * as yup from 'yup';
import {FormProp} from '../interface';

export type FormFieldChange = (
  e: NativeSyntheticEvent<TextInputChangeEventData>,
) => void;

class FormStore {
  @observable
  form: FormProp;

  constructor() {
    this.form = {
      fields: {},
      meta: {
        isValid: false,
        error: '',
        submitError: '',
        isSubmitting: false,
      },
      schema: yup.object(),
    };
  }

  private validateField = (field: string) => {
    const values = this.getFieldValue();
    this.form.schema
      .validateAt(field, values)
      .then(() => {
        this.form.fields[field].error = false;
      })
      .catch((e) => {
        this.form.fields[field].error = e.errors?.[0] || '';
      });
    this.form.schema.isValid(values).then((v) => {
      this.form.meta.isValid = v;
    });
  };

  private getFieldValue: () => Record<string, string> = () => {
    let fieldsData: Record<string, string> = {};
    for (const key in this.form.fields) {
      const formField = this.form.fields[key];
      fieldsData[key] = formField.value;
    }
    return fieldsData;
  };

  public onBlur = (field: string) => {
    this.validateField(field);
  };

  @action
  public onFieldChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    field: string,
  ) => {
    let value = e.nativeEvent.text;

    this.form.fields[field].value = value;

    if (!this.form.fields[field].error || this.form.fields[field].value) {
      this.validateField(field);
    }
  };

  @action
  setError = (errMsg: string) => {
    this.form.meta.error = errMsg;
  };
}

export default FormStore;
