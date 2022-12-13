import * as React from 'react';
import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';
import TouchableRipple from 'react-native-material-ripple';
import {Category} from '../../interface';
import {sizeScale, getFontFromTheme, getColorFromTheme} from '../../utils';

const Wrapper = styled.View`
  height: 30px;
  min-width: 80px;
  border-radius: 6px;
  flex: 0;
`;

const Ripple = styled(TouchableRipple)`
  border-radius: 6px;
`;

export const InnerWrapper = styled.View`
  width: 100%;
  z-index: -1;
  height: 100%;
  border-radius: 6px;
  padding-horizontal: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${getColorFromTheme('white10')};
  border-width: 1px;
`;

export const Title = styled.Text`
  color: ${getColorFromTheme('white')};
  font-family: ${getFontFromTheme('medium')};
  font-size: ${sizeScale(ms(14, 0.3), 'px')};
  text-align: center;
  margin-top: 1px;
`;

function CategoryItem({
  item,
  onPress,
}: {
  item: Category;
  onPress: (item: Category) => void;
}) {
  function handleOnPress() {
    requestAnimationFrame(() => {
      onPress(item);
    });
  }

  return (
    <Wrapper>
      <Ripple
        rippleColor="rgba(251, 167, 189, 0.5)"
        rippleDuration={300}
        rippleSequential={true}
        rippleFades={true}
        accessibilityLabel="Button"
        accessibilityTraits={'button'}
        accessibilityComponentType="button"
        accessibilityRole="button"
        onPress={handleOnPress}
        rippleContainerBorderRadius={10}>
        <InnerWrapper>
          <Title>{item.title}</Title>
        </InnerWrapper>
      </Ripple>
    </Wrapper>
  );
}

export default CategoryItem;
