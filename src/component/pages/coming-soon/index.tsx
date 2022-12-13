import React from 'react';
import {SafeAreaView, View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {SOComingSoonCard} from '../../organisms/coming-soon/card';
import {useContent} from '../../../hooks/content';
import {MinimalContent} from '../../../interface/content';
import {MoLoadingFilled} from '../../../component/molecules/loading';
import {ComingSoonContentsEntity} from '../../../interface/auth-data-interface';
import {userAuthStore} from '../../../store/data/user-auth';
import {observer} from 'mobx-react';

const Screen: React.FC<{}> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let carousel: Carousel<any> | any;
  let movieItems = useContent();
  let coming_soon_contents =
    userAuthStore.data.content?.coming_soon_contents ?? [];

  function renderItem({item}: {item: ComingSoonContentsEntity}) {
    console.log(item);
    return <SOComingSoonCard item={item} />;
  }

  console.log(coming_soon_contents, {});
  return (
    <View style={{flex: 1, backgroundColor: '', paddingTop: 12}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        {movieItems.content.loading == true && <MoLoadingFilled />}
        {movieItems.content.loading == false && (
          <Carousel
            layout={'default'}
            ref={(ref) => {
              carousel = ref;
            }}
            data={coming_soon_contents.map((v) => v)}
            sliderWidth={20}
            itemWidth={Dimensions.get('window').width}
            renderItem={renderItem}
            // onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
        )}
      </View>
    </View>
  );
};

export default observer(Screen);
