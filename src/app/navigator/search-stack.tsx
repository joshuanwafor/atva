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
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.blackTwo,
          borderColor: theme.colors.blackTwo,
          shadowColor: theme.colors.blackTwo,
          elevation: 0,
          height:  50,
        },
        headerTitle: () => (
          <SearchWrapper>
            <Input
              placeholder="Search for a show, movie, genre e.t.c"
              placeholderTextColor={theme.colors.brownishGrey}
              disableFullscreenUI={true}
              selectionColor={theme.colors.alt}
              value={searchQ}
              onChangeText={(text:any) => {
                updateSearchQ(text);
              }}
              onSubmitEditing={() => {
                // dispatch search request
                search(searchQ);
                navigation.push('SearchResult');
              }}
            />
          </SearchWrapper>
        ),
        headerTitleContainerStyle: {
          margin: 0,
          padding: 0,
          left: 45 +20,
          right: 45 + 20,
        },
        headerTitleAlign: 'left',
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            label=""
            truncatedLabel=""
            backImage={() => (
              <View style={{paddingLeft: 10}}>
                <ArrowLeft
                  width={22}
                  height={22}
                  fill={theme.colors.brownGrey}
                />
              </View>
            )}
          />
        ),
        cardStyleInterpolator: ({
          current,
          next,
          inverted,
          layouts: {screen},
        }) => {
          const translateFocused = multiply(
            current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [screen.width, 0],
              extrapolate: 'clamp',
            }),
            inverted,
          );

          const translateUnfocused = next
            ? multiply(
                next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, screen.width * -0.3],
                  extrapolate: 'clamp',
                }),
                inverted,
              )
            : 0;

          const overlayOpacity = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.07],
            extrapolate: 'clamp',
          });

          const shadowOpacity = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.3],
            extrapolate: 'clamp',
          });

          return {
            cardStyle: {
              transform: [
                // Translation for the animation of the current card
                {translateX: translateFocused},
                // Translation for the animation of the card on top of this
                {translateX: translateUnfocused},
              ],
            },
            overlayStyle: {opacity: overlayOpacity},
            shadowStyle: {shadowOpacity},
          };
        },
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: {
            animation: 'spring',
            config: {
              stiffness: 1000,
              damping: 500,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 10,
              restSpeedThreshold: 10,
            },
          },
          close: {
            animation: 'spring',
            config: {
              stiffness: 1000,
              damping: 500,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 10,
              restSpeedThreshold: 10,
            },
          },
        },
      }}>
      <Stack.Screen
        name="Search"
        component={SearchHome}
        options={{
          headerShown: true,
          headerLeft: (props) => (
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
          headerLeft: (props) => (
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
          headerRight: (props) => <DetailHeaderRight />,
          headerTitle: () => null,
        })}
      />
    </Stack.Navigator>
  );
}

export default observer(SearchStack);
