import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';
import TransparentButton from '../../molecules/button/transparent-button';
import Heart from '../../atoms/icons/heart';
import {theme} from '../../../style/theme';
import {
  ContentWrapper,
  SubTitleContent,
  TitleContent,
  Wrapper,
  IconWrapper,
} from './components';

const EmptyFavorites = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Heart fill={theme.colors.white30} width={40} height={40} />
      </IconWrapper>
      <TitleContent>You haven’t liked any movies yet</TitleContent>
      <SubTitleContent>
        TV Shows/Movies you liked would show here.
      </SubTitleContent>
      <TransparentButton>See all movies</TransparentButton>
    </Wrapper>
  );
};

export default EmptyFavorites;
