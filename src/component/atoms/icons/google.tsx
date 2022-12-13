import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const Google = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path d="M12.685708,10.405 L12.685708,14.2 L18.7095867,14.2 C18.44764,15.795 16.8762533,18.93 12.685708,18.93 C9.01904133,18.93 6.085708,15.795 6.085708,12 C6.085708,8.205 9.07143067,5.07 12.685708,5.07 C14.7809587,5.07 16.1428613,6.005 16.9286133,6.775 L19.8095867,3.915 C17.9762533,2.1 15.5666667,1 12.685708,1 C6.76666667,1 2,5.895 2,12 C2,18.105 6.76666667,23 12.685708,23 C18.8666667,23 22.9,18.545 22.9,12.275 C22.9,11.56 22.84764,11.01 22.74292,10.46 L12.685708,10.46 L12.685708,10.405 Z" />
  </Svg>
);

export default Google;
