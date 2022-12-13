import * as React from 'react';
import styled from 'styled-components/native';
import TouchableRipple from 'react-native-material-ripple';
import {ms} from 'react-native-size-matters';
import {sizeScale} from '../../../utils';
import {GestureResponderEvent} from 'react-native';
import ButtonText from '../../atoms/button-text';

const Ripple = styled(TouchableRipple)`
  border-radius: 6px;
  width: ${sizeScale(ms(90, 0.2), 'px')};
`;

const ButtonContainer = styled.View<{disabled?: boolean}>`
  flex: 1;
  z-index: -1;
  border-radius: 6px;
  width: ${sizeScale(ms(90, 0.2), 'px')};
  padding-vertical: 8px;
  padding-horizontal: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
  position: relative;
`;

const Text = styled(ButtonText)`
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
`;

const Spacer = styled.View`
  height: 5px;
`;

export const IconButton = React.memo(function ({
  children,
  onPress,
  icon,
  ...props
}: TouchableRipple['props'] & {icon: React.ReactNode}) {
  function handleOnPress(event: GestureResponderEvent) {
    requestAnimationFrame(() => {
      onPress && onPress(event);
    });
  }

  return (
    <Ripple
      {...props}
      rippleColor="rgba(255, 255, 255, 0.5)"
      accessibilityLabel="Button"
      rippleSequential={true}
      rippleFades={true}
      rippleContainerBorderRadius={6}
      accessibilityTraits={props.disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      onPress={handleOnPress}>
      <ButtonContainer disabled={props.disabled}>
        {icon}
        <Spacer />
        <Text kind="white" style={{fontSize: 12}}>
          {children}
        </Text>
      </ButtonContainer>
    </Ripple>
  );
});

export default IconButton;
