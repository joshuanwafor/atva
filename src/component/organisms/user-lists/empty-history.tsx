import * as React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ms} from 'react-native-size-matters';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';
import TransparentButton from '../../molecules/button/transparent-button';
import {ContentWrapper, SubTitleContent, TitleContent} from './components';
const Wrapper = styled.View`
  position: relative;
  width: 100%;
  justify-content: center;
`;

const Gradient = styled(LinearGradient)`
  z-index: -1;
  border-radius: 6px;
  width: 100%;
  height: 200px;
`;

const EmptyHistory = () => {
  return (
    <Wrapper>
      <Gradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#1c1c1c', '#171717', '#141414']}
      />
      <ContentWrapper>
        <TitleContent>Nothing to see here</TitleContent>
        <SubTitleContent>
          Here you will see your transaction histories on AstraTV,
          subscriptions, ticket and all
        </SubTitleContent>
        {/* <TransparentButton>Upgrade to premium now</TransparentButton> */}
      </ContentWrapper>
    </Wrapper>
  );
};

export default EmptyHistory;
