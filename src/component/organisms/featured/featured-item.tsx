import * as React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {s, ms} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../../interface';
import FeaturedCard from './featured-card';
import {MinimalContent, Movie} from '../../../interface/content';

function FeaturedItem({items}: {items: MinimalContent[]}) {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onNavigateMore = React.useCallback(
    function (movie: MinimalContent) {
      navigation.navigate('Details', {
        movie: movie,
        movie_id: movie.id,
        isCinema: true,
        isFeatured: true,
        isWatching: false,
        title: movie.title,
      });
    },
    [navigation],
  );

  const renderItem = React.useCallback(
    ({item}: ListRenderItemInfo<MinimalContent>) => {
      return <FeaturedCard item={item} onPress={() => onNavigateMore(item)} />;
    },
    [onNavigateMore],
  );

  return (
    <FlatList
      renderItem={renderItem}
      data={items}
      horizontal
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      pagingEnabled={false}
      snapToStart={true}
      snapToInterval={280}
      disableIntervalMomentum={true}
      ItemSeparatorComponent={() => <View style={{width: 20}} />}
      keyExtractor={(item) => item.id}
      style={{
        marginTop: 5,
        marginBottom: 5,
      }}
      contentContainerStyle={{
        paddingHorizontal: s(12),
        alignItems: 'baseline',
        minHeight: ms(400, 0.3),
      }}
    />
  );
}

export default FeaturedItem;
