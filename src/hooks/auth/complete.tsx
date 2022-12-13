import {useObserver} from 'mobx-react';
import {Modalize} from 'react-native-modalize';
import {useState, useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import {CompleteRegistrationScreenRouteProp} from '../../interface';
import {useNotify} from '../notify';
import {useToken} from '../token';
import {PlanType, Plans} from '../../interface';
import {useUser} from '../user';
import {useCompleteRegistrationStore} from '../../store/auth/complete';

export const plans: Record<Plans, PlanType> = {
  [Plans.BASIC]: {
    features: [
      {content: 'Access to unlimited movies/series', available: true},
      {content: 'Access on 1 screen', available: true},
      {content: 'HD quality', available: false},
      {content: 'Cinema feature', available: false},
    ],
    recommended: false,
    price: 'N1999/m',
    title: 'Basic',
  },
  [Plans.STANDARD]: {
    features: [
      {content: 'Access to unlimited movies/series', available: true},
      {content: 'Access on 4 screen', available: true},
      {content: 'HD quality', available: true},
      {content: '50% off cinema movie ticker', available: true},
      {content: 'Another feature', available: true},
    ],
    recommended: true,
    price: 'N3999/m',
    title: 'Standard',
  },
  [Plans.PREMIUM]: {
    features: [
      {content: 'Access to unlimited movies/series', available: true},
      {content: 'Access on 4 screen', available: true},
      {content: 'XHD quality', available: true},
      {content: '70% off cinema movie ticker', available: true},
      {content: 'Another enticing feature', available: true},
      {content: 'Some more enticing feature', available: true},
    ],
    title: 'Premium',
    recommended: false,
    price: 'N5999/m',
  },
};

export function useComplete() {
  const {show} = useNotify();
  const {saveToken} = useToken();
  // const {saveUser} = useUser();
  const {
    onCardNoChange,
    onExpiryChange,
    onSecurityChange,
    form,
  } = useCompleteRegistrationStore();
  const {params} = useRoute<CompleteRegistrationScreenRouteProp>();
  const [selectedPlan, setSelectedPlan] = useState(Plans.BASIC);
  const actionRef = useRef<Modalize>(null);

  function onChangeActivePlan(plan: Plans) {
    setSelectedPlan(plan);
  }

  async function onSubmit() {
    try {
      actionRef.current?.close();
      saveToken(params.response.token.value, params.response.user.id);
      // saveUser(params.response.user);
    } catch (e) {
      show('Error connecting card try again!!!');
    }
  }

  return useObserver(() => ({
    onSubmit,
    selectedPlan,
    onChangeActivePlan,
    actionRef,
    onCardNoChange,
    onExpiryChange,
    onSecurityChange,
    submitting: form.meta.isSubmitting,
    isValid: form.meta.isValid,
    expiry: form.fields.expiry.value,
    cardNo: form.fields.cardNo.value,
    security: form.fields.security.value,
  }));
}
