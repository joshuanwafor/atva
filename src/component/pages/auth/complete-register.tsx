import * as React from 'react';
import {View} from 'react-native';
import AuthProcessTemplate from '../../templates/auth/auth-process';
import CompleteRegisterContent from '../../organisms/complete-register/complete-register';
import CompleteRegisterAction from '../../organisms/complete-register/complete-register-action';
import {useComplete, plans} from '../../../hooks/auth/complete';
import {RootStackParameterList} from '../../../interface/navigation';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

function CompleteRegister() {
  let navigation = useNavigation<NavigationProp<RootStackParameterList>>();

  const {
    onSubmit,
    selectedPlan,
    onChangeActivePlan,
    actionRef,
    onCardNoChange,
    onExpiryChange,
    onSecurityChange,
    submitting,
    isValid,
    expiry,
    cardNo,
    security,
  } = useComplete();
  return (
    <ScrollView>
      <CompleteRegisterContent plan={plans[selectedPlan]} />
      <CompleteRegisterAction
        plans={plans}
        innerRef={actionRef}
        onChange={onChangeActivePlan}
        activePlan={selectedPlan}
        onComplete={onSubmit}
        isValid={isValid}
        submitting={submitting}
        security={security}
        cardNo={cardNo}
        expiry={expiry}
        onSecurityChange={onSecurityChange}
        onExpiryChange={onExpiryChange}
        onCardNoChange={onCardNoChange}
      />
    </ScrollView>
  );
}

export default CompleteRegister;
