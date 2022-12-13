import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const AngleArrowDown = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      d="M12 16.801c.22 0 .41-.071.566-.214l7.199-7.22c.157-.156.235-.345.235-.566 0-.22-.078-.41-.235-.566-.142-.157-.328-.235-.555-.235-.228 0-.42.078-.577.235l-6.644 6.644-6.643-6.644C5.189 8.078 4.996 8 4.769 8c-.228 0-.413.078-.555.235C4.07 8.392 4 8.58 4 8.801c0 .22.071.41.214.566l7.22 7.22c.157.143.345.214.566.214z"
    />
  </Svg>
);

export default AngleArrowDown;
