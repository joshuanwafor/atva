import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';
import TransparentButton from '../../molecules/button/transparent-button';
import {theme} from '../../../style/theme';
import DownloadCloud from '../../atoms/icons/download-cloud';
import {
  ContentWrapper,
  SubTitleContent,
  TitleContent,
  Wrapper,
  IconWrapper,
} from './components';

const EmptyDownloads = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <IconWrapper>
          <DownloadCloud fill={theme.colors.white10} width={40} height={40} />
        </IconWrapper>
        <TitleContent>Nothing to see here</TitleContent>
        <SubTitleContent>
          Movies you download would show here and available to watch offline.
        </SubTitleContent>
        <TransparentButton>Find something to download</TransparentButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default EmptyDownloads;
