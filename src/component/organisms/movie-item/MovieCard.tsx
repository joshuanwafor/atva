import * as React from 'react';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import Video from 'react-native-video';
import {
  Image,
  CardWrapper,
  InnerWrapper,
  ImageWrapper,
  ActionsWrapper,
  LogoWrapper,
  FooterWrapper,
  ControlWrapper,
} from './style';
import {HomeScreenNavigationProp, UserItem} from '../../../interface';
import IconButton from '../../molecules/button/icon-button';
import Info from '../../atoms/icons/info';
import {MinimalContent, Movie} from '../../../interface/content';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WatchlistActionButtonVert} from '../watchlist-button';
import {AppTypographySB} from 'src/component/atoms/typographyv2';
import {Box} from 'native-base';

interface TProps {
  item: MinimalContent;
}

function MovieCard({item}: TProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  function onNavigateMore() {
    navigation.push('Details', {
      movie: item,
      movie_id: item.id,
      isCinema: false,
      isFeatured: false,
      isTvShow: false,
      isWatching: false,
      title: item.title,
    });
  }
  return (
    <Box
      style={{aspectRatio: 1 / 1.3, width: '100%'}}
      rounded="md"
      overflow={'hidden'}>
      <FastImage
        style={{width: '100%', height: '100%'}}
        source={{
          uri: item.thumbnail_vertical?.url ?? '',
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </Box>
  );
}

export default MovieCard;
