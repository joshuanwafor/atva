import * as React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {s} from 'react-native-size-matters';
import {TCrewSchema} from '../../../interface/content';
import {Artist} from '../../../interface';
import ArtistCard from '../../organisms/artist/artist-card';

function DetailsCast({items}: {items: TCrewSchema[]}) {
  const renderItem = React.useCallback(
    ({item}: ListRenderItemInfo<TCrewSchema>) => {
      return <ArtistCard artist={item} onPress={() => {}} hasSize={true} />;
    },
    [],
  );

  return (
    <FlatList
      renderItem={renderItem}
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      disableIntervalMomentum={true}
      pagingEnabled={false}
      snapToStart={true}
      snapToInterval={300}
      ItemSeparatorComponent={() => <View style={{width: 20}} />}
      keyExtractor={(item) => item.user.id}
      style={{
        marginTop: 5,
        marginBottom: 20,
      }}
      contentContainerStyle={{
        paddingHorizontal: s(12),
        alignItems: 'flex-start',
      }}
    />
  );
}

export default DetailsCast;
