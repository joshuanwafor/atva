import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';
import {theme} from '../../style/theme';
import Network from '../atoms/icons/network';

const Wrapper = styled.View`
  background-color: ${getColorFromTheme('blackThree')};
  width: ${sizeScale(ms(150, 0.3), 'px')};
  height: ${sizeScale(ms(150, 0.3), 'px')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 6px;
`;

const InnerWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text<{active: boolean}>`
  color: ${({active}) =>
    active ? theme.colors.pale : theme.colors.brownishGrey};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  text-align: center;
  margin-top: 10px;
`;

const State = styled.Text<{active: boolean}>`
  color: ${({active}) =>
    active ? theme.colors.alt : theme.colors.brownishGrey};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(11, 0.2), 'px')};
  margin-left: 5px;
`;

const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const StateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface TProps {
  title: string;
  icon: React.ReactChild;
  active: boolean;
}

function Device({title, icon, active}: TProps) {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <InnerWrapper>
        <Title active={active}>{title}</Title>
        <StateWrapper>
          <Network
            fill={active ? theme.colors.alt : theme.colors.brownishGrey}
            width={10}
            height={10}
          />
          <State active={active}>{active ? 'active' : 'inactive'}</State>
        </StateWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export default Device;
