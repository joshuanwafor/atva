import * as React from 'react';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import Video from 'react-native-video';
import {Image, CardWrapper, InnerWrapper, ImageWrapper} from './style';
import {HomeScreenNavigationProp, UserItem} from '../../../interface';
import Loader from '../../atoms/loader';
import {} from '../../../interface/content';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface TProps {
  item: UserItem;
}

function UserItemCard({item}: TProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  function onNavigateMore() {
    navigation.push('Details', {
      movie_id: item.itemId,
      isCinema: false,
      isFeatured: false,
      isTvShow: false,
      isWatching: false,
      title: item.title,
    });
  }
  return (
    <TouchableOpacity onPress={onNavigateMore}>
      <View style={{paddingHorizontal: 0}}>
        <CardWrapper>
          <InnerWrapper>
            <ImageWrapper>
              <Image
                source={{
                  uri: item.image.url ?? '',
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </ImageWrapper>
          </InnerWrapper>
        </CardWrapper>
      </View>
    </TouchableOpacity>
  );
}

export default UserItemCard;
