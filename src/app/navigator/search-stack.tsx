import * as React from 'react';
import {View, Animated} from 'react-native';
import styled from 'styled-components/native';
import {HeaderBackButton} from '@react-navigation/stack';
import {Stack} from './stack';
import ArrowLeft from '../../component/atoms/icons/arrow-left';
import {theme} from '../../style/theme';
import Details from '../../component/pages/details/details';
import SearchHome from '../../component/pages/search/search-home';
import SearchResult from '../../component/pages/search/search-result';
import Search from '../../component//atoms/icons/search';
import {getFontFromTheme} from '../../utils';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../interface';
import {TitleText} from '../../component/organisms/movie-item/style';
import {useSearchStore} from '../../store/data/content/search';
import {DetailHeaderRight} from '../../component/organisms/details-header';

const {multiply} = Animated;

const SearchWrapper = styled.View`
  justify-content: center;
  width: 100%;
  flex: 1;
`;

const Input = styled.TextInput`
  color: #fff;
  font-family: ${getFontFromTheme('medium')};
  font-size: 14px;
  margin: 0;
  flex: 1;
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
`;

function SearchStack() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [searchQ, updateSearchQ] = React.useState('');

  const {search} = useSearchStore();

  return (
    <Stack.Navigator initialRouteName="Search" screenOptions={{}}>
      <Stack.Screen
        name="Search"
        component={SearchHome}
        options={{
          headerShown: true,
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              label=""
              disabled
              truncatedLabel=""
              backImage={() => (
                <View style={{paddingLeft: 10}}>
                  <Search
                    width={22}
                    height={22}
                    fill={theme.colors.brownGrey}
                  />
                </View>
              )}
            />
          ),
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          headerShown: true,
          headerTitle: () => {
            return <TitleText style={{marginLeft: 12}}>{searchQ}</TitleText>;
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({
          headerShown: true,
          headerTransparent: true,
          title: route.params.title ?? 'No title',
          headerLeftContainerStyle: {
            zIndex: 99999,
          },
          headerRightContainerStyle: {
            zIndex: 99999,
          },
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              label=""
              truncatedLabel=""
              backImage={() => (
                <View style={{paddingLeft: 10}}>
                  <ArrowLeft width={22} height={22} fill={theme.colors.white} />
                </View>
              )}
            />
          ),
          headerRight: props => <DetailHeaderRight />,
          headerTitle: () => null,
        })}
      />
    </Stack.Navigator>
  );
}

export default observer(SearchStack);
