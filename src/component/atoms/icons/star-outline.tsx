import * as React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

const StarOutline = (props: Omit<SvgProps, 'viewBox'>) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      d="M18.063 22.654c.982 0 1.472-.713 1.472-2.137 0-.79-.144-1.708-.433-2.757-.288-1.05-.683-2.103-1.183-3.162 1.578-.962 2.8-1.867 3.666-2.713C22.528 10.98 23 10.176 23 9.474c0-.703-.39-1.227-1.17-1.574-.779-.346-1.996-.52-3.652-.52-.77 0-1.607.03-2.511.087-.347-1.751-.838-3.233-1.473-4.446C13.482 1.674 12.755 1 12.014 1c-.74 0-1.467.674-2.18 2.021C9.2 4.234 8.7 5.716 8.335 7.467c-.867-.058-1.694-.086-2.484-.086-1.693 0-2.925.173-3.695.52C1.385 8.246 1 8.77 1 9.473c0 .702.472 1.506 1.415 2.41.866.847 2.088 1.752 3.666 2.714-.5 1.078-.885 2.118-1.154 3.119-.308 1.077-.462 2.01-.462 2.8 0 1.424.5 2.137 1.5 2.137.752 0 1.704-.357 2.86-1.069 1.116-.673 2.174-1.51 3.175-2.512 1.02 1.02 2.079 1.858 3.176 2.512 1.174.712 2.136 1.069 2.887 1.069zm-.866-2.657c-.193.193-.712-.038-1.56-.693-.808-.596-1.876-1.559-3.204-2.887-.135-.134-.274-.202-.419-.202-.144 0-.283.068-.418.202-2.772 2.772-4.37 3.956-4.793 3.552-.173-.174-.096-.766.231-1.776s.866-2.334 1.617-3.97c.058-.154.067-.293.029-.419-.039-.125-.125-.226-.26-.303-1.617-.962-2.81-1.732-3.58-2.31-.847-.635-1.232-1.068-1.155-1.299.077-.23.606-.356 1.588-.375.674 0 2.108.058 4.302.173.154 0 .293-.043.418-.13.126-.086.198-.197.217-.332.308-1.636.616-2.916.924-3.84.327-1 .616-1.5.866-1.5s.539.5.866 1.5c.308.905.626 2.185.953 3.84.02.135.087.246.202.332.115.087.25.13.404.13l.606-.029c2.002-.096 3.292-.134 3.87-.115.885.02 1.361.14 1.428.36.068.222-.322.64-1.169 1.257-.693.52-1.886 1.299-3.58 2.338-.135.077-.221.183-.26.318-.038.135-.019.27.058.404.75 1.598 1.29 2.911 1.617 3.941.327 1.03.394 1.64.202 1.833z"
    />
  </Svg>
);

export default StarOutline;