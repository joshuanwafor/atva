import * as React from 'react';
import styled from 'styled-components/native';
import styledMap from 'styled-map';
import {ms} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';
import {theme} from '../../style/theme';

const Wrapper = styled.View`
  width: 100%;
`;

const AnalysisWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
`;

const Text = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  text-align: left;
  color: ${getColorFromTheme('pale')};
`;

const Dot = styled.View<{kind: 'blue' | 'yellow' | 'pale'}>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-right: 10px;
  background-color: ${styledMap('kind', {
    default: theme.colors.white10,
    blue: theme.colors.dodgerBlue,
    yellow: theme.colors.goldenrod,
  })};
`;

const BarWrapper = styled.View`
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 6px;
  height: 8px;
  background-color: ${getColorFromTheme('white10')};
  overflow: hidden;
`;

const UsedWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 8px;
  background-color: ${getColorFromTheme('dodgerBlue')};
  z-index: 11;
`;

const DownloadsWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 8px;
  background-color: ${getColorFromTheme('goldenrod')};
  z-index: 1;
`;

const StorageAnalysis = () => {
  return (
    <Wrapper>
      <BarWrapper>
        <UsedWrapper style={{width: '30%'}} />
        <DownloadsWrapper style={{width: '45%'}} />
      </BarWrapper>
      <AnalysisWrapper>
        <Dot kind="blue" />
        <Text style={{width: 100}}>Used</Text>
        <Text>40.0 GB</Text>
      </AnalysisWrapper>
      <AnalysisWrapper>
        <Dot kind="yellow" />
        <Text style={{width: 100}}>Downloads</Text>
        <Text>2.5 GB</Text>
      </AnalysisWrapper>
      <AnalysisWrapper>
        <Dot kind="pale" />
        <Text style={{width: 100}}>Free</Text>
        <Text>30.5 GB</Text>
      </AnalysisWrapper>
    </Wrapper>
  );
};

export default StorageAnalysis;
