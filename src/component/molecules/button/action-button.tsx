import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import styledMap from 'styled-map';

import {sizeScale} from '../../../utils';
import {theme} from '../../../style/theme';
import {ButtonKind, TouchableProps} from '../../../interface';
import ButtonTextSmall from '../../atoms/button-text-small';
import TouchableItem from '../touchable-item';

const Wrapper = styled.View`
  justify-content: flex-start;
  flex-direction: row;
`;

const ButtonContainer = styled.View<{disabled?: boolean; kind?: ButtonKind}>`
  border-radius: 6px;
  padding-horizontal: ${sizeScale(ms(12, 0.2), 'px')};
  padding-vertical: ${sizeScale(ms(6, 0.2), 'px')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${styledMap('kind', {
    white: theme.colors.white10,
    black: theme.colors.blackFull,
    pink: theme.colors.pink,
    red: theme.colors.grapefruit,
    default: theme.colors.white10,
  })};
  border-width: 1px;
  background-color: transparent;
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
`;

export const SMoActionButton = React.memo(function ({
  children,
  kind,
  onPress,
  ...props
}: TouchableProps & {kind?: ButtonKind}) {
  function handleOnPress() {
    requestAnimationFrame(() => {
      onPress && onPress();
    });
  }

  return (
    <Wrapper>
      <TouchableItem
        {...props}
        accessibilityLabel="Button"
        accessibilityTraits={props.disabled ? ['button', 'disabled'] : 'button'}
        accessibilityComponentType="button"
        onPress={handleOnPress}
        accessibilityRole="button">
        <ButtonContainer kind={kind} disabled={props.disabled}>
          <ButtonTextSmall kind={kind}>{children}</ButtonTextSmall>
        </ButtonContainer>
      </TouchableItem>
    </Wrapper>
  );
});

export default SMoActionButton;
