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
  ControlItemWrapper,
  TitleText,
  LoaderWrapper,
} from './style';
import {HomeScreenNavigationProp, UserItem} from '../../../interface';
import IconButton from '../../molecules/button/icon-button';
import Plus from '../../atoms/icons/plus';
import Info from '../../atoms/icons/info';
import Loader from '../../atoms/loader';
import {MinimalContent, Movie} from '../../../interface/content';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WatchlistActionButtonVert} from '../watchlist-button';

interface TProps {
  item: MinimalContent;
}

function MovieItem({item}: TProps) {
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
    <View style={{paddingHorizontal: 12}}>
      <CardWrapper>
        <InnerWrapper>
          <ImageWrapper>
            <Image
              source={{
                uri: item.thumbnail_horizontal?.url ?? '',
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </ImageWrapper>
          <ControlWrapper>
            <View style={{height: '100%', width: '100%'}}>
              <TouchableOpacity
                onPress={onNavigateMore}
                style={{height: '100%', width: '100%'}}></TouchableOpacity>
            </View>
          </ControlWrapper>
        </InnerWrapper>
        <FooterWrapper>
          <View style={{width: '50%'}}>
            <LogoWrapper>
              {/* {item.banner?.source && (
            <FastImage
              source={{
                uri: item.thumbnail_vertical?.url,
                priority: FastImage.priority.high,
              }}
              style={
                {
                  // height: item.title_img.height,
                  // width: item.title_img.width,
                }
              }
              resizeMode={FastImage.resizeMode.contain}
            />
          )}
          {!item.logo?.url && <Title>{item.title}</Title>} */}
              <TitleText>{item.title}</TitleText>
            </LogoWrapper>
          </View>
          <ActionsWrapper>
            <WatchlistActionButtonVert movie={item} />
            <IconButton
              icon={<Info fill="#fff" width={16} height={16} />}
              onPress={onNavigateMore}>
              Learn more
            </IconButton>
          </ActionsWrapper>
        </FooterWrapper>
      </CardWrapper>
    </View>
  );
}

export default MovieItem;
