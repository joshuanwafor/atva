import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const Check = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path d="M22.59 5.325c.535.529.55 1.4.027 1.944L9.182 21.019c-.275.277-.646.427-1.031.413-.385-.014-.756-.19-1.004-.486l-5.816-6.875c-.495-.579-.426-1.446.151-1.937.591-.491 1.458-.42 1.939.16l4.854 5.722 12.361-12.67c.537-.543 1.403-.552 1.953-.021z" />
  </Svg>
);

export default Check;
