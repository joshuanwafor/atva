import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const Play = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      d="M6.289 21c.565 0 1.165-.18 1.8-.54l10.954-6.171c1.114-.635 1.671-1.398 1.671-2.289 0-.429-.141-.844-.424-1.247-.283-.403-.699-.759-1.247-1.067L8.089 3.54C7.454 3.18 6.854 3 6.289 3c-.686 0-1.239.257-1.659.771C4.21 4.286 4 4.997 4 5.906v12.163c0 .908.21 1.624.63 2.147.42.523.973.784 1.659.784z"
    />
  </Svg>
);

export default Play;
