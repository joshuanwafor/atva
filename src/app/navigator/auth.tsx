import * as React from 'react';
// import {HeaderBackButton} from '@react-navigation/stack';
import {View, Animated, Button, SafeAreaView} from 'react-native';
import {Host} from 'react-native-portalize';
import {ms} from 'react-native-size-matters';
import {Stack} from './stack';
import {theme} from '../../style/theme';
import Intro from '../../component/pages/intro';
import AuthWelcome from '../../component/pages/auth-welcome';
import AuthCode from '../../component/pages/auth/code';
import Login from '../../component/pages/auth/login';
import Register from '../../component/pages/auth/register';
import PhoneAuth from '../../component/pages/auth/phone';
import PhoneVerify from '../../component/pages/auth/phone-verify';
import ArrowLeft from '../../component/atoms/icons/arrow-left';
import CompleteRegister from '../../component/pages/auth/complete-register';
import {HeaderBackButton} from '@react-navigation/stack';

const {multiply} = Animated;

function AuthApp() {
  return (
    <SafeAreaView
      style={{backgroundColor: 'red', flex: 1, height: '100%'}}></SafeAreaView>
  );
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={
        {
          // headerStyle: {
          //   backgroundColor: theme.colors.blackTwo,
          //   borderColor: theme.colors.blackTwo,
          //   shadowColor: theme.colors.blackTwo,
          //   elevation: 0,
          //   height: 70,
          // },
          // headerTitleStyle: {
          //   fontFamily: theme.font.medium,
          //   color: theme.colors.white,
          //   fontSize: ms(15, 0.2),
          // },
          // headerTitleAlign: 'left',
          // headerLeft: props => (
          //   <HeaderBackButton
          //     {...props}
          //     label=""
          //     truncatedLabel=""
          //     backImage={() => (
          //       <View style={{paddingLeft: 10}}>
          //         <ArrowLeft
          //           fill={theme.colors.brownGrey}
          //           width={22}
          //           height={22}
          //         />
          //       </View>
          //     )}
          //   />
          // ),
          // gestureDirection: 'horizontal',
        }
      }>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthWelcome"
        component={AuthWelcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Code"
        component={AuthCode}
        options={{
          title: 'Enter code',
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Create account',
        }}
      />
      <Stack.Screen
        name="Phone"
        component={PhoneAuth}
        options={{
          title: 'Enter your mobile number',
        }}
      />
      <Stack.Screen
        name="PhoneVerify"
        component={PhoneVerify}
        options={{
          title: 'Confirm phone number',
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthApp;
