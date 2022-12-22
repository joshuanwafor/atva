import * as React from 'react';
import {s} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {FlatList, View, ListRenderItemInfo} from 'react-native';
import {History, HistoryItem} from '../../../interface';
import BillingHistory from '../../organisms/billing-history';
import EmptyHistory from '../../organisms/user-lists/empty-history';
import {observer} from 'mobx-react';
import {useBillingStore} from '../../../store/data/billing';
import {transactionsManager} from 'src/store/data/transactions';

const BillingTabTemplate = styled.View`
  width: 100%;
`;

const demo_data: History[] = [];

function BillingHistories() {
  let {mySubscriptions} = useBillingStore();

  function renderItem({item}: ListRenderItemInfo<HistoryItem>) {
    return <BillingHistory item={item} />;
  }

  React.useEffect(() => {
    transactionsManager.loadUserTransactionsHistory();
  }, []);

  return (
    <BillingTabTemplate>
      <FlatList
        data={transactionsManager.transactions ?? []}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: s(20),
          paddingTop: s(15),
        }}
        removeClippedSubviews
        snapToAlignment="center"
        // keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        ListEmptyComponent={<EmptyHistory />}
      />
    </BillingTabTemplate>
  );
}

export default observer(BillingHistories);
