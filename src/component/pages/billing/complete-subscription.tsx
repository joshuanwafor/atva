import * as React from 'react';
import {RefreshControl, View} from 'react-native';
import AuthProcessTemplate from '../../templates/auth/auth-process';
import CompleteRegisterContent from '../../organisms/complete-register/complete-register';
import CompleteRegisterAction from '../../organisms/complete-register/complete-register-action';
import {useComplete, plans} from '../../../hooks/auth/complete';
import {RootStackParameterList} from '../../../interface/navigation';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import SetupSubscription from './../../organisms/billing/set-subscription';
import SelectedPlanDescription from '../../organisms/billing/plan-description';
import {useInitHook} from '../../../hooks/init/index';
import {wait} from '../../../utils';

function CompleteRegister() {
  const [refereshing, setRefreshing] = React.useState(false);
  let navigation = useNavigation<NavigationProp<RootStackParameterList>>();

  let {loadAppEnv} = useInitHook();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadAppEnv();
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refereshing} onRefresh={onRefresh} />
      }>
        <SelectedPlanDescription />
        <SetupSubscription />
      {/* 
     */}
    </ScrollView>
  );
}

export default CompleteRegister;
