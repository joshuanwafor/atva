import * as React from 'react';
import styled from 'styled-components/native';
import TouchableRipple from 'react-native-material-ripple';
import {ms} from 'react-native-size-matters';
import {getColorFromTheme, sizeScale} from '../../../utils';
import {GestureResponderEvent} from 'react-native';
import ButtonText from '../../atoms/button-text';
import Google from '../../atoms/icons/google';
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
  border-color: ${getColorFromTheme('googleBlue')};
  border-width: 1px;
  flex-direction: row;
  shadow-opacity: 1;
  shadow-radius: 4px;
  shadow-offset: 0 1px;
  shadow-color: rgba(15, 15, 15, 0.1);
  align-items: center;
  justify-content: center;
  background-color: ${getColorFromTheme('googleBlue')};
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
`;

const Spacer = styled.View`
  width: 5px;
`;

const GoogleButton = React.memo(function ({
  onPress,
  isLoading,
  ...props
}: Omit<TouchableRipple['props'], 'children'> & {isLoading?: boolean}) {
  function handleOnPress(event: GestureResponderEvent) {
    requestAnimationFrame(() => {
      onPress && onPress(event);
    });
  }

  const renderItem = React.useCallback(() => {
    if (isLoading) {
      return <Loader kind={LoaderKind.WHITE} width={16} height={16} />;
    }

    return (
      <React.Fragment>
        <Google fill="#fff" width={12} height={12} />
        <Spacer />
        <ButtonText kind="white">Continue with google</ButtonText>
      </React.Fragment>
    );
  }, [isLoading]);

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
      <ButtonContainer disabled={props.disabled}>
        {renderItem()}
      </ButtonContainer>
    </Ripple>
  );
});

export default GoogleButton;
