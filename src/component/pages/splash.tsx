import * as React from 'react';
import FastImage from 'react-native-fast-image';
import SplashTemplate from '../templates/splash';


function Splash() {
  return (
    <SplashTemplate>
      <FastImage source={require('../../../assets/images/intro-2.png')} 
      style={{ width:"100%", aspectRatio:1/1}}/>
    </SplashTemplate>
  );
}

export default Splash;
