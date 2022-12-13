import * as React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {TouchableProps} from '../../interface';
import BorderlessButton from '../atoms/borderless-button';

const TouchableItem = React.memo(function (props: TouchableProps) {
  if (Platform.OS === 'ios') {
    return (
      <BorderlessButton
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        disallowInterruption
        enabled={!props.disabled}
        {...props}>
        {props.children}
      </BorderlessButton>
    );
  } else {
    return (
      <TouchableOpacity activeOpacity={0.7} {...props}>
        {props.children}
      </TouchableOpacity>
    );
  }
});

export default TouchableItem;
