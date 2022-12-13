import * as React from 'react';
import styled from 'styled-components/native';
import TouchableRipple from 'react-native-material-ripple';
import {ms} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {GestureResponderEvent} from 'react-native';
import {getColorFromTheme, sizeScale} from '../../../utils';
import ButtonText from '../../atoms/button-text';
import Loader, {LoaderKind} from '../../atoms/loader';

const Ripple = styled(TouchableRipple)`
  border-radius: 6px;
  width: 100%;
  height: ${sizeScale(ms(36, 0.25), 'px')};
`;

const ButtonContainer = styled(LinearGradient)<{disabled?: boolean}>`
  flex: 1;
  z-index: -1;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
  shadow-opacity: 1;
  shadow-radius: 4px;
  shadow-offset: 0 1px;
  shadow-color: rgba(15, 15, 15, 0.1);
  border-color: ${getColorFromTheme('pink')};
  border-width: 1px;
  background-color: ${getColorFromTheme('pink2')};
`;

export const LinearButton = React.memo(function ({
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
      return <Loader kind={LoaderKind.WHITE} width={16} height={16} />;
    }

    return <ButtonText kind="white">{children}</ButtonText>;
  }, [children, isLoading]);

  return (
    <Ripple
      {...props}
      rippleColor="rgba(255, 255, 255, 0.8)"
      accessibilityLabel="Button"
      accessibilityTraits={props.disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      rippleSequential={true}
      rippleFades={true}
      rippleContainerBorderRadius={6}
      onPress={handleOnPress}>
      <ButtonContainer
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        disabled={props.disabled}
        colors={['#e61e4d', '#e31c5f', '#d70466']}>
        {renderItem()}
      </ButtonContainer>
    </Ripple>
  );
});

export default LinearButton;
