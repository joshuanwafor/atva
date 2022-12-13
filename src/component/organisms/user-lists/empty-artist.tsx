import * as React from 'react';
import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';
import Heart from '../../atoms/icons/heart';
import TransparentButton from '../../molecules/button/transparent-button';
import {theme} from '../../../style/theme';
import {
  ContentWrapper,
  SubTitleContent,
  TitleContent,
  Wrapper,
  IconWrapper,
} from './components';

const EmptyArtist = () => {
  return (
    <Wrapper>
      {/* <ContentWrapper> */}
      <IconWrapper>
        <Heart fill={theme.colors.white10} width={40} height={40} />
      </IconWrapper>
      <TitleContent>Nothing to see here</TitleContent>
      <SubTitleContent>
        Artist you followed or liked would show here
      </SubTitleContent>
      <TransparentButton>See all artists</TransparentButton>
      {/* </ContentWrapper> */}
    </Wrapper>
  );
};

export default EmptyArtist;
