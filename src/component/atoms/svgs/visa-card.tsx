import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const VisaCard = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="22" height="15" viewBox="0 0 19 12" fill="#fff" {...props}>
    <Path d="M18.04 0c.263 0 .477.213.477.477v11.046c0 .264-.214.477-.477.477H.477C.213 12 0 11.787 0 11.523V.477C0 .213.213 0 .477 0zm-6.385 3.586c-1.26 0-2.147.635-2.154 1.544-.008.671.633 1.047 1.116 1.27.497.23.663.376.661.58-.004.314-.396.457-.762.457-.51 0-.782-.07-1.2-.245l-.165-.075-.179 1.047c.298.131.849.244 1.42.25 1.34 0 2.21-.627 2.22-1.597.005-.532-.335-.937-1.07-1.27-.446-.218-.719-.362-.716-.581 0-.195.231-.402.73-.402.417-.007.72.084.954.179l.115.054.172-1.014c-.252-.095-.648-.197-1.142-.197zm4.413.085h-.985c-.306 0-.534.084-.668.388l-1.893 4.287h1.339s.218-.577.268-.703l.886.001h.746c.039.164.155.702.155.702H17.1L16.068 3.67zm-7.096-.005H7.696L6.9 8.344h1.275l.798-4.678zm-1.79.005H5.83l-1.249 3.19-.133-.482c-.246-.58-.945-1.413-1.766-1.938l1.142 3.9 1.349-.001L7.181 3.67zm7.99 1.262l.086.403.296 1.35h-1.059l.508-1.307c-.007.013.105-.27.17-.446zM3.41 3.626H1.434l-.017.094c1.538.372 2.556 1.272 2.978 2.353l-.001-.003-.429-2.064c-.065-.25-.237-.345-.458-.372l-.097-.008z" />
  </Svg>
);

export default VisaCard;