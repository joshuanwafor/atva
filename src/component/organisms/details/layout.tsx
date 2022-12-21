import * as React from 'react';
import {
  StatusBar,
  Platform,
  StyleProp,
  ViewStyle,
  RefreshControl,
} from 'react-native';
import styled from 'styled-components/native';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {onScrollEvent} from 'react-native-redash';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../../style/theme';
import DetailsCaption from '../../organisms/details/caption';
import {getDefaultDetailsCoverHeight, wait} from '../../../utils';
import DetailsCover from '../../organisms/details/details-cover';
import {DetailsScreenRouteProp} from '../../../interface';
import {MoLoadingFilled} from '../../molecules/loading/index';
import {FeaturedContent, Movie} from '../../../interface/content';
import {PageWrapper} from '../../molecules/background';
import {observer} from 'mobx-react';
import {useInitHook} from '../../../hooks/init';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const InnerWrapper = styled.View`
  background-color: #141414;
  padding-top: 10px;
  margin-bottom: 430px;
  margin-top: -5px;
`;

const DetailsLayout = function ({
  children,
  movieInfo,
}: {
  children: React.ReactNode;
  movieInfo: Movie | FeaturedContent | undefined;
}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const y = React.useRef(new Animated.Value<number>(0));

  const {max} = getDefaultDetailsCoverHeight(insets.top);
  const {params} = useRoute<DetailsScreenRouteProp>();

  //@ts-ignore
  const opacity = interpolate(y.current, [0, 150], [0, 1], Extrapolate.CLAMP);

  const [refereshing, setRefreshing] = React.useState(false);

  const {loadAppEnv} = useInitHook();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadAppEnv();
    wait(1000).then(() => {
      setRefreshing(false);
    });
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent');
      }
    }, [navigation, opacity]),
  );

  const renderLoading = React.useCallback(function () {
    return <MoLoadingFilled />;
  }, []);

  const renderItem = React.useCallback(() => {
    if (movieInfo == undefined) {
      return renderLoading();
    }
    return <InnerWrapper>{children}</InnerWrapper>;
  }, [renderLoading, children, movieInfo]);

  return (
    <PageWrapper>
      <StatusBar backgroundColor="transparent" translucent />

      <DetailsCover
        y={y.current}
        cover={
          movieInfo?.thumbnail_vertical?.url ??
          movieInfo?.banner?.url ??
          movieInfo?.thumbnail_horizontal?.url ??
          ''
        }
      />

      <Animated.ScrollView
        refreshControl={
          <RefreshControl refreshing={refereshing} onRefresh={onRefresh} />
        }
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
        directionalLockEnabled={true}
        style={{
          width: '100%',
          flex: 1,
          paddingTop: max - 200,
        }}
        onScroll={onScrollEvent({y: y.current})}
        endFillColor={theme.colors.black}>
        <DetailsCaption
          caption={movieInfo}
          // isWatching={params.isWatching}
          isWatching={false}
          y={y.current}
          isCinema={params.isCinema}
        />
        {renderItem()}
      </Animated.ScrollView>
    </PageWrapper>
  );
};

export default observer(DetailsLayout);
