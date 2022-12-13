import SectionTitle from '../../../atoms/section-title';
import SectionWrapper from '../../../atoms/section-wrapper';
import Master from '../../../atoms/svgs/master';
import Verve from '../../../atoms/svgs/verve';
import Visa from '../../../atoms/svgs/visa';
import {ms} from 'react-native-size-matters';
import {
  sizeScale,
  getFontFromTheme,
  getColorFromTheme,
} from '../../../../utils';
import LinearButton from '../../../molecules/button/linear-button';
import {theme} from '../../../../style/theme';
import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {RootStackParameterList} from '../../../../interface/navigation';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useAuthDataStore} from '../../../../store/data/user-auth';
import BillingInfo from './payment-info';
import {useBillingHooks} from '../../../../hooks/billing';
import {usePlanHooks} from '../../../../hooks/billing/plan';

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
const Component: React.FC = () => {
  let navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  let {data} = useAuthDataStore();
  let {paymentMethod} = useBillingHooks();
  let {plans, selectedPlan} = usePlanHooks();

  if (paymentMethod != undefined) {
    return <BillingInfo />;
  }

  return (
    <View>
      <SectionWrapper hasBorder>
        <SectionTitle>Setup Payment method</SectionTitle>
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

        <LinearButton
          disabled={true}
          onPress={() => {
            //navigation.navigate('AddCard');
          }}>
          Add Debit Card
        </LinearButton>
        <View style={{height: 18}} />
        <CardText>
          We would make a temporary authorization on your card to verify it.
          This is an authorization only and NOT a charge. Your bank may inform
          you of the authorization.{'\n'}
          <Text style={{fontFamily: theme.font.demiBold}}>
            By purchasing you authorize Astra TV to automatically charge you on
            this card plus any applicable tax until you cancel.
          </Text>
        </CardText>
      </SectionWrapper>
      <View style={{height: 30}} />
    </View>
  );
};

export default Component;
