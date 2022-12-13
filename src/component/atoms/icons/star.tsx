import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const Star = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      d="M18.063 22.654c.982 0 1.472-.713 1.472-2.137 0-.79-.144-1.708-.433-2.757-.288-1.05-.683-2.103-1.183-3.162 1.578-.962 2.8-1.867 3.666-2.713C22.528 10.98 23 10.17 23 9.459c0-.693-.39-1.212-1.17-1.559-.779-.346-1.996-.52-3.652-.52-.77 0-1.607.03-2.511.087-.347-1.751-.838-3.233-1.473-4.446C13.482 1.674 12.755 1 12.014 1c-.74 0-1.467.674-2.18 2.021C9.2 4.234 8.7 5.716 8.335 7.467c-.867-.058-1.694-.086-2.484-.086-1.693 0-2.925.173-3.695.52C1.385 8.246 1 8.77 1 9.473c0 .702.472 1.506 1.415 2.41.866.847 2.088 1.752 3.666 2.714-.5 1.078-.885 2.118-1.154 3.119-.308 1.077-.462 2.01-.462 2.8 0 1.424.5 2.137 1.5 2.137.752 0 1.704-.357 2.86-1.069 1.116-.673 2.174-1.51 3.175-2.512 1.02 1.02 2.079 1.858 3.176 2.512 1.174.712 2.136 1.069 2.887 1.069z"
    />
  </Svg>
);

export default Star;