import * as React from 'react';
import styled from 'styled-components/native';
import {s} from 'react-native-size-matters';
import {ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {sizeScale} from '../../utils';
import {TChildProps} from '../../interface';

import ButtonWrapper from '../atoms/button-wrapper';

export const BillingTabCardWrapper = styled.View`
  width: 100%;
  max-width: 540px;
  padding-left: ${sizeScale(s(12), 'px')};
  padding-right: ${sizeScale(s(12), 'px')};
  padding-top: ${sizeScale(s(12), 'px')};
`;

function BillingTabCardTemplate({
  children,
  button,
}: TChildProps & {button?: React.ReactChild}) {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.select({ios: 'padding'})}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        snapToAlignment="center">
        <BillingTabCardWrapper>{children}</BillingTabCardWrapper>
      </ScrollView>
      <ButtonWrapper>{button}</ButtonWrapper>
    </KeyboardAvoidingView>
  );
}

export default BillingTabCardTemplate;
