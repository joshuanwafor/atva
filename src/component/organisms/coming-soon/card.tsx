import React from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {WhiteButton} from '../../molecules/button/white-button';
import {LinearButton} from '../../molecules/button/linear-button';
import {BlurButton} from '../../molecules/button/blur-button';
import MovieTags from '../../../component/molecules/tags';
import {ATitle, SParagraph} from '../../../component/atoms/typography';
import {ScrollView} from 'react-native-gesture-handler';
import {MinimalContent} from '../../../interface/content';
import {MoImage} from '../../../component/molecules/image/image';
import FastImage from 'react-native-fast-image';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParameterList} from '../../../interface';
import {ComingSoonContentsEntity} from '@interface/auth-data-interface';
import {Modalize} from 'react-native-modalize';
import BuyTicketAction from './buy-ticket';
import {X} from 'phosphor-react-native';
export const SOComingSoonCard: React.FC<{item: ComingSoonContentsEntity}> = ({
  item,
}) => {
  const [showPreview, setShowPreview] = React.useState(false);
  const actionRef = React.useRef<Modalize>(null);

  const showActionRef = () => {
    actionRef.current?.open();
  };

  const openPreview = () => {
    setShowPreview(true);
  };

  let _navigation = useNavigation<NavigationProp<RootStackParameterList>>();

  function buyTicket() {
    // navigation.navigate('Details', {
    //   movie: item,
    //   isCinema: false,
    //   isWatching: false,
    //   isFeatured: false,
    //   isTvShow: false,
    // });
  }
  let imageURL =
    item?.thumbnail_vertical?.url ?? item?.thumbnail_horizontal?.url;

  return (
    <React.Fragment>
      <BuyTicketAction
        contentId={item.id}
        tickets={item.premieres ?? []}
        innerRef={actionRef}
        onChange={() => {
          actionRef.current?.close();
        }}
      />
      <ScrollView>
        <View style={{height: StatusBar.currentHeight}} />
        <View
          style={{
            marginLeft: 25,
            marginRight: 25,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <SParagraph style={{color: 'gray', fontSize: 12}}>
              Coming Jan, 2022
            </SParagraph>
            <SParagraph style={{color: 'gray', fontSize: 12}}>
              Staring:{' '}
              <SParagraph style={{fontSize: 12, color: 'white'}}>
                ...
              </SParagraph>
            </SParagraph>
          </View>
          <View style={{height: 8}} />
          <View
            style={{
              backgroundColor: 'transparent',
              borderRadius: 5,
              aspectRatio: 1 / 1.3,
            }}>
            <TouchableOpacity onPress={openPreview}>
              <MoImage
                source={{
                  uri:
                    imageURL ??
                    'https://i.pinimg.com/originals/69/e6/eb/69e6eb26edf3cd345d285c539715c930.jpg',
                  priority: FastImage.priority.low,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </TouchableOpacity>
          </View>
          <View style={{height: 16}} />
          <ATitle>{item?.title}</ATitle>
          <SParagraph style={{color: 'gray'}}>{item?.excerpt}</SParagraph>
          <View style={{height: 8}} />
          <MovieTags tags={['Action', 'Film', '2020']} type="light" />
          <View style={{height: 8}} />
          <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <WhiteButton style={{flex: 1}} onPress={buyTicket} disabled>
              Info
            </WhiteButton>
            <View style={{width: 8}} />
            <BlurButton style={{flex: 1}} disabled>
              Notify me
            </BlurButton>
          </View>
          <View style={{height: 8}} />
          <LinearButton
            onPress={() => {
              showActionRef();
            }}>
            Buy ticket
          </LinearButton>
        </View>
        {/* Coming soon item preview */}
        <Modal visible={showPreview} transparent>
          <View style={{flex: 1, backgroundColor: 'transparent'}}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.8)'}}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 100,
                  }}
                />
                <FastImage
                  source={{
                    uri:
                      item?.thumbnail_horizontal?.url ??
                      'https://i.pinimg.com/originals/69/e6/eb/69e6eb26edf3cd345d285c539715c930.jpg',
                    priority: FastImage.priority.low,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                  style={{
                    height: Dimensions.get('screen').width / 1.3,
                    width: Dimensions.get('screen').width,
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setShowPreview(false);
                }}
                style={{alignItems: 'center', padding: 24}}>
                <X size={42} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </React.Fragment>
  );
};
