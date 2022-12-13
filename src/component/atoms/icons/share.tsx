import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const Share = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      d="M18.838 22.405c.745 0 1.439-.186 2.08-.559.643-.372 1.15-.876 1.523-1.51S23 19.004 23 18.243c0-.76-.186-1.458-.559-2.093-.373-.634-.88-1.137-1.522-1.51s-1.336-.559-2.081-.559c-.65 0-1.257.139-1.82.416-.563.278-1.042.662-1.439 1.154l-6.35-3.116c.064-.238.095-.515.095-.832 0-.19-.031-.476-.095-.857l6.35-3.091c.397.491.876.876 1.44 1.153.562.278 1.169.416 1.819.416.745 0 1.439-.186 2.08-.559.643-.372 1.15-.876 1.523-1.51S23 5.923 23 5.162c0-.76-.186-1.459-.559-2.093-.373-.634-.876-1.137-1.51-1.51S19.599 1 18.838 1c-.761 0-1.459.186-2.093.559-.634.373-1.138.876-1.51 1.51-.373.634-.56 1.332-.56 2.093 0 .317.04.65.12 1L8.492 9.228c-.38-.523-.864-.935-1.45-1.237-.588-.3-1.214-.451-1.88-.451-.76 0-1.459.186-2.093.558-.634.373-1.137.88-1.51 1.523-.373.642-.559 1.335-.559 2.08 0 .746.186 1.44.559 2.082.373.642.876 1.15 1.51 1.522.634.373 1.332.559 2.093.559.666 0 1.292-.15 1.88-.452.586-.301 1.07-.714 1.45-1.237l6.303 3.045c-.08.364-.12.705-.12 1.022 0 .761.187 1.459.56 2.093.372.634.88 1.138 1.522 1.51.642.373 1.336.56 2.08.56zm0-14.864c-.65 0-1.21-.234-1.677-.702-.468-.468-.702-1.027-.702-1.677 0-.65.234-1.209.702-1.677.468-.467 1.027-.701 1.677-.701.65 0 1.209.234 1.677.701.467.468.701 1.027.701 1.677 0 .65-.234 1.21-.701 1.677-.468.468-1.027.702-1.677.702zM5.162 14.08c-.65 0-1.209-.234-1.677-.702-.467-.467-.701-1.026-.701-1.676 0-.65.234-1.21.701-1.677.468-.468 1.027-.702 1.677-.702.65 0 1.21.234 1.677.702.468.468.702 1.027.702 1.677 0 .65-.234 1.209-.702 1.676-.468.468-1.027.702-1.677.702zm13.676 6.54c-.65 0-1.21-.233-1.677-.701-.468-.468-.702-1.027-.702-1.677 0-.65.234-1.209.702-1.677.468-.467 1.027-.701 1.677-.701.65 0 1.209.234 1.677.701.467.468.701 1.027.701 1.677 0 .65-.234 1.21-.701 1.677-.468.468-1.027.702-1.677.702z"
    />
  </Svg>
);

export default Share;
