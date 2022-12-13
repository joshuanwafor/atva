import * as React from 'react';
import styled from 'styled-components/native';
import {s, ms} from 'react-native-size-matters';
import {sizeScale} from '../../../utils';
import Loader from '../../atoms/loader';

const LoadingWrapper = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  padding-horizontal: ${sizeScale(s(12), 'px')};
  height: ${sizeScale(ms(400, 0.3), 'px')};
  position: relative;
  background-color: #141414;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;

function LoadingFeatured() {
  return (
    <LoadingWrapper>
      <Loader />
    </LoadingWrapper>
  );
}

export default LoadingFeatured;
