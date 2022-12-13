import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {getFontFromTheme, getColorFromTheme, sizeScale} from '../../utils';

const Wrapper = styled.View`
  height: 24px;
  width: 100%;
  align-content: center;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  text-align: center;
  color: ${getColorFromTheme('white70')};
  margin-left: 6px;
  margin-right: 6px;
`;

const Line = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  height: ${sizeScale(ms(10, 0.2), 'px')};
  border-color: ${getColorFromTheme('white10')};
`;

function Divider() {
  return (
    <Wrapper>
      <Line />
      <Text>or</Text>
      <Line />
    </Wrapper>
  );
}

export default Divider;
