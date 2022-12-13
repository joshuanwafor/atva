import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const AngleArrowRight = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path d="M8 22c.276 0 .511-.098.707-.293l8.986-9.014c.196-.195.294-.43.294-.706 0-.276-.098-.511-.294-.707L8.707 2.293C8.51 2.098 8.276 2 8 2c-.276 0-.511.093-.707.28-.195.187-.293.422-.293.707 0 .284.098.524.293.72L15.587 12l-8.294 8.293c-.195.178-.293.41-.293.694s.098.524.293.72c.196.195.431.293.707.293z" />
  </Svg>
);

export default AngleArrowRight;
