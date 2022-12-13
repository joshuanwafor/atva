import * as React from 'react';
import {View, Text, ViewPagerAndroidBase} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../../utils';
import {theme} from '../../../style/theme';
import BillingTabCardTemplate from '../../templates/billing-tab-card';
import SectionTitle from '../../atoms/section-title';
import SectionWrapper from '../../atoms/section-wrapper';
import Visa from '../../atoms/svgs/visa';
import Master from '../../atoms/svgs/master';
import Verve from '../../atoms/svgs/verve';
import LinearButton from '../../molecules/button/linear-button';
import InputField from '../../molecules/inputfield';
import {observer} from 'mobx-react';
import {useAuthDataStore} from '../../../store/data/user-auth';
import {useBillingStore} from '../../../store/data/billing';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParameterList} from '../../../interface/navigation';

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

function Screen() {
  let navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  let {data} = useAuthDataStore();
  let {addCard} = useBillingStore();

  let [cardNumber, setCardNumber] = React.useState('');
  let [canSave, setCanSave] = React.useState(false);
  let [securityCode, setSecurityCode] = React.useState('');
  let [expiryDate, setExpiryDate] = React.useState('');

  let [reqiresPin, setRequiresPin] = React.useState(false);

  function checkCanSave() {
    if (
      securityCode.length == 3 &&
      cardNumber.length == 16 &&
      expiryDate.length == 5
    ) {
      setCanSave(true);
    } else {
      setCanSave(false);
    }
    console.log(canSave);
  }

  return (
    <ScrollView style={{paddingHorizontal: 12}}>
      <SectionWrapper hasBorder>
        <SectionTitle>Setup Debit Card</SectionTitle>
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
          placeholder="1111 2222 3333 4444"
          keyboardType="number-pad"
          value={cardNumber}
          onChangeText={(text) => {
            if (text.length == 20) return;
            setCardNumber(text);
            checkCanSave();
          }}
        />
        <InputField
          label="Expiration Date"
          placeholder="10/20"
          keyboardType="number-pad"
          value={expiryDate}
          onChangeText={(text) => {
            let tempT = text;
            if (text.length == 2 && expiryDate.length == 1) {
              tempT += '/';
            } else if (text.length == 2 && expiryDate.length == 3) {
              tempT = text.substring(0, text.length - 1);
            }
            if (text.length == 6) {
              return;
            }
            setExpiryDate(tempT);
            checkCanSave();
          }}
        />

        <InputField
          label="CVV/Security Code"
          placeholder="123"
          keyboardType="number-pad"
          value={securityCode}
          onChangeText={(text) => {
            if (text.length == 4) return;
            setSecurityCode(text);
            checkCanSave();
          }}
        />
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
      <LinearButton
        onPress={() => {
          addCard(securityCode, cardNumber, expiryDate)
            .then((res) => {
              console.log(res);
              if (res == 1) {
                navigation.goBack();
              } else {
              }
            })
            .catch((res) => {});
        }}>
        Save
      </LinearButton>
    </ScrollView>
  );
}

export default observer(Screen);
