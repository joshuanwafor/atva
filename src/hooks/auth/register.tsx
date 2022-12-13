import {useObserver} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
import {useRef} from 'react';
import {useRegisterStore} from '../../store/auth/register';
import {AuthScreenNavigationProp} from '../../interface';
import {useNotify} from '../notify';
import {useDeviceInfo} from '../device-header';

export function useRegister() {
  const {show} = useNotify();
  const deviceInfo = useDeviceInfo();
  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  const {onEmailChange, onFirstNameChange, onLastNameChange, form, onSubmit} =
    useRegisterStore();
  const navigation = useNavigation<AuthScreenNavigationProp>();

  async function handleSubmit() {
    try {
      const userData = {
        email: form.fields.email.value,
        last_name: form.fields.lastName.value,
        first_name: form.fields.firstName.value,
        provider: 'email',
      };

      const response = await onSubmit(userData, JSON.stringify(deviceInfo));
      navigation.navigate('Code', {
        email: response.email,
        hash: response.hash,
        isRegister: true,
      });
    } catch (e) {
      show(form.meta.submitError || 'Error creating your account');
    }
  }

  return useObserver(() => ({
    email: form.fields.email.value,
    firstName: form.fields.firstName.value,
    lastName: form.fields.lastName.value,
    onEmailChange,
    onLastNameChange,
    onFirstNameChange,
    handleSubmit,
    isValid: form.meta.isValid,
    submitting: form.meta.isSubmitting,
    firstNameRef,
    lastNameRef,
    emailRef,
  }));
}
