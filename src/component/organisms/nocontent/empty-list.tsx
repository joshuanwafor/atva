import {AppTypographyBody} from '../../atoms/typography';
import React from 'react';
import {Dimensions, View} from 'react-native';
import {VStack} from 'native-base';
import {AppTypography} from 'src/component/atoms/typographyv2';

export const EmptyCinemaList = () => {
  return (
    <React.Fragment>
      <View style={{flex: 1, paddingHorizontal: 24}}>
        <View
          style={{
            justifyContent: 'center',
            paddingVertical: 30,
            borderWidth: 2,
            borderColor: 'rgba(100,100,100,.4)',
            borderRadius: 8,
          }}>
          <AppTypographyBody style={{textAlign: 'center'}}>
            No cinema content available 😔
          </AppTypographyBody>
        </View>
      </View>
    </React.Fragment>
  );
};

export const EmptyComingSoonList = () => {
  return (
    <View
      style={{
        width: Dimensions.get('screen').width / 1.5,
      }}>
      <VStack
        space={0.5}
        style={{
          justifyContent: 'center',
          paddingVertical: 30,
          borderWidth: 2,
          borderColor: 'rgba(100,100,100,.4)',
          borderRadius: 8,
          padding: 24,
        }}>
        <AppTypography fontSize={20} style={{textAlign: 'center'}}>
          😔
        </AppTypography>
        <AppTypography fontSize={16} style={{textAlign: 'center'}}>
          No cinema content available
        </AppTypography>
      </VStack>
    </View>
  );
};

export const EmptySearchList = () => {
  return (
    <View
      style={{
        width: Dimensions.get('screen').width / 1.5,
      }}>
      <VStack
        space={0.5}
        style={{
          justifyContent: 'center',
          paddingVertical: 30,
          borderWidth: 2,
          borderColor: 'rgba(100,100,100,.4)',
          borderRadius: 8,
          padding: 24,
        }}>
       
        <AppTypography fontSize={16} style={{textAlign: 'center'}}>
          No cinema content available
        </AppTypography>
      </VStack>
    </View>
  );
};


export const EmptySeriesList = () => {
  return (
    <React.Fragment>
      <View style={{flex: 1, paddingHorizontal: 24}}>
        <View
          style={{
            justifyContent: 'center',
            paddingVertical: 30,
            borderWidth: 2,
            borderColor: 'rgba(100,100,100,.4)',
            borderRadius: 8,
          }}>
          <AppTypographyBody style={{textAlign: 'center'}}>
            No series content available 😔
          </AppTypographyBody>
        </View>
      </View>
    </React.Fragment>
  );
};
