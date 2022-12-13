import * as React from 'react';
import TouchableRipple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {GestureResponderEvent} from 'react-native';
import {theme} from '../../style/theme';
import {getColorFromTheme, sizeScale} from '../../utils';
import ArrowRight from '../atoms/icons/arrow-right';

const Ripple = styled(TouchableRipple)`
  border-radius: ${sizeScale(ms(50, 0.2), 'px')};
  width: ${sizeScale(ms(50, 0.2), 'px')};
  height: ${sizeScale(ms(50, 0.2), 'px')};
`;

const ButtonContainer = styled.View`
  flex: 1;
  z-index: -1;
  border-radius: ${sizeScale(ms(50, 0.2), 'px')};
  width: ${sizeScale(ms(50, 0.2), 'px')};
  height: ${sizeScale(ms(50, 0.2), 'px')};
  flex-direction: row;
  align-items: center;
  padding-top: 1px;
  justify-content: center;
  background-color: ${getColorFromTheme('white')};
`;

export function IntroButton({
  onPress,
  ...props
}: Omit<TouchableRipple['props'], 'children'>) {
  function handleOnPress(event: GestureResponderEvent) {
    requestAnimationFrame(() => {
      onPress && onPress(event);
    });
  }
  return (
    <Ripple
      {...props}
      rippleColor={theme.colors.brownishGrey}
      rippleDuration={300}
      rippleCentered={true}
      rippleSequential={true}
      rippleFades={true}
      accessibilityLabel="Button"
      accessibilityTraits={props.disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      onPress={handleOnPress}
      rippleContainerBorderRadius={25}>
      <ButtonContainer>
        <ArrowRight fill={theme.colors.black} />
      </ButtonContainer>
    </Ripple>
  );
}

export default IntroButton;
