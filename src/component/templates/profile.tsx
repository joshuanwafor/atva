import * as React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import Orientation from 'react-native-orientation-locker';
import {RefreshControl, SafeAreaView, StatusBar} from 'react-native';
import {TChildProps} from '../../interface';
import {theme} from '../../style/theme';
import {sizeScale, getColorFromTheme, wait} from '../../utils';
import {useInitHook} from '../../hooks/init';

const Wrapper = styled.View`
  width: 100%;
  padding-top: ${sizeScale(ms(12), 'px')};
`;

const Background = styled(SafeAreaView)`
  background: ${getColorFromTheme('black')};
`;

function ProfileTemplate({children}: TChildProps) {
  const [refereshing, setRefreshing] = React.useState(false);

  let {loadAppEnv} = useInitHook();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadAppEnv();
    wait(1000).then(() => {
      setRefreshing(false);
    });
  }, []);

  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <Background edges={['top']}>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.black}
        animated={true}
        showHideTransition="slide"
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refereshing} onRefresh={onRefresh} />
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        snapToAlignment="center">
        <Wrapper>{children}</Wrapper>
      </ScrollView>
    </Background>
  );
}

export default ProfileTemplate;
