import * as React from 'react';
import styled from 'styled-components/native';
import TouchableRipple from 'react-native-material-ripple';
import {ms} from 'react-native-size-matters';
import {sizeScale} from '../../../utils';
import {GestureResponderEvent} from 'react-native';
import ButtonText from '../../atoms/button-text';
import AngleArrowDown from '../../atoms/icons/angle-arrow-down';

const Ripple = styled(TouchableRipple)`
  border-radius: 6px;
  height: ${sizeScale(ms(36, 0.25), 'px')};
`;

const ButtonContainer = styled.View<{disabled?: boolean}>`
  flex: 1;
  z-index: -1;
  border-radius: 6px;
  padding-horizontal: ${sizeScale(ms(12, 0.2), 'px')};
  padding-vertical: ${sizeScale(ms(10, 0.2), 'px')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
  position: relative;
`;

const Text = styled(ButtonText)`
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
`;

const Spacer = styled.View`
  width: 5px;
`;

export const HeaderButton = React.memo(function ({
  children,
  onPress,
  ...props
}: TouchableRipple['props']) {
  function handleOnPress(event: GestureResponderEvent) {
    requestAnimationFrame(() => {
      onPress && onPress(event);
    });
  }

  return (
    <Ripple
      {...props}
      rippleColor="rgba(255, 255, 255, 0.7)"
      accessibilityLabel="Button"
      rippleSequential={true}
      rippleFades={true}
      rippleContainerBorderRadius={6}
      accessibilityTraits={props.disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      onPress={handleOnPress}>
      <ButtonContainer disabled={props.disabled}>
        <Text kind="white">{children}</Text>
        <Spacer />
        <AngleArrowDown fill="#fff" width={12} height={12} />
      </ButtonContainer>
    </Ripple>
  );
});

export default HeaderButton;
