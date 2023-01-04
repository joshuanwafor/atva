import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from 'src/interface/navigation';
import React from 'react';
import {theme} from 'src/style/theme';
import styled from 'styled-components/native';
import {getFontFromTheme, getColorFromTheme} from 'src/utils';
import {searchManager, useSearchStore} from 'src/store/data/content/search';
import {observer} from 'mobx-react';

const SearchWrapper = styled.View`
  justify-content: center;
  width: 100%;
  flex: 1;
  background-color: ${getColorFromTheme('blackTwo')};
`;

const Input = styled.TextInput`
  color: #fff;
  font-family: ${getFontFromTheme('medium')};
  font-size: 14px;
  margin: 0;
  padding-left:12px;
  flex: 1;
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
`;

export const MainSearchInput = observer(function () {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [searchQ, updateSearchQ] = React.useState('');

  return (
    <SearchWrapper>
      <Input
        placeholder="Search for a show, movie, genre e.t.c"
        placeholderTextColor={theme.colors.brownishGrey}
        disableFullscreenUI={true}
        selectionColor={theme.colors.alt}
        value={searchQ}
        onChangeText={(text: any) => {
          updateSearchQ(text);
        }}
        onSubmitEditing={() => {
          // dispatch search request
          searchManager.search(searchQ);
          navigation.push('SearchResult');
        }}
      />
    </SearchWrapper>
  );
});
