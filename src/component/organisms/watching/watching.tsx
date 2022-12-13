import * as React from 'react';
import {ListRenderItemInfo, FlatList, View} from 'react-native';
import {s} from 'react-native-size-matters';
import {Watching} from '../../../interface';
import WatchingCard from './watching-card';

function WatchingList() {
  function renderItem({item}: ListRenderItemInfo<Watching>) {
    return <WatchingCard item={item} onPress={() => {}} />;
  }

  const [data] = React.useState<Watching[]>([
    {
      id: '5',
      title: 'Blood and Water',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138300/astra/watching-card-5_m2w4mn.png',
      time: '10m',
    },
    {
      id: '1',
      title: 'The Mummy',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138301/astra/watching-card-1_tbo7kk.png',
      time: '10m',
    },
    {
      id: '2',
      title: 'The Bridges',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138291/astra/watching-card-2_mouyuh.png',
      time: '1hr10m',
    },
    {
      id: '3',
      title: 'Isoken',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138316/astra/watching-card-3_wkrnmn.png',
      time: '45m',
    },
    {
      id: '4',
      title: 'IO',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138312/astra/watching-card-4_hqbrmr.png',
      time: '45m',
    },
    {
      id: '6',
      title: 'Blood and Water',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138300/astra/watching-card-5_m2w4mn.png',
      time: '10m',
    },
    {
      id: '8',
      title: 'The Bridges',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138291/astra/watching-card-2_mouyuh.png',
      time: '1hr10m',
    },
    {
      id: '7',
      title: 'The Mummy',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138301/astra/watching-card-1_tbo7kk.png',
      time: '10m',
    },
    {
      id: '9',
      title: 'Isoken',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138316/astra/watching-card-3_wkrnmn.png',
      time: '45m',
    },
    {
      id: '10',
      title: 'IO',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138312/astra/watching-card-4_hqbrmr.png',
      time: '45m',
    },
    {
      id: '11',
      title: 'IO',
      image:
        'https://res.cloudinary.com/quadzphoz/image/upload/v1594138312/astra/watching-card-4_hqbrmr.png',
      time: '45m',
    },
  ]);

  return (
    <FlatList
      renderItem={renderItem}
      data={data}
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
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      keyExtractor={(item) => item.id}
      style={{
        marginTop: 5,
        marginBottom: 20,
      }}
      contentContainerStyle={{paddingHorizontal: s(12)}}
    />
  );
}

export default WatchingList;
