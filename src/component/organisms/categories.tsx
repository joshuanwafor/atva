import * as React from 'react';
import {ListRenderItemInfo, FlatList, View} from 'react-native';
import {s} from 'react-native-size-matters';
import {Category} from '../../interface';
import CategoryItem from './category';

function CategoryList({
  items,
  onPress,
}: {
  items: Category[];
  onPress: (item: Category) => void;
}) {
  function renderItem({item}: ListRenderItemInfo<Category>) {
    return <CategoryItem item={item} onPress={onPress} />;
  }

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
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      keyExtractor={(item) => item.id}
      style={{
        marginTop: 10,
        marginBottom: 5,
        height: 35,
      }}
      contentContainerStyle={{paddingHorizontal: s(12)}}
    />
  );
}

export default CategoryList;
