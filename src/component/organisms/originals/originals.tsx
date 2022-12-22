import * as React from 'react';
import {ListRenderItemInfo, FlatList, View} from 'react-native';
import {s} from 'react-native-size-matters';
import {Wrapper} from './style';
import OriginalsCard from './originals-card';
import {MinimalContent} from '../../../interface/content';
import {shuffleArray} from '../../../utils';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParameterList} from 'src/interface';
import HomeTitle from 'src/component/molecules/home-title';

function Originals({items}: {items: MinimalContent[]}) {
  const navigation = useNavigation<NavigationProp<RootStackParameterList>>();
  const renderItem = React.useCallback(
    ({item}: ListRenderItemInfo<MinimalContent>) => {
      return (
        <OriginalsCard
          item={item}
          onPress={() => {
            navigation.navigate('Details', {
              movie: item,
              movie_id: item.id,
              isFeatured: false,
              isCinema: false,
              isTvShow: false,
              isWatching: false,
              title: item.title,
            });
          }}
        />
      );
    },
    [navigation],
  );

  return (
    <Wrapper>
      <HomeTitle title="Exclusinve on AstraTv" />
      <FlatList
        renderItem={renderItem}
        data={shuffleArray(items)}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        pagingEnabled={false}
        snapToStart={true}
        snapToInterval={180}
        disableIntervalMomentum={true}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: s(12),
          alignItems: 'stretch',
        }}
      />
    </Wrapper>
  );
}

export default Originals;
