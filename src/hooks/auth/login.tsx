import {useObserver} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {useLoginStore} from '../../store/auth/login';
import {AuthScreenNavigationProp} from '../../interface';
import {useNotify} from '../notify';
import {useDeviceInfo} from '../device-header';

export function useLogin() {
  const {show} = useNotify();
  const deviceInfo = useDeviceInfo();
  const {onEmailChange, form, onSubmit} = useLoginStore();
  const navigation = useNavigation<AuthScreenNavigationProp>();

  async function handleSubmit() {
    try {
      const userData = {
        email: form.fields.email.value,
        provider: 'email',
      };

      const response = await onSubmit(userData, JSON.stringify(deviceInfo));

      navigation.navigate('Code', {email: response.email, hash: response.hash});
    } catch (e) {
      show('Error login you in');
    }
  }

  return useObserver(() => ({
    email: form.fields.email.value,
    onEmailChange,
    handleSubmit,
    isValid: form.meta.isValid,
    submitting: form.meta.isSubmitting,
  }));
}
