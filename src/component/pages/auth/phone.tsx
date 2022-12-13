import * as React from 'react';
import styled from 'styled-components/native';
import {ListRenderItemInfo, TextInputProps} from 'react-native';
import {s, ms} from 'react-native-size-matters';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import TouchableItem from '../../molecules/touchable-item';
import Close from '../../atoms/icons/close';
import {theme} from '../../../style/theme';
import LinearButton from '../../molecules/button/linear-button';
import AuthPhoneTemplate from '../../templates/auth/auth-phone';
import {Country} from '../../../interface';

import PhoneInput from '../../molecules/phone-input/phone-input';
import Loader from '../../atoms/loader';
import {usePhoneAuth} from '../../../hooks/phone-auth';
import CountryItem from '../../organisms/country-picker/country-item';
import {sizeScale, getColorFromTheme, getFontFromTheme} from '../../../utils';
import BoxedInputField from '../../molecules/boxed-input-field/boxed-input-field';
import Search from '../../atoms/icons/search';

const StyledWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SearchWrapper = styled.View`
  padding-vertical: 12px;
  padding-horizontal: ${sizeScale(s(16), 'px')};
  background-color: ${getColorFromTheme('black')};
`;

const HeaderWrapper = styled.View`
  background-color: ${getColorFromTheme('blackTwo')};
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding-left: ${sizeScale(ms(16, 0.2), 'px')};
  padding-right: ${sizeScale(ms(16, 0.2), 'px')};
  padding-vertical: ${sizeScale(ms(12, 0.2), 'px')};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const HeaderTitle = styled.Text`
  margin-left: 10px;
  background-color: transparent;
  text-align: left;
  font-size: ${sizeScale(ms(14, 0.2), 'px')};
  font-family: ${getFontFromTheme('medium')};
  color: ${getColorFromTheme('white')};
`;

const SearchField = function ({
  value,
  ...rest
}: {
  value: string;
} & TextInputProps) {
  return (
    <SearchWrapper>
      <BoxedInputField
        {...rest}
        Icon={<Search fill="#666666" width={20} height={20} />}
        placeholder="Search"
        value={value}
      />
    </SearchWrapper>
  );
};

function PhoneAuth() {
  const {
    country,
    onChangeCountry,
    modalizeRef,
    handleOpenModal,
    handleCloseModal,
    countries,
    onPhoneNumberChange,
    phone,
    onSearchCountry,
    loading,
    countriesData,
    search,
    isValid,
    submitting,
    handleSubmit,
  } = usePhoneAuth();

  const renderRow = React.useCallback(
    ({item, index}: ListRenderItemInfo<Country & {id: string}>) => (
      <CountryItem
        country={item}
        index={index}
        onPress={() => onChangeCountry(item.id)}
      />
    ),
    [onChangeCountry],
  );

  return (
    <AuthPhoneTemplate
      modal={
        <Portal>
          <Modalize
            ref={modalizeRef}
            handlePosition="inside"
            overlayStyle={{
              backgroundColor: 'rgba(20, 20, 20, 0.4)',
            }}
            modalStyle={{
              backgroundColor: theme.colors.blackThree,
              elevation: 0,
              shadowColor: 'transparent',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0,
              shadowRadius: 0,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            handleStyle={{
              backgroundColor: theme.colors.white10,
            }}
            flatListProps={{
              renderItem: renderRow,
              data: countries,
              stickyHeaderIndices: [0],
              automaticallyAdjustContentInsets: false,
              ListHeaderComponent: (
                <SearchField onChange={onSearchCountry} value={search} />
              ),
              showsVerticalScrollIndicator: false,
              keyboardDismissMode: 'on-drag',
            }}
            disableScrollIfPossible={true}
            panGestureComponentEnabled={true}
            HeaderComponent={
              <HeaderWrapper>
                <TouchableItem
                  accessibilityLabel="Button"
                  accessibilityTraits={'button'}
                  accessibilityComponentType="button"
                  onPress={handleCloseModal}
                  delayPressIn={0}
                  style={{
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}
                  accessibilityRole="button">
                  <Close width={14} height={14} fill={theme.colors.white} />
                </TouchableItem>
                <HeaderTitle>Select country</HeaderTitle>
              </HeaderWrapper>
            }
          />
        </Portal>
      }
      button={
        <LinearButton
          disabled={!isValid || submitting}
          isLoading={submitting}
          onPress={handleSubmit}>
          Continue
        </LinearButton>
      }>
      <StyledWrapper>
        {loading && <Loader />}
        {countriesData && (
          <PhoneInput
            onPress={handleOpenModal}
            country={country}
            countries={countriesData}
            value={phone}
            onChange={onPhoneNumberChange}
          />
        )}
      </StyledWrapper>
    </AuthPhoneTemplate>
  );
}

// TODO: Handle error loading this
export default PhoneAuth;
