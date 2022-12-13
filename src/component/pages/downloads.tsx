import * as React from 'react';
import {s} from 'react-native-size-matters';
import {View, FlatList, ListRenderItemInfo} from 'react-native';
import DownloadsTemplate from '../templates/downloads';
import {DownloadList} from '../../interface';
import EmptyDownloads from '../organisms/user-lists/empty-downloads';
import DownloadListCard from '../organisms/download/download-card';

function Downloads() {
  const [data, setData] = React.useState<DownloadList[]>([]);
  function renderItem({item}: ListRenderItemInfo<DownloadList>) {
    return (
      <DownloadListCard onSwipe={() => {}} item={item} onPress={() => {}} />
    );
  }

  React.useEffect(() => {
    setData([
      {
        id: '1234578',
        title: 'Zero Hour',
        image:
          'https://lailasnews.com/wp-content/uploads/2018/07/SEVEN-AND-A-HALF-DATES-POSTER.jpg?width=1200&enable=upscale',
        tags: ['18+', '45m'],
        isSeasonal: false,
        progress: 0,
        download: {
          status: 'progress',
          size: 419430400,
          downloaded: 450764,
        },
      },
    ]);
  }, []);

  return (
    <DownloadsTemplate>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        contentContainerStyle={{
          paddingTop: s(15),
        }}
        style={{
          flex: 1,
        }}
        removeClippedSubviews
        snapToAlignment="center"
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListEmptyComponent={<EmptyDownloads />}
      />
    </DownloadsTemplate>
  );
}

export default Downloads;
