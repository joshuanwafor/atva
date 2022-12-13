import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const Network = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      d="M21.397 23c.461 0 .843-.152 1.147-.456.304-.304.456-.686.456-1.147V2.603c0-.482-.147-.87-.44-1.163-.293-.293-.681-.44-1.163-.44h-3.08c-.46 0-.843.152-1.147.456-.304.304-.456.686-.456 1.147v18.794c0 .461.152.843.456 1.147.304.304.686.456 1.147.456h3.08zm-.346-1.571h-2.357c-.104 0-.199-.042-.283-.126-.083-.084-.125-.178-.125-.283V2.949c0-.105.042-.194.125-.268.084-.073.179-.11.283-.11h2.357c.105 0 .194.037.268.11.073.074.11.163.11.268V21.02c0 .105-.037.199-.11.283-.074.084-.163.126-.268.126zM13.54 23c.461 0 .843-.152 1.147-.456.304-.304.456-.686.456-1.147V10.46c0-.482-.147-.87-.44-1.163-.293-.293-.681-.44-1.163-.44h-3.08c-.461 0-.843.152-1.147.456-.304.304-.456.686-.456 1.147v10.937c0 .461.152.843.456 1.147.304.304.686.456 1.147.456h3.08zm-.346-1.571h-2.357c-.105 0-.199-.042-.283-.126-.084-.084-.125-.178-.125-.283V10.806c0-.105.041-.194.125-.267.084-.074.178-.11.283-.11h2.357c.105 0 .194.036.267.11.074.073.11.162.11.267V21.02c0 .105-.036.199-.11.283-.073.084-.162.126-.267.126zM5.683 23c.46 0 .843-.152 1.147-.456.304-.304.456-.686.456-1.147v-3.08c0-.482-.147-.87-.44-1.163-.294-.293-.681-.44-1.163-.44h-3.08c-.461 0-.843.152-1.147.456-.304.304-.456.686-.456 1.147v3.08c0 .461.152.843.456 1.147.304.304.686.456 1.147.456h3.08z"
    />
  </Svg>
);

export default Network;