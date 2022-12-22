import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import format from 'date-fns/format';
import {History, HistoryItem} from '../../interface';
import {getColorFromTheme, sizeScale, getFontFromTheme} from '../../utils';
import Fire from '../atoms/icons/fire';

const Wrapper = styled.View`
  border-radius: 6px;
  background-color: ${getColorFromTheme('blackThree')};
  border-color: ${getColorFromTheme('white10')};
  border-width: 1px;
`;

const FooterWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${sizeScale(ms(14, 0.3), 'px')};
  padding-vertical: ${sizeScale(ms(14, 0.3), 'px')};
  border-top-color: ${getColorFromTheme('white10')};
  border-top-width: 1px;
`;

const TotalPrice = styled.Text`
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(15, 0.2), 'px')};
  text-align: right;
  color: ${getColorFromTheme('white')};
`;

const TxRefTitle = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
`;

const ItemWrapper = styled.View`
  padding-horizontal: ${sizeScale(ms(14, 0.3), 'px')};
  padding-top: ${sizeScale(ms(16, 0.3), 'px')};
  padding-bottom: ${sizeScale(ms(5, 0.3), 'px')};
`;

const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemTitle = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
`;

const ItemPrice = styled(ItemTitle)`
  text-align: right;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${sizeScale(ms(14, 0.3), 'px')};
  padding-vertical: ${sizeScale(ms(10, 0.3), 'px')};
  background-color: ${getColorFromTheme('black')};
  align-items: center;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

const HeaderPrice = styled(TotalPrice)`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(15, 0.2), 'px')};
`;

const HeaderTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HeaderTitleContentWrapper = styled.View`
  margin-left: 5px;
`;

const Title = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(15, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
`;

const DateText = styled.Text`
  font-family: ${getFontFromTheme('regular')};
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('brownGrey')};
`;

function BillingHistory(props: {item: HistoryItem}) {
  var format = require('format-number');
  let formattedAmount = format({prefix: '₦'})(props.item.amount ?? '');
  function renderIcon() {
    return <Fire fill="#fff" />;
    // switch (props.item.type) {
    //   case 'ticket':
    //     // TODO: replace with the right icon
    //     return <Fire fill="#fff" />;
    //   case 'subscription':
    //     return <Fire fill="#fff" />;
    //   // no-default
    // }
  }
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitleWrapper>
          {renderIcon()}
          <HeaderTitleContentWrapper>
            <Title>{'Subscription'}</Title>
            <DateText>{new Date(props.item.date).toDateString()}</DateText>
          </HeaderTitleContentWrapper>
        </HeaderTitleWrapper>
        <HeaderPrice>
          {format({prefix: '₦'})(props.item.amount ?? '')}
        </HeaderPrice>
      </HeaderWrapper>
    </Wrapper>
  );
}

export default BillingHistory;
