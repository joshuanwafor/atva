import * as React from 'react';
import styled from 'styled-components/native';
import TouchableRipple from 'react-native-material-ripple';
import {ms} from 'react-native-size-matters';
import {theme} from '../../../style/theme';
import {GestureResponderEvent} from 'react-native';
import {getColorFromTheme, sizeScale} from '../../../utils';
import ButtonText from '../../atoms/button-text';
import Apple from '../../atoms/icons/apple';
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
  border-color: ${getColorFromTheme('white')};
  border-width: 1px;
  background-color: ${getColorFromTheme('white')};
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
`;

const Spacer = styled.View`
  width: 5px;
`;

const AppleButton = React.memo(function ({
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
      return <Loader kind={LoaderKind.PINK} width={16} height={16} />;
    }

    return (
      <React.Fragment>
        <Apple fill={theme.colors.blackFull} width={14} height={14} />
        <Spacer />
        <ButtonText kind="black">Continue with apple</ButtonText>
      </React.Fragment>
    );
  }, [isLoading]);

  return (
    <Ripple
      {...props}
      rippleColor={theme.colors.brownishGrey}
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

export default AppleButton;
