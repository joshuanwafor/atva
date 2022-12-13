import {useObserver} from 'mobx-react';
import {useState, useCallback, useRef} from 'react';
import {Modalize} from 'react-native-modalize';
import {usePhoneAuthStore} from '../store/phone';
import {Country} from '../interface/models';
import {Keyboard} from 'react-native';
import {AuthScreenNavigationProp} from '../interface/navigation';
import {useNotify} from './notify';
import {useNavigation} from '@react-navigation/native';

interface NormalizedCountry extends Country {
  id: string;
}

export function usePhoneAuth() {
  const {
    data,
    onPhoneNumberChange,
    form,
    onSearchCountry,
  } = usePhoneAuthStore();
  const {show} = useNotify();
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const modalizeRef = useRef<Modalize>(null);

  const [country, setCountry] = useState('NG');

  const handleCloseModal = useCallback(() => {
    Keyboard.dismiss();
    modalizeRef.current?.close();
  }, [modalizeRef]);

  const handleOpenModal = useCallback(() => {
    Keyboard.dismiss();
    modalizeRef.current?.open();
  }, [modalizeRef]);

  const onChangeCountry = useCallback(
    (val: string) => {
      setCountry(val);
      handleCloseModal();
    },
    [handleCloseModal, setCountry],
  );

  async function handleSubmit() {
    try {
      navigation.navigate('PhoneVerify', {
        number: form.fields.phone.value,
        country,
        code: data.countriesData?.[country].callingCode?.[0] || '',
      });
    } catch (e) {
      show('Error login you in');
    }
  }

  return useObserver(() => ({
    country,
    onChangeCountry,
    modalizeRef,
    handleCloseModal,
    handleOpenModal,
    countries: data.countries,
    countriesData: data.countriesData,
    phone: form.fields.phone.value,
    onPhoneNumberChange,
    loading: data.loading,
    onSearchCountry,
    search: data.search,
    isValid: form.meta.isValid,
    handleSubmit,
    submitting: form.meta.isSubmitting,
  }));
}
