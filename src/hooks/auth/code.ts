import {useObserver} from 'mobx-react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Keyboard} from 'react-native';
import {useCodeStore} from '../../store/auth/code';
import {AuthScreenNavigationProp, CodeScreenRouteProp} from '../../interface';
import {useNotify} from '../notify';
import {useToken} from '../token';
import {useDeviceInfo} from '../device-header';

export function useCode() {
  const deviceInfo = useDeviceInfo();
  const {show} = useNotify();
  const {params} = useRoute<CodeScreenRouteProp>();
  const {onCodeChange, form, onSubmit} = useCodeStore();
  const {saveToken} = useToken();
  // const {saveUser} = useUser();
  const navigation = useNavigation<AuthScreenNavigationProp>();

  async function handleSubmit() {
    try {
      Keyboard.dismiss();
      const userData = {
        email: params.email,
        hash: params.hash,
        code: form.fields.code.value,
      };

      const response = await onSubmit(userData, JSON.stringify(deviceInfo));
      if (!params.isRegister) {
        saveToken(response.token.value, response.user.id);
        // saveUser(response.user);
      } else {
        saveToken(response.token.value, response.user.id);
        // navigation.navigate('CompleteRegister', {
        //   response,
        // });
      }
    } catch (e) {
      show(form.meta.submitError || 'Error validating your auth code');
    }
  }

  return useObserver(() => ({
    code: form.fields.code.value,
    onCodeChange,
    handleSubmit,
    submitting: form.meta.isSubmitting,
    isValid: form.meta.isValid,
  }));
}
