import * as React from 'react';
import styled from 'styled-components/native';
import TouchableRipple from 'react-native-material-ripple';
import {ms} from 'react-native-size-matters';
import {getColorFromTheme, sizeScale} from '../../../utils';
import {GestureResponderEvent} from 'react-native';
import ButtonText from '../../atoms/button-text';
import Loader, {LoaderKind} from '../../atoms/loader';

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
  border-color: ${getColorFromTheme('pink')};
  border-width: 1px;
  background-color: ${getColorFromTheme('whitish')};
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
`;

export const TransparentButton = React.memo(function ({
  children,
  onPress,
  isLoading,
  ...props
}: TouchableRipple['props'] & {isLoading?: boolean}) {
  function handleOnPress(event: GestureResponderEvent) {
    requestAnimationFrame(() => {
      onPress && onPress(event);
    });
  }

  const renderItem = React.useCallback(() => {
    if (isLoading) {
      return <Loader kind={LoaderKind.PINK} width={16} height={16} />;
    }

    return <ButtonText kind="pink">{children}</ButtonText>;
  }, [children, isLoading]);

  return (
    <Ripple
      {...props}
      rippleColor="rgba(251, 167, 189, 0.5)"
      accessibilityLabel="Button"
      accessibilityTraits={props.disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      rippleSequential={true}
      rippleFades={true}
      rippleContainerBorderRadius={6}
      onPress={handleOnPress}>
      <ButtonContainer disabled={props.disabled}>
        {renderItem()}
      </ButtonContainer>
    </Ripple>
  );
});

export default TransparentButton;
