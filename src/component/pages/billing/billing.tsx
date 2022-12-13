import * as React from 'react';
import BillingTemplate from '../../templates/billing';
import BillingHeader from '../../organisms/billing-header';
import {View} from 'react-native';
import {SubscriptionPlansComp} from '../../organisms/billing/subscription-plans';
import {observer} from 'mobx-react';
import {useBillingStore} from '../../../store/data/billing';
import LinearButton from '../../molecules/button/linear-button';
import SectionWrapper from '../../atoms/section-wrapper';
import SectionTitle from '../../atoms/section-title';
import {useBillingHooks} from '../../../hooks/billing';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParameterList} from '../../../interface/navigation';
import {userAuthStore} from '../../../store/data/user-auth';

function Billing() {
  let navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  let {mySubs} = useBillingHooks();

  let isSubscriber = userAuthStore.data.content?.user.isSubscribed ?? false;

  let Header = <View />;

  const SetupSubscription = () => {
    return (
      <SectionWrapper style={{padding: 32}}>
        <SectionTitle>
          You don't have an active subsription... Please select a subscription
          plan
        </SectionTitle>
        <View style={{height: 8}}></View>
        <LinearButton
          onPress={() => {
            //@ts-ignore
            navigation.navigate('CompleteRegister');
          }}
        >
          Setup Subscription
        </LinearButton>
      </SectionWrapper>
    );
  };

  console.log(isSubscriber, ' is subs');

  if (isSubscriber == false) {
    Header = <SetupSubscription />;
  } else {
    Header = <BillingHeader />;
  }

  return <BillingTemplate header={Header} />;
}

export default observer(Billing);
