import * as React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {useFocusEffect} from '@react-navigation/native';
import {ListRenderItemInfo} from 'react-native';
import EmptyArtist from '../../../organisms/user-lists/empty-artist';
import {Artist} from '../../../../interface';
import useMemoComponent from '../../../../hooks/memo';
import FlatGrid from '../../../templates/grid';
import ArtistCard from '../../../organisms/artist/artist-card';
import Loader from '../../../atoms/loader';

const LoadingWrapper = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function FavoriteArtist() {
  const [loading, setLoading] = React.useState(true);

  const GridMemo = useMemoComponent(FlatGrid);

  const [data, setData] = React.useState<Artist[]>();
  function renderItem({item}: ListRenderItemInfo<Artist>) {
    return <View />;
    // return <ArtistCard artist={item} onPress={() => {}} />;
  }

  useFocusEffect(
    React.useCallback(() => {
      setData([
        {
          id: '123456780',
          name: 'Jeremías del Pozo',
          slug: 'oluleye-12345',
          image:
            'https://res.cloudinary.com/quadzphoz/image/upload/v1594138248/astra/artist-2_cd3rsi.png',
        },
      ]);
    }, []),
  );

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const renderLoading = React.useCallback(function () {
    return (
      <LoadingWrapper>
        <Loader />
      </LoadingWrapper>
    );
  }, []);

  if (loading) {
    return renderLoading();
  }

  return (
    <GridMemo
      itemDimension={DeviceInfo.isTablet() ? 150 : 100}
      data={data}
      renderItem={renderItem}
      spacing={16}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      removeClippedSubviews
      contentContainerStyle={{
        paddingTop: 10,
        width: '100%',
      }}
      snapToAlignment="center"
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<EmptyArtist />}
    />
  );
}

export default FavoriteArtist;
