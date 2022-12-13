import * as React from 'react';
import styled from 'styled-components/native';
import {ms, s} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';

const Title = styled.Text`
  font-family: ${getFontFromTheme('demiBold')};
  font-size: ${sizeScale(ms(18, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('white')};
  margin-right: 25px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${sizeScale(s(12), 'px')};
  padding-right: ${sizeScale(s(12), 'px')};
  margin-bottom: 5px;
`;

const Line = styled.View`
  flex: 1;
  height: 1px;
  width: 100%;
  background-color: ${getColorFromTheme('white10')};
`;

function HomeTitle({title}: {title: string}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Line />
    </Wrapper>
  );
}

export default HomeTitle;
