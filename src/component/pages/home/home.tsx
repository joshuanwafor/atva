import * as React from 'react';
import {StatusBar, Platform} from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';
import Header from '../../organisms/home-header/home-header';
import HomeAction from '../../organisms/home-header/home-action';
import {HomeSections} from '../../../interface';
import HomeMovies from './home-movies';
import HomeSeries from './home-series';
import HomeCinema from './home-cinema';
import HomeHome from './home-home';
import {useFavouriteListStore} from '../../../store/data/user-lists/favorites';
import {useWatchListStore} from '../../../store/data/user-lists/watchlist';

const Wrapper = styled.View`
  flex: 1;
`;

function HomeAll() {
  let favList = useFavouriteListStore();

  let watchList = useWatchListStore();

  React.useEffect(() => {
    favList.load();
    watchList.load();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent');
      }
    }, []),
  );

  const actionRef = React.useRef<Modalize>(null);
  const [activeSection, setActiveSection] = React.useState<HomeSections>(
    HomeSections.HOME,
  );
  const y = React.useRef(new Animated.Value<number>(0));

  const showActionRef = () => {
    actionRef.current?.open();
  };

  const changeHomeSection = (section: HomeSections) => {
  
    setActiveSection(section);
    actionRef.current?.close();
  };

  const renderHomeSection = function () {
    switch (activeSection) {
      case HomeSections.HOME:
        return <HomeHome  />;
      case HomeSections.CINEMA:
        return <HomeCinema  />;
      case HomeSections.MOVIES:
        return <HomeMovies />;
      case HomeSections.SERIES:
        return <HomeSeries />;
      default:
        return <HomeHome />;
    }
  };

  return (
    <Wrapper>
      <StatusBar backgroundColor="transparent" translucent />
      <Header
        activeSection={activeSection}
        y={y.current}
        showAction={showActionRef}
      />
      {renderHomeSection()}
      <HomeAction innerRef={actionRef} onChange={changeHomeSection} />
    </Wrapper>
  );
}

export default HomeAll;
