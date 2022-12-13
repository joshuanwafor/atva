import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const PlayCircle = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      d="M1.917 12C1.917 6.431 6.43 1.917 12 1.917S22.083 6.43 22.083 12 17.57 22.083 12 22.083 1.917 17.57 1.917 12zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM9.734 7.525c.298-.16.66-.142.941.046l5.5 3.666c.255.17.408.457.408.763s-.153.593-.408.763l-5.5 3.666c-.281.188-.643.206-.941.046-.298-.16-.484-.47-.484-.808V8.333c0-.338.186-.649.484-.808z"
    />
  </Svg>
);

export default PlayCircle;
