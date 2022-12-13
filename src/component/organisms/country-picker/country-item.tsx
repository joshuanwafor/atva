import * as React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import {ms} from 'react-native-size-matters';
import {Country} from '../../../interface';
import {getColorFromTheme, getFontFromTheme, sizeScale} from '../../../utils';

import {Platform, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {TouchableOpacity as RNGHTouchableOpacity} from 'react-native-gesture-handler';

const BottomSheetTouchable = (
  props: TouchableOpacityProps & {children: React.ReactNode},
) => {
  if (Platform.OS === 'android') {
    return <RNGHTouchableOpacity {...props} />;
  }

  return <TouchableOpacity {...props} />;
};

const InnerWrapper = styled.View<{index: number}>`
  width: 100%;
  flex-direction: row;
  padding-vertical: 14px;
  padding-horizontal: ${sizeScale(ms(16, 0.2), 'px')};
  align-items: center;
  background-color: ${({index}) =>
    index % 2 !== 0
      ? getColorFromTheme('blackThree')
      : getColorFromTheme('black')};
  justify-content: space-between;
`;

const Title = styled.Text`
  background-color: transparent;
  text-align: left;
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: ${getColorFromTheme('white')};
`;

export const CodeImageWrapper = styled.View`
  margin-right: 10px;
  opacity: 0.9;
  width: 25px;
  height: 19px;
`;

const FlagTitleWrapper = styled.View`
  flex-direction: row;
`;

const PhoneCode = styled.Text`
  background-color: transparent;
  text-align: left;
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  font-family: ${getFontFromTheme('regular')};
  color: ${getColorFromTheme('white')};
`;

const CountryItem = React.memo(function ({
  country,
  index,
  onPress,
}: {
  country: Country;
  index: number;
  onPress: () => void;
}) {
  return (
    <BottomSheetTouchable
      accessible
      accessibilityRole="button"
      accessibilityComponentType="button"
      accessibilityLabel={country.name}
      accessibilityTraits="button"
      style={{flex: 1, width: '100%'}}
      activeOpacity={0.6}
      onPress={onPress}>
      <InnerWrapper index={index}>
        <FlagTitleWrapper>
          <CodeImageWrapper>
            <Image
              resizeMode={'contain'}
              style={[
                {
                  borderColor: 'transparent',
                  height: '100%',
                  width: '100%',
                  borderRadius: 2,
                },
              ]}
              source={{uri: country.flag}}
            />
          </CodeImageWrapper>
          <Title>{country.name}</Title>
        </FlagTitleWrapper>
        <PhoneCode>
          {country.callingCode?.[0] ? `+${country.callingCode?.[0]}` : 'N/A'}
        </PhoneCode>
      </InnerWrapper>
    </BottomSheetTouchable>
  );
});

export default CountryItem;
