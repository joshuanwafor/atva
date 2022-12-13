import styled from 'styled-components/native';
import React from 'react';
import Loader from '../../atoms/loader';

const LoadingWrapper = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  background-color: #141414;
`;

export const MoLoadingFilled = function () {
  return (
    <LoadingWrapper>
      <Loader />
    </LoadingWrapper>
  );
};
