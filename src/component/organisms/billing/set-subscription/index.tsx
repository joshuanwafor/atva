import * as React from 'react';
import {View, ListRenderItemInfo, ToastAndroid} from 'react-native';
//@ts-ignore
import styled from 'styled-components/native';
import {s, ms} from 'react-native-size-matters';
import {
  getColorFromTheme,
  getFontFromTheme,
  sizeScale,
} from '../../../../utils';
import BlurButton from '../../../molecules/button/blur-button';
import MySubscriptionSummary from '../../billing-header';
import {observer} from 'mobx-react';
import {SubscriptionPlansComp} from '../subscription-plans';
import {usePlanHooks} from '../../../../hooks/billing/plan';
import {useBillingHooks} from '../../../../hooks/billing';
import {useNotify} from '../../../../hooks/notify';
import ActionButton from '../../../molecules/button/action-button';
import {userAuthStore} from '../../../../store/data/user-auth';

export const Copyright = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: center;
  color: ${getColorFromTheme('white')};
  margin-bottom: 30px;
  margin-top: 10px;
`;

const Container = styled.View`
  padding-left: ${sizeScale(s(16), 'px')};
  padding-right: ${sizeScale(s(16), 'px')};
  width: 100%;
`;

const SetupSubscription = function () {
  let {show} = useNotify();
  let {initSubscriptionPlan, selectedPlan} = usePlanHooks();
  let {paymentMethod, mySubs} = useBillingHooks();

  let isSubscriber = userAuthStore.data.content?.user.isSubscribed;

  return (
    <View>
      <View
        style={{
          width: '100%',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View>
          {/* isSubscriber == false  */}
          {userAuthStore.data.content?.user.isSubscribed == false ? (
            <React.Fragment>
              <SubscriptionPlansComp />
              <Container>
                <BlurButton
                  disabled={!(selectedPlan != undefined)}
                  onPress={() => {
                    initSubscriptionPlan();
                  }}
                >
                  Start your free trial
                </BlurButton>
              </Container>
            </React.Fragment>
          ) : (
            <View>
              <MySubscriptionSummary></MySubscriptionSummary>
            </View>
          )}
        </View>
        <Container>
          <Copyright>
            Cancel anytime. Subscription auto-renews.
            {'\n'}
            By continuing, you agree to our privacy policy and terms of use
          </Copyright>
          {userAuthStore.data.content?.user.isSubscribed == true ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActionButton
                kind="red"
                onPress={() => {
                  userAuthStore.cancelSubscripion().then((res) => {
                    ToastAndroid.show(
                      'Successfully canceled subscription',
                      1000,
                    );
                  });
                }}
              >
                Cancel Subscription
              </ActionButton>
            </View>
          ) : null}
        </Container>
      </View>
    </View>
  );
};

export default observer(SetupSubscription);
