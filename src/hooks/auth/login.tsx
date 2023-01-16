import {useObserver} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {useLoginStore} from '../../store/auth/login';
import {AuthScreenNavigationProp} from '../../interface';
import {useNotify} from '../notify';
import {useDeviceInfo} from '../device-header';
import {ToastAndroid} from 'react-native';
import {useCode} from './code';
import {useToken} from '../token';

export function useLogin() {
  const {show} = useNotify();
  const deviceInfo = useDeviceInfo();
  const {onEmailChange, form, onSubmit} = useLoginStore();
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const {saveToken} = useToken();

  async function handleSubmit() {
    try {
      const userData = {
        email: form.fields.email.value,
        provider: 'email',
      };

      const response = await onSubmit(userData, JSON.stringify(deviceInfo));

      //@ts-ignore
      if (response?.token?.value) {
        ToastAndroid.show('Sigining in as demo account', 1000);

        //@ts-ignore
        console.log(response?.token?.value, response?.user?.id);
        //@ts-ignore
        saveToken(response?.token?.value ?? '', response?.user?.id ?? '');

        return;
      }

      navigation.navigate('Code', {email: response.email, hash: response.hash});
    } catch (e) {
      console.log(e, 'erro');
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
