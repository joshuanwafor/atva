import * as React from 'react';
import Orientation from 'react-native-orientation-locker';
import {StatusBar} from 'react-native';
import {Wrapper, Copyright} from './style';
import {TChildProps} from '../../../interface';
import {theme} from '../../../style/theme';
import Background from '../../molecules/background';

function AuthTemplate({children}: TChildProps) {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <Background edges={['top']}>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.black}
        animated={true}
        showHideTransition="slide"
      />
      <Wrapper>{children}</Wrapper>
      <Copyright>
        © Copyright {new Date().getFullYear()} AstraTV Africa. All rights
        reserved.
      </Copyright>
    </Background>
  );
}

export default AuthTemplate;
