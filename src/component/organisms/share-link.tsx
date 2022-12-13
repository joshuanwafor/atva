import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';
import TouchableItem from '../molecules/touchable-item';

const Wrapper = styled.View`
  background-color: ${getColorFromTheme('blackTwoV2')};
  width: 100%;
  align-items: center;
  padding: 2px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
`;

const TextWrapper = styled.View`
  flex: 1;
  min-width: 0;
  margin-left: 10px;
  align-items: center;
`;

const Text = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  color: ${getColorFromTheme('brownishGrey')};
`;

const Box = styled.View`
  padding-vertical: 11px;
  padding-horizontal: 9px;
  background-color: ${getColorFromTheme('pale')};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 10px;
`;

const BoxText = styled.Text`
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  color: ${getColorFromTheme('brownishGrey')};
`;

function ShareLink({link}: {link: string}) {
  return (
    <TouchableItem
      accessible
      accessibilityRole="button"
      accessibilityComponentType="button"
      accessibilityLabel="Invite other user"
      accessibilityTraits="button"
      delayPressIn={0}
      onPress={() => {}}>
      <Wrapper>
        <TextWrapper>
          <Text ellipsizeMode="tail" numberOfLines={1}>
            {link}
          </Text>
        </TextWrapper>
        <Box>
          <BoxText>Share Link</BoxText>
        </Box>
      </Wrapper>
    </TouchableItem>
  );
}

export default ShareLink;
