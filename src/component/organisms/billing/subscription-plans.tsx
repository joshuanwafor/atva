import {observer} from 'mobx-react';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {s, ms} from 'react-native-size-matters';
import SectionTitle from '../../atoms/section-title';
import {useAuthDataStore} from '../../../store/data/user-auth';
import {useNotify} from '../../../hooks/notify';
import Plan from './set-subscription/plan';
import {usePlanHooks} from '../../../hooks/billing/plan';

export const SubscriptionPlansComp: React.FC = observer(() => {
  let userStore = useAuthDataStore();
  let {show} = useNotify();

  let {plans, selectedPlan, updateSelectedPlan} = usePlanHooks();

  const RenderPlans = function () {
    if (plans == undefined) {
      return <View style={{height: 120}}></View>;
    }
    if (plans?.length >= 1) {
      return (
        <View style={{height: 120}}>
          <ScrollView horizontal>
            {plans?.map((v, i) => {
              return (
                <View key={i} style={{marginHorizontal: 6}}>
                  <Plan
                    plan={v}
                    onPress={() => {
                      updateSelectedPlan(v);
                    }}
                    active={v.code == selectedPlan?.code}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      );
    }
    return <SectionTitle>Loading Plans</SectionTitle>;
  };

  return (
    <View style={{}}>
      <View style={{paddingLeft: 12}}>
        <SectionTitle>Select subscription plans</SectionTitle>
      </View>
      <View style={{height: 6}} />
      {<RenderPlans />}
      <View style={{height: 6}} />
      <View style={{height: 6}} />
    </View>
  );
});
