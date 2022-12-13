import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const AngleArrowLeft = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path d="M17 22c.284 0 .52-.098.707-.293.186-.196.28-.436.28-.72 0-.285-.098-.516-.294-.694L9.4 12l8.293-8.293c.196-.196.294-.431.294-.707 0-.276-.098-.511-.294-.707-.195-.195-.43-.293-.706-.293-.276 0-.511.098-.707.293L7.267 11.28c-.178.196-.267.431-.267.707 0 .275.089.51.267.706l9.013 9.014c.196.195.436.293.72.293z" />
  </Svg>
);

export default AngleArrowLeft;
