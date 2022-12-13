import React from 'react';
import {View, TouchableOpacity, Modal, Dimensions} from 'react-native';

import {MinimalContent} from '../../../interface/content';

import FastImage from 'react-native-fast-image';

import Ionicons from 'react-native-vector-icons/Ionicons';
export const SOComingSoonCard: React.FC<{item: MinimalContent}> = ({item}) => {
  const [showPreview, setShowPreview] = React.useState(false);

  return (
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
                  item?.thumbnail_horizontal?.medium ??
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
          <View style={{alignItems: 'center', padding: 24}}>
            <Ionicons
              name="close-outline"
              size={42}
              color="white"
              onPress={() => {
                setShowPreview(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
