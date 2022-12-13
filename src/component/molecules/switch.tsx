import * as React from 'react';
import {Switch as NativeSwitch} from 'react-native';
import {theme} from '../../style/theme';

interface TProps extends React.ComponentPropsWithRef<typeof NativeSwitch> {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
}

const Switch = React.memo(function ({
  value,
  disabled,
  onValueChange,
  ...rest
}: TProps) {
  function handleValueChange(v: boolean) {
    requestAnimationFrame(() => {
      onValueChange && onValueChange(v);
    });
  }
  return (
    <NativeSwitch
      value={value}
      disabled={disabled}
      onValueChange={handleValueChange}
      trackColor={{
        false: theme.colors.brownishGreyAlt,
        true: theme.colors.brownishGreyAlt,
      }}
      thumbColor={value ? theme.colors.alt : theme.colors.brownGrey}
      style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}, {translateY: -10}]}}
      ios_backgroundColor={theme.colors.black}
      {...rest}
    />
  );
});

export default Switch;
