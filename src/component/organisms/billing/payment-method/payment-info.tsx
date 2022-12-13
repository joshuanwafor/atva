import * as React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {
  sizeScale,
  getFontFromTheme,
  getColorFromTheme,
} from '../../../../utils';
import {theme} from '../../../../style/theme';
import BillingTabCardTemplate from '../../../templates/billing-tab-card';
import SectionTitle from '../../../atoms/section-title';
import SectionWrapper from '../../../atoms/section-wrapper';
import Visa from '../../../atoms/svgs/visa';
import Master from '../../../atoms/svgs/master';
import Verve from '../../../atoms/svgs/verve';
import ActionButton from '../../../molecules/button/action-button';
import InputField from '../../../molecules/inputfield';
import {observer} from 'mobx-react';
import {
  useAuthDataStore,
  userAuthStore,
} from '../../../../store/data/user-auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParameterList} from '../../../../interface/navigation';

const RemoveText = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.3), 'px')};
  text-align: left;
  color: ${getColorFromTheme('brownishGrey')};
  margin-bottom: 20px;
`;

const CardText = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.3), 'px')};
  text-align: left;
  color: ${getColorFromTheme('brownGrey')};
`;

const CardWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Card = styled.View`
  margin-right: 10px;
`;

function BillingInformation() {
  let {data} = useAuthDataStore();
  let navigation = useNavigation<NavigationProp<RootStackParameterList>>();

  const paymentInfo = data.content?.user.paymentDetails;
  return (
    <BillingTabCardTemplate>
      <SectionWrapper hasBorder>
        <SectionTitle>
          Any update to your current subscription will be reflected on your next
          billing date.
        </SectionTitle>
        <CardWrapper>
          <Card>
            <Visa />
          </Card>
          <Card>
            <Master />
          </Card>
          <Card>
            <Verve />
          </Card>
        </CardWrapper>
        <InputField
          label="Card Number"
          value={'**** **** **** ' + paymentInfo?.last4}
          disabled
        />
        <InputField
          label="Brand"
          placeholder="10/20"
          value={paymentInfo?.brand}
          disabled
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>Remove Card</SectionTitle>
        <RemoveText>
          When you make your first payment, your payment details is being stored
          for later use. You can delete payment card.
        </RemoveText>
        <ActionButton
          kind="red"
          onPress={() => {
            //navigation.navigate('AddCard');
            userAuthStore.removeCard();
          }}
        >
          Remove Card
        </ActionButton>
      </SectionWrapper>
      {/* <SectionWrapper>
      // Update Card
        <SectionTitle>Update card</SectionTitle>
        <RemoveText>
          When you add a new payment method, charges take effect from your next
          payment date. Note; when you add a payment method, you may be issued a
          temporary authorization charge.
        </RemoveText>
        <ActionButton
          kind="red"
          disabled
          onPress={() => {
            //navigation.navigate('AddCard');
          }}>
          Update card/billing details
        </ActionButton>
      </SectionWrapper> */}
      <View style={{height: 30}} />
    </BillingTabCardTemplate>
  );
}

export default observer(BillingInformation);
