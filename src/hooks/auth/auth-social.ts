import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect, useState} from 'react';
import {AuthScreenNavigationProp} from '../../interface';
import {GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID} from '../../config/config';
import {useNotify} from '../notify';
import {useToken} from '../token';
import {useDeviceInfo} from '../device-header';
import {socialAuthLogin} from '../../services/user/auth';

export function useSocialAuth() {
  const [loading, setLoading] = useState(false);
  const {show} = useNotify();
  const {saveToken} = useToken();
  const {os} = useDeviceInfo();

  useLayoutEffect(() => {
 
  }, []);

  const navigation = useNavigation<AuthScreenNavigationProp>();

  // async function onGoogleSignIn() {
  //   try {
  //     setLoading(true);
  //     await GoogleSignin.hasPlayServices();

  //     if (await GoogleSignin.isSignedIn()) await GoogleSignin.signOut();

  //     const userInfo = await GoogleSignin.signIn();

  //     console.log(userInfo);

  //     return;
  //     saveToken(userInfo?.idToken as string, 'sdfd');

  //     let response = await socialAuthLogin({
  //       platform: 'android',
  //       provider: 'google',
  //       token: userInfo.user.id ?? '',
  //     });

  //     console.log(response.data);
  //   } catch (e:any) {
  //     // console.log(error);
  //     // switch (error.code) {
  //     //   case statusCodes.SIGN_IN_CANCELLED:
  //     //     show('Authorization cancelled');
  //     //     break;
  //     //   case statusCodes.IN_PROGRESS:
  //     //     show('Processing, please wait');
  //     //     break;
  //     //   case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
  //     //     show('Google play service is not available');
  //     //     break;
  //     //   default:
  //     //     show('Error processing request');
  //     //     break;
  //     // }
  //     // setLoading(false);
  //   }
  // }



  function navigateLogin() {
    navigation.navigate('Login');
  }

  function navigateRegister() {
    navigation.navigate('Register');
  }

  function navigatePhone() {
    navigation.navigate('Phone');
  }

  return {
    navigateLogin,
    navigateRegister,
    navigatePhone,
    loading,
  };
}
