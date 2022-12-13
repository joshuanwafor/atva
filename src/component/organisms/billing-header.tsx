import * as React from 'react';
import {ScrollView, ToastAndroid, View} from 'react-native';
import {ms, s} from 'react-native-size-matters';
import styled from 'styled-components/native';
import HD from '../atoms/icons/hd';
import VisaCard from '../atoms/svgs/visa-card';
import TouchableItem from '../molecules/touchable-item';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';
import {useBillingStore} from '../../store/data/billing';
import {useAuthDataStore, userAuthStore} from '../../store/data/user-auth';
import {AppFormatNumber} from '../../config/utils';

const HeaderWrapper = styled.View`
  margin-bottom: 30px;
`;

const HeaderItemWrapper = styled.View`
  margin-right: ${sizeScale(ms(15, 0.3), 'px')};
  padding-horizontal: ${sizeScale(ms(12, 0.3), 'px')};
  padding-vertical: ${sizeScale(ms(10, 0.3), 'px')};
  width: ${sizeScale(ms(200, 0.5), 'px')};
  background-color: ${getColorFromTheme('blackThree')};
  border-radius: 6px;
  min-height: ${sizeScale(ms(120, 0.3), 'px')};
`;

const HeaderItemTitle = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(10, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('brownGrey')};
`;

const HeaderItemCaption = styled.Text`
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(16, 0.2), 'px')};
  text-align: left;
`;

const HeaderItemAction = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('alt')};
  text-decoration-line: underline;
`;

const HeaderMiddle = styled.View`
  flex: 1;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const PlanOptionWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const PlanOption = styled.View`
  flex-direction: row;
  margin-right: 5px;
  margin-bottom: 3px;
  align-items: center;
`;

const PlanText = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(11, 0.2), 'px')};
  text-align: left;
  margin-left: 2px;
  color: ${getColorFromTheme('pale')};
`;

const PaymentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PaymentTitle = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
`;

const PaymentSubTitle = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(10, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('brownishGrey')};
`;

function BillingHeader() {
  const {mySubscriptions} = useBillingStore();
  const {data} = useAuthDataStore();

  const subscription = mySubscriptions?.slice()[0];

  return (
    <HeaderWrapper>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal={true}
        alwaysBounceHorizontal={false}
        contentContainerStyle={{
          paddingLeft: s(12),
          paddingRight: s(12),
          alignItems: 'flex-start',
        }}
        keyboardDismissMode="on-drag"
      >
        <HeaderItemWrapper>
          <HeaderItemTitle>Current monthly billing and plan</HeaderItemTitle>
          <HeaderMiddle>
            <HeaderItemCaption>
              {AppFormatNumber(
                Number.parseInt(subscription?.amount ?? '0') ?? '',
              )}
            </HeaderItemCaption>
            <PlanOptionWrapper>
              <PlanOption>
                <HD width={13} height={13} fill="#fff" />
                <PlanText>Quality</PlanText>
              </PlanOption>
              <PlanOption>
                <HD width={13} height={13} fill="#fff" />
                <PlanText>75% off</PlanText>
              </PlanOption>
              <PlanOption>
                <HD width={13} height={13} fill="#fff" />
                <PlanText>3 devices</PlanText>
              </PlanOption>
            </PlanOptionWrapper>
          </HeaderMiddle>
          <TouchableItem>
            <HeaderItemAction accessibilityRole="link">
              Upgrade to premium
            </HeaderItemAction>
          </TouchableItem>
        </HeaderItemWrapper>
        <HeaderItemWrapper>
          <HeaderItemTitle>Next payment due</HeaderItemTitle>
          <HeaderMiddle>
            <HeaderItemCaption>
              {new Date(subscription?.nextPaymentDate ?? '').toDateString()}
            </HeaderItemCaption>
            <HeaderItemTitle>
              Last paid {new Date(subscription?.date ?? '').toDateString()}
            </HeaderItemTitle>
          </HeaderMiddle>
        </HeaderItemWrapper>
        <HeaderItemWrapper style={{marginRight: 0}}>
          <HeaderItemTitle>Payment information</HeaderItemTitle>
          <HeaderMiddle>
            <PaymentWrapper>
              <VisaCard fill="#fff" />
              <View style={{marginLeft: 5}}>
                <PaymentTitle>
                  Visa ending in {data.content?.user.paymentDetails?.last4}
                </PaymentTitle>
                <PaymentSubTitle>Expires: 07/2022</PaymentSubTitle>
              </View>
            </PaymentWrapper>
          </HeaderMiddle>
          <TouchableItem>
            <HeaderItemAction accessibilityRole="link">
              Upgrade card
            </HeaderItemAction>
          </TouchableItem>
        </HeaderItemWrapper>

        <HeaderItemWrapper style={{marginLeft: 12}}>
          <HeaderItemTitle>Cancel Subsription</HeaderItemTitle>
          <View style={{height: 16}} />
          <TouchableItem
            onPress={() => {
              userAuthStore.cancelSubscripion().then((res) => {
                ToastAndroid.show('Successfully canceled subscription', 1000);
              });
            }}
          >
            <HeaderItemAction accessibilityRole="link">
              Cancel Subsription
            </HeaderItemAction>
          </TouchableItem>
        </HeaderItemWrapper>
      </ScrollView>
    </HeaderWrapper>
  );
}

export default BillingHeader;
