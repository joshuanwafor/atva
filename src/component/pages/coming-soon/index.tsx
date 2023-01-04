import React from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import {SOComingSoonCard} from '../../organisms/coming-soon/card';
import {useContent} from '../../../hooks/content';
import {MinimalContent} from '../../../interface/content';
import {MoLoadingFilled} from '../../../component/molecules/loading';
import {ComingSoonContentsEntity} from '../../../interface/auth-data-interface';
import {userAuthStore} from '../../../store/data/user-auth';
import {observer} from 'mobx-react';
import {Box, Center, VStack} from 'native-base';
import {
  EmptyCinemaList,
  EmptyComingSoonList,
} from 'src/component/organisms/nocontent/empty-list';

const ComingSoonScreen: React.FC<{}> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let carousel: Carousel<any> | any;
  let movieItems = useContent();
  let coming_soon_contents =
    userAuthStore.data.content?.coming_soon_contents ?? [];

  function renderItem({item}: {item: ComingSoonContentsEntity}) {
    console.log(item);
    return <SOComingSoonCard item={item} />;
  }

  if (movieItems.content.loading == false && coming_soon_contents.length == 0) {
    return (
      <VStack
        flex={1}
        w="100%"
        alignContent={'center'}
        alignItems="center"
        justifyContent={'center'}>
        <EmptyComingSoonList />
      </VStack>
    );
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '', paddingTop: 12}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        {movieItems.content.loading == true && <MoLoadingFilled />}
        {movieItems.content.loading == false && (
          <Carousel
            layout={'default'}
            ref={ref => {
              carousel = ref;
            }}
            data={coming_soon_contents.map(v => v)}
            sliderWidth={20}
            itemWidth={Dimensions.get('window').width}
            renderItem={renderItem}
            // onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default observer(ComingSoonScreen);
