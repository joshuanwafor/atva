import * as React from 'react';
import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';
import TransparentButton from '../../molecules/button/transparent-button';
import {theme} from '../../../style/theme';
import Eye from '../../atoms/icons/eye';
import {
  ContentWrapper,
  SubTitleContent,
  TitleContent,
  Wrapper,
  IconWrapper,
} from './components';

const EmptyWatchlist = React.memo(function () {
  return (
    <Wrapper>
      <IconWrapper>
        <Eye fill={theme.colors.white30} width={40} height={40} />
      </IconWrapper>
      <TitleContent>You haven’t watched any movies yet</TitleContent>
      <SubTitleContent>
        Movies you've watched would show here, or you can add a movie to your
        watch list so you can watch later
      </SubTitleContent>
      <TransparentButton>View all movies</TransparentButton>
    </Wrapper>
  );
});

export default EmptyWatchlist;
