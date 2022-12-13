import {HeaderBackButton} from '@react-navigation/stack';
import React from 'react';
import {View, Platform} from 'react-native';
import Rate from '../../atoms/icons/rate';
import {theme} from '../../../style/theme';
import Share from '../../atoms/icons/share';
import {observer} from 'mobx-react';
import {useRoute} from '@react-navigation/native';
import {DetailsScreenRouteProp} from '../../../interface';
import {useFavouriteList} from '../../../hooks/content/user-list';

export const DetailHeaderRight = observer(() => {
  const {params} = useRoute<DetailsScreenRouteProp>();
  const {store, content} = useFavouriteList();

  return (
    <React.Fragment>
      <View
        style={{
          flexDirection: 'row',
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <HeaderBackButton
          // {...props}
          labelVisible={false}
          onPress={() => {}}
          pressColorAndroid={theme.colors.white10}
          backImage={() => (
            <View
              style={{
                paddingVertical: 6,
                paddingHorizontal: Platform.select({ios: 6, default: 0}),
              }}>
              <Share fill={theme.colors.white} />
            </View>
          )}
        />
        <HeaderBackButton
          // {...props}
          labelVisible={false}
          onPress={() => {}}
          pressColorAndroid={theme.colors.white10}
          backImage={() => (
            <View
              style={{
                paddingVertical: 6,
                paddingHorizontal: Platform.select({ios: 6, default: 0}),
              }}>
              <Rate
                fill={theme.colors.white}
                onPress={() => {
                  // add item to watch list
                  store.add(params.movie_id, params.title ?? '');
                }}
              />
            </View>
          )}
        />
      </View>
    </React.Fragment>
  );
});
