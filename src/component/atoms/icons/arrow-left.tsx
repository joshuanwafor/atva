import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const ArrowLeft = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      d="M10.821 21.643c.346 0 .629-.115.849-.346.22-.23.33-.508.33-.833 0-.324-.115-.602-.346-.833L5.023 13h16.814c.314 0 .587-.11.817-.33.23-.22.346-.498.346-.833 0-.335-.115-.618-.346-.848-.23-.23-.503-.346-.817-.346H5.023l6.631-6.632c.23-.23.346-.508.346-.832 0-.325-.115-.603-.346-.833-.23-.23-.508-.346-.833-.346-.324 0-.602.115-.832.346l-8.643 8.643c-.23.272-.346.56-.346.864 0 .304.115.57.346.801l8.643 8.643c.21.23.487.346.832.346z"
    />
  </Svg>
);

export default ArrowLeft;
