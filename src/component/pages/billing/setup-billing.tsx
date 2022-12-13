import * as React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../../utils';
import {theme} from '../../../style/theme';
import BillingTabCardTemplate from '../../templates/billing-tab-card';
import {observer} from 'mobx-react';
import {useAuthDataStore} from '../../../store/data/user-auth';

import PaymentMethodComp from '../../organisms/billing/payment-method';
import InputField from '../../molecules/inputfield';

function BillingInformation() {
  return (
    <BillingTabCardTemplate button={<View />}>
      <PaymentMethodComp />
    </BillingTabCardTemplate>
  );
}

export default observer(BillingInformation);
