import {AppTypographyBody} from '../../atoms/typography';
import React from 'react';
import {View} from 'react-native';

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
          }}
        >
          <AppTypographyBody style={{textAlign: 'center'}}>
            No cinema content available 😔
          </AppTypographyBody>
        </View>
      </View>
    </React.Fragment>
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
          }}
        >
          <AppTypographyBody style={{textAlign: 'center'}}>
            No series content available 😔
          </AppTypographyBody>
        </View>
      </View>
    </React.Fragment>
  );
};
