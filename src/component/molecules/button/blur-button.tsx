import * as React from 'react';
import styled from 'styled-components/native';
import TouchableRipple from 'react-native-material-ripple';
import {ms} from 'react-native-size-matters';
import {sizeScale} from '../../../utils';
import {GestureResponderEvent} from 'react-native';
import ButtonText from '../../atoms/button-text';
import Loader from '../../atoms/loader';

const Ripple = styled(TouchableRipple)`
  border-radius: 6px;
  width: 100%;
  height: ${sizeScale(ms(36, 0.25), 'px')};
`;

const ButtonContainer = styled.View<{disabled?: boolean}>`
  flex: 1;
  z-index: -1;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
  position: relative;
`;

const Text = styled(ButtonText)`
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
`;

const Spacer = styled.View`
  width: 5px;
`;

export const BlurButton = React.memo(function ({
  children,
  onPress,
  icon,
  isLoading,
  ...props
}: TouchableRipple['props'] & {icon?: React.ReactNode; isLoading?: boolean}) {
  function handleOnPress(event: GestureResponderEvent) {
    requestAnimationFrame(() => {
      onPress && onPress(event);
    });
  }

  const renderItem = React.useCallback(() => {
    if (isLoading) {
      return <Loader width={16} height={16} />;
    }

    return (
      <React.Fragment>
        {icon}
        {icon && <Spacer />}
        <Text kind="white">{children}</Text>
      </React.Fragment>
    );
  }, [icon, children, isLoading]);

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
        {renderItem()}
      </ButtonContainer>
    </Ripple>
  );
});

export default BlurButton;
