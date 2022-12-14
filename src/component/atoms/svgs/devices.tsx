import * as React from 'react';
import {
  Svg,
  Path,
  Defs,
  Stop,
  LinearGradient,
  SvgProps,
} from 'react-native-svg';

const Devices = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="144" height="144" viewBox="0 0 144 144" {...props}>
    <Defs>
      <LinearGradient
        id="prefix__a"
        x1="50%"
        x2="50%"
        y1="112.541%"
        y2="-2.326%">
        <Stop offset="0%" stopColor="#F6255A" />
        <Stop offset="100%" stopColor="#FFBE0B" />
      </LinearGradient>
    </Defs>
    <Path
      fill="url(#prefix__a)"
      d="M131.714 91c4.024 0 7.286 3.236 7.286 7.227v38.546c0 3.991-3.262 7.227-7.286 7.227h-19.428c-4.024 0-7.286-3.236-7.286-7.227V98.227c0-3.991 3.262-7.227 7.286-7.227zm0 4.818h-19.428c-1.341 0-2.429 1.079-2.429 2.41v38.545c0 1.33 1.088 2.409 2.429 2.409h19.428c1.341 0 2.429-1.079 2.429-2.41V98.228c0-1.33-1.088-2.409-2.429-2.409zM136.8 0c3.976 0 7.2 3.233 7.2 7.222V65l-.004.243c-.128 3.876-3.3 6.98-7.196 6.98h-30.418l3.428 12.036h12.59c1.325 0 2.4 1.078 2.4 2.408 0 1.33-1.075 2.407-2.4 2.407H96v26.482h2.4c1.325 0 2.4 1.077 2.4 2.407v.024c-.007 6.641-5.38 12.02-12 12.013H12c-6.624-.008-11.992-5.393-12-12.037 0-1.33 1.075-2.407 2.4-2.407h2.4V67.407c0-3.988 3.224-7.222 7.2-7.222h31.2V7.222C43.2 3.233 46.423 0 50.4 0zm-96 120.37H5.21c1.021 2.884 3.74 4.812 6.79 4.815h76.8c1.915-.003 3.752-.766 5.107-2.123.75-.763 1.325-1.682 1.683-2.692H60c0 1.33-1.075 2.408-2.4 2.408H43.2c-1.325 0-2.4-1.078-2.4-2.408zM88.8 65H12c-1.325 0-2.4 1.078-2.4 2.407v48.149h33.6c1.325 0 2.4 1.077 2.4 2.407h9.6c0-1.33 1.075-2.407 2.4-2.407h33.6V67.407c0-1.33-1.075-2.407-2.4-2.407zm12.59 7.222H96V84.26h8.818l-3.428-12.037zM136.8 4.815H50.4c-1.325 0-2.4 1.078-2.4 2.407v52.963h40.8c3.977 0 7.2 3.234 7.2 7.222h40.8c1.325 0 2.4-1.078 2.4-2.407V7.222c0-1.33-1.075-2.407-2.4-2.407z"
    />
  </Svg>
);

export default Devices;
