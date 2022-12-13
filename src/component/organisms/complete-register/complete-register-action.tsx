import * as React from 'react';
import {
  View,
  ListRenderItemInfo,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {s, ms} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';
import {theme} from '../../../style/theme';
import LinearButton from '../../molecules/button/linear-button';
import Plan from './plan';
import {PlanType, Plans} from '../../../interface';
import BlurButton from '../../molecules/button/blur-button';
import PaymentMethod from '../billing/payment-method';
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

const CardWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const CardText = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.3), 'px')};
  text-align: left;
  color: ${getColorFromTheme('brownGrey')};
`;

const Card = styled.View`
  margin-right: 10px;
`;

const CompleteRegisterAction = React.memo(function ({
  innerRef,
  plans,
  onChange,
  activePlan,
  onComplete,
  submitting,
  isValid,
  expiry,
  security,
  cardNo,
  onSecurityChange,
  onExpiryChange,
  onCardNoChange,
}: {
  innerRef: React.RefObject<Modalize>;
  plans: Record<Plans, PlanType>;
  onChange: (plan: Plans) => void;
  activePlan: Plans;
  onComplete: () => void;
  submitting: boolean;
  isValid: boolean | void;
  expiry: string;
  cardNo: string;
  security: string;
  onSecurityChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onCardNoChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onExpiryChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}) {
  const renderItem = React.useCallback(
    function ({item}: ListRenderItemInfo<PlanType & {id: Plans}>) {
      return (
        <Plan
          key={item.title}
          plan={item}
          active={activePlan === item.id}
          onPress={() => onChange(item.id)}
        />
      );
    },
    [activePlan, onChange],
  );

  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
      }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={renderItem}
        data={Object.keys(plans).map((plan) => ({
          ...plans[plan as Plans],
          id: plan as Plans,
        }))}
        style={{width: '100%'}}
        disableIntervalMomentum={true}
        contentContainerStyle={{
          paddingHorizontal: s(16),
          marginBottom: 20,
          marginTop: 10,
        }}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        keyExtractor={(item) => item.id}
      />
      <Container>
        <BlurButton onPress={() => innerRef.current?.open('top')}>
          Start your free trial
        </BlurButton>
      </Container>
      <Container>
        <Copyright>
          Cancel anytime. Subscription auto-renews.
          {'\n'}
          By continuing, you agree to our privacy policy and terms of use
        </Copyright>
      </Container>

      <Container>
        <PaymentMethod />
      </Container>
    </View>
  );
});

export default CompleteRegisterAction;
