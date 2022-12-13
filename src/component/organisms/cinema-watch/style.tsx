import React from 'react';
import styled from 'styled-components/native';
import {getColorFromTheme, getFontFromTheme} from '../../../utils';

const LabelBold = styled.Text`
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
  font-weight: 500;
  font-size: 12;
  font-family: ${getFontFromTheme('demiBold')};
  color: ${getColorFromTheme('white')};
`;
const Label = styled.Text`
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
  font-weight: 500;
  font-size: 12;
  font-family: ${getFontFromTheme('medium')};
  color: ${getColorFromTheme('white70')};
`;

export const HStackSpaceAround = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 12px 0px;
`;

export const TextTag: React.FC<{label: string; value: string}> = ({
  label,
  value,
}) => {
  return (
    <LabelBold>
      {value} <Label>{label}</Label>
    </LabelBold>
  );
};
