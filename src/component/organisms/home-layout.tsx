import * as React from 'react';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {onScrollEvent} from 'react-native-redash';
import {theme} from '../../style/theme';
import HomeCover from '../organisms/home-caption/home-cover';
import {getDefaultCoverHeight, wait} from '../../utils';
import HomeCaption from '../organisms/home-caption/home-caption';
import {MinimalContent} from '../../interface/content';
import {MoLoadingFilled} from '../molecules/loading/index';
import {useInitHook} from '../../hooks/init';
import {RefreshControl} from 'react-native';

const Wrapper = styled.View`
  flex: 1;
  height: 100%;
`;

const InnerWrapper = styled.View`
  background-color: #141414;
  padding-top: 20px;
  margin-bottom: 400px;
  margin-top: -5px;
`;

const HomeLayout = function ({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption: MinimalContent | undefined;
}) {
  const {max} = getDefaultCoverHeight(20);

  const [refereshing, setRefreshing] = React.useState(false);

  let {loadAppEnv} = useInitHook();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadAppEnv();
    wait(1000)
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        console.log('Error loading content');
        setRefreshing(false);
      });
  }, []);

  const render = React.useCallback(
    function () {
      if (caption != undefined || caption == null) {
        let coverPhoto = '';
        if (caption?.banner != null || caption?.banner != undefined) {
          coverPhoto = caption?.banner?.url ?? '';
        }

        if (
          caption?.thumbnail_vertical != null ||
          caption?.thumbnail_vertical != undefined
        ) {
          coverPhoto = caption?.thumbnail_vertical.url ?? '';
        }
        return (
          <Wrapper>
            <HomeCover cover={coverPhoto} />
            <Animated.ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refereshing}
                  onRefresh={onRefresh}
                />
              }
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              directionalLockEnabled={true}
              style={{
                width: '100%',
                flex: 1,
                paddingTop: max - 200,
              }}
              endFillColor={theme.colors.black}>
              {caption == undefined ? undefined : (
                <HomeCaption caption={caption} />
              )}
              <InnerWrapper>{children}</InnerWrapper>
            </Animated.ScrollView>
          </Wrapper>
        );
      }

      return <MoLoadingFilled />;
    },
    [caption, children, max],
  );

  return render();
};

export default HomeLayout;
